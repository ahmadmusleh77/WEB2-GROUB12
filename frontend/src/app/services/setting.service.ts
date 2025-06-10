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

  // ✅ إنشاء الإعدادات لأول مرة
  createSetting(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data, {
      headers: this.getAuthHeaders()
    });
  }

  // ✅ جلب إعدادات مستخدم معيّن (بـ user_id)
  getSetting(userId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${userId}`, {
      headers: this.getAuthHeaders()
    });
  }

  // ✅ تعديل الإعدادات لمستخدم معيّن (PUT = استبدال كامل)
  updateSetting(settingId: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${settingId}`, data, {
      headers: this.getAuthHeaders()
    });
  }

  // 🔁 بديل: تعديل جزئي (PATCH)
  patchSetting(settingId: number, partialData: any): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${settingId}`, partialData, {
      headers: this.getAuthHeaders()
    });
  }

  // ❌ حذف الإعدادات (إن أردت استخدامها لاحقًا)
  deleteSetting(settingId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${settingId}`, {
      headers: this.getAuthHeaders()
    });
  }
}
