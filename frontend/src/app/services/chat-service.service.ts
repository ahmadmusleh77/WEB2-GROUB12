import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ChatService {
  private apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
      Accept: 'application/json'
    });
  }

  getChatContacts(): Observable<any> {
    return this.http.get(`${this.apiUrl}/chat/contacts`, {
      headers: this.getAuthHeaders()
    });
  }
  getSingleContact(receiverId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/chat/contact/{id}`, {
      headers: this.getAuthHeaders()
    });
  }


  sendMessage(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/chat/send`, data, {
      headers: this.getAuthHeaders()
    });
  }
}

export class ChatServiceService {
}
