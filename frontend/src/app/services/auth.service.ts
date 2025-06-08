import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl;
  private tokenKey = 'auth_token';
  private userKey = 'user_data';
  private emailKey = 'verification_email';

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  // Authentication API calls
  login(data: { email: string; password: string; userType?: string }): Observable<any> {
    // تأكد من أن userType موجود في الطلب
    const loginData = { ...data };

    // إذا كان userType غير محدد أو فارغًا، قم بإزالته من الطلب
    if (!loginData.userType) {
      delete loginData.userType;
    }

    console.log('Login data being sent:', loginData);
    return this.http.post(`${this.apiUrl}/login`, loginData);
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

  // Token management methods
  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  removeToken(): void {
    localStorage.removeItem(this.tokenKey);
  }

  // User data management methods
  setUserData(userData: any): void {
    localStorage.setItem(this.userKey, JSON.stringify(userData));
  }

  getUserData(): any {
    const userData = localStorage.getItem(this.userKey);
    return userData ? JSON.parse(userData) : null;
  }

  removeUserData(): void {
    localStorage.removeItem(this.userKey);
  }

  // Email verification methods
  setVerificationEmail(email: string): void {
    localStorage.setItem(this.emailKey, email);
  }

  getVerificationEmail(): string | null {
    return localStorage.getItem(this.emailKey);
  }

  removeVerificationEmail(): void {
    localStorage.removeItem(this.emailKey);
  }

  // Authentication state methods
  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  logout(): void {
    this.removeToken();
    this.removeUserData();
    this.router.navigate(['/login']);
  }

  // Role-based redirection
  redirectBasedOnRole(): void {
    const userData = this.getUserData();
    if (!userData) {
      this.router.navigate(['/login']);
      return;
    }

    console.log('Redirecting based on role_id:', userData.role_id);

    // Redirect based on role_id
    switch (userData.role_id) {
      case 1: // Admin
        console.log('Redirecting to admin dashboard');
        this.router.navigate(['/admin-dashboard']);
        break;
      case 2: // Artisan/Job Searcher
        console.log('Redirecting to artisans dashboard');
        this.router.navigate(['/artisans-dashboard']);
        break;
      case 3: // Job Owner
        console.log('Redirecting to job owner dashboard');
        this.router.navigate(['/job-owner-dashboard']);
        break;
      default:
        console.log('No specific role, redirecting to login');
        this.router.navigate(['/login']);
    }
  }
}
