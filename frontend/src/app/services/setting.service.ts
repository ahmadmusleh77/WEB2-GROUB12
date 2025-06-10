import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingService {
  private apiUrl = 'http://127.0.0.1:8000/api/settings';

  constructor(private http: HttpClient) {}

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    });
  }

  createSetting(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data, {
      headers: this.getAuthHeaders()
    });
  }

  getSetting(userId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${userId}`, {
      headers: this.getAuthHeaders()
    });
  }

  updateSetting(settingId: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${settingId}`, data, {
      headers: this.getAuthHeaders()
    });
  }

  patchSetting(settingId: number, partialData: any): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${settingId}`, partialData, {
      headers: this.getAuthHeaders()
    });
  }

  deleteSetting(settingId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${settingId}`, {
      headers: this.getAuthHeaders()
    });
  }
}
