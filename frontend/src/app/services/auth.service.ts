import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  login(data: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, data);
  }

  signUp(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup`, data);
  }

  sendResetLinkEmail(data: { email: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/reset-password`, data);
  }

  verifyOtp(data: { email: string; otp: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/otp-verification`, data);
  }

  sendOtp(data: { email: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/send-otp`, data);
  }
}
