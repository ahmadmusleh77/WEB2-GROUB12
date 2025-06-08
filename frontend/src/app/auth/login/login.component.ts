import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [
    RouterLink,
    FormsModule,
    CommonModule
  ]
})
export class LoginComponent {
  email = '';
  password = '';
  userType: string='3'; // Default to job owner (role_id 3)
  passwordVisible = false; // add this for toggling password visibility
  private http = inject(HttpClient);
  private router = inject(Router);
  private authService = inject(AuthService);

  login() {
    if (this.email.trim() !== '' && this.password.trim() !== '') {
      console.log('Attempting login with:', this.email, 'Selected user type:', this.userType);
      
      // التأكد من أن نوع الحساب محدد ومن نوع سلسلة نصية
      const userTypeValue = this.userType ? this.userType.toString() : '';
      console.log('Sending userType as:', userTypeValue);
      
      // Send data to backend
      this.authService.login({
        email: this.email,
        password: this.password,
        userType: userTypeValue // Send user type as a string
      }).subscribe({
        next: (res) => {
          // Login success
          console.log('Login success:', res);
          
          // Check if selected role matches the actual role stored in the database
          const selectedRoleId = parseInt(this.userType);
          const actualRoleId = res.user.role_id;
          
          console.log('Selected role_id:', selectedRoleId);
          console.log('Actual role_id from database:', actualRoleId);
          
          // Check if the selected role matches the actual role
          if (selectedRoleId !== actualRoleId) {
            // If roles don't match, show error message
            alert('You cannot log in to this type of account. Please select the correct account type.');
            // Delete token and user data
            this.authService.logout();
            return;
          }
          
          // إذا تطابق الدور، تخزين التوكن وبيانات المستخدم
          if (typeof window !== 'undefined' && window.localStorage) {
            localStorage.setItem('token', res.token);
            localStorage.setItem('user', JSON.stringify(res.user));
          }
          
          // تخزين بيانات المستخدم في AuthService
          this.authService.setUserData(res.user);
          this.authService.setToken(res.token);
          
          // التوجيه بناءً على الدور
          switch(actualRoleId) {
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
              console.log('Unknown role, redirecting to home');
              this.router.navigate(['/']);
          }
        },
        error: (err) => {
          console.error('Login error:', err);
          // Check if the error is due to unverified email
          if (err.status === 403 && err.error.message.includes('Activate email')) {
            // Store email for OTP verification (only in browser environment)
            if (typeof window !== 'undefined' && window.localStorage) {
              localStorage.setItem('verificationEmail', this.email);
            }
            // Redirect to OTP verification page
            this.router.navigate(['/otp-verification']);
          } else {
            // Other login errors
            alert(err.error?.message || 'Login failed! Please check your credentials.');
          }
        }
      });
    } else {
      alert('Please fill out all fields.');
    }
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  updateEmail(event: Event) {
    this.email = (event.target as HTMLInputElement).value;
  }

  updatePassword(event: Event) {
    this.password = (event.target as HTMLInputElement).value;
  }

  // دالة للتنقل المباشر إلى لوحات التحكم المختلفة
  directNavigate(route: string) {
    console.log('Direct navigation to:', route);
    this.router.navigate([route]);
  }
  
  // دالة للدخول المباشر إلى لوحة التحكم بناءً على نوع الحساب المحدد
  navigateToDashboard() {
    console.log('Direct login with selected user type:', this.userType);
    
    // التحقق من صحة نوع الحساب المحدد
    const roleId = parseInt(this.userType);
    if (roleId !== 1 && roleId !== 2 && roleId !== 3) {
      alert('Please select a valid account type.');
      return;
    }
    
    // التحقق من وجود مستخدم مسجل بنفس البريد الإلكتروني
    if (this.email.trim() === '') {
      alert('Please enter your email address.');
      return;
    }
    
    // التأكد من أن نوع الحساب محدد ومن نوع سلسلة نصية
    const userTypeValue = this.userType ? this.userType.toString() : '';
    console.log('Sending userType as:', userTypeValue);
    
    // استخدام نفس طريقة تسجيل الدخول العادية
    this.authService.login({
      email: this.email,
      password: this.password || 'dummy_password', // إذا لم يتم إدخال كلمة مرور
      userType: userTypeValue // إرسال نوع الحساب كسلسلة نصية
    }).subscribe({
      next: (res) => {
        // نجاح تسجيل الدخول
        console.log('Login success:', res);
        
        // تخزين التوكن وبيانات المستخدم
        if (typeof window !== 'undefined' && window.localStorage) {
          localStorage.setItem('token', res.token);
          localStorage.setItem('user', JSON.stringify(res.user));
        }
        
        // تخزين بيانات المستخدم في AuthService
        this.authService.setUserData(res.user);
        this.authService.setToken(res.token);
        
        // التوجيه بناءً على الدور
        const actualRoleId = res.user.role_id;
        switch(actualRoleId) {
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
            console.log('Unknown role, redirecting to home');
            this.router.navigate(['/']);
        }
      },
      error: (err) => {
        console.error('Login error:', err);
        // عرض رسالة الخطأ
        if (err.status === 403 && err.error.message) {
          alert(err.error.message);
        } else {
          alert('There was a login error. Please check your details.');
        }
      }
    });
  }
}
