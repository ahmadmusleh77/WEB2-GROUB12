import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
})
export class CreateAccountComponent implements OnInit {
  username = '';
  emailAddress = '';
  userPassword = '';
  userConfirmPassword = '';
  termsAccepted = false;
  userType: string = '';

  passwordVisible = false;
  confirmPasswordVisible = false;
  isLoading = false;
  errorMessage = '';
  successMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.loadStoredData();
  }

  register() {
    this.errorMessage = '';
    this.successMessage = '';

    // Validate form
    if (!this.username) {
      this.errorMessage = 'Please enter a username';
      return;
    }

    if (!this.emailAddress) {
      this.errorMessage = 'Please enter an email address';
      return;
    }

    if (!this.userType) {
      this.errorMessage = 'Please select an account type';
      return;
    }

    if (!this.userPassword) {
      this.errorMessage = 'Please enter a password';
      return;
    }

    if (this.userPassword !== this.userConfirmPassword) {
      this.errorMessage = 'Passwords do not match';
      return;
    }

    if (!this.termsAccepted) {
      this.errorMessage = 'Please agree to the Terms and Conditions';
      return;
    }

    // تعيين role_id بناءً على نوع الحساب المحدد
    let role_id;
    if (this.userType === 'jobowner') {
      role_id = 3; // Job owner
    } else if (this.userType === 'artisan') {
      role_id = 2; // Artisan (job searcher)
    } else if (this.userType === 'admin') {
      role_id = 1; // Admin
    } else {
      this.errorMessage = 'Please select a valid account type';
      return;
    }

    // Save form data to localStorage (only in browser environment)
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('registerForm', JSON.stringify({
      username: this.username,
      emailAddress: this.emailAddress,
      userPassword: this.userPassword,
      userConfirmPassword: this.userConfirmPassword,
      termsAccepted: this.termsAccepted,
      userType: this.userType,
    }));
    }

    this.isLoading = true;
    console.log('Sending registration data:', {
      name: this.username,
      email: this.emailAddress,
      password: this.userPassword,
      password_confirmation: this.userConfirmPassword,
      user_type: this.userType,
      role_id: role_id,
    });

    this.authService
      .signUp({
        name: this.username,
        email: this.emailAddress,
        password: this.userPassword,
        password_confirmation: this.userConfirmPassword,
        user_type: this.userType,
        role_id: role_id,
      })
      .subscribe({
        next: (res) => {
          this.isLoading = false;
          this.successMessage = 'Account created successfully! You will be redirected to verify your email';

          // Store email for OTP verification (only in browser environment)
          if (typeof window !== 'undefined' && window.localStorage) {
            localStorage.setItem('verificationEmail', this.emailAddress);

            // Store user data temporarily
            localStorage.setItem('tempUserData', JSON.stringify(res.user));
          }

          // Redirect to OTP verification page after a short delay
          setTimeout(() => {
            this.router.navigate(['/otp-verification']);
          }, 1500);
        },
        error: (err) => {
          this.isLoading = false;
          console.error('Registration error:', err);

          if (err.status === 0) {
            this.errorMessage = 'Cannot connect to the server. Please check your internet connection.';
          }
          // Check for duplicate email error
          else if (err.error && err.error.message &&
              (err.error.message.includes('email') ||
               err.error.message.toLowerCase().includes('already') ||
               err.error.message.includes('already exists') ||
               err.error.message.includes('in use'))) {
            this.errorMessage = 'This email is already registered. Please login or use a different email address.';
          }
          else if (err.error && err.error.message) {
            this.errorMessage = err.error.message;
          }
          else if (err.error && typeof err.error === 'object') {
            // Handle validation errors
            const errorMessages = [];
            for (const key in err.error) {
              if (Array.isArray(err.error[key])) {
                // Check if this is an email already exists error
                if (key === 'email' && err.error[key].some(msg =>
                    msg.includes('already') ||
                    msg.includes('exists') ||
                    msg.includes('in use'))) {
                  this.errorMessage = 'This email is already registered. Please login or use a different email address.';
                  return;
                }
                errorMessages.push(...err.error[key]);
              }
            }
            this.errorMessage = errorMessages.join('\n') || 'An error occurred while creating the account';
          }
          else {
            this.errorMessage = 'An error occurred while creating the account';
          }
        },
      });
  }
  loadStoredData() {
    // Check if window is defined (browser environment) to avoid SSR issues
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedData = localStorage.getItem('registerForm');
      if (storedData) {
        const data = JSON.parse(storedData);
        this.username = data.username || '';
        this.emailAddress = data.emailAddress || '';
        this.userPassword = data.userPassword || '';
        this.userConfirmPassword = data.userConfirmPassword || '';
        this.termsAccepted = data.termsAccepted || false;
        this.userType = data.userType || '';
      }
    }
  }

  togglePasswordVisibility(field: 'password' | 'confirmPassword') {
    if (field === 'password') {
      this.passwordVisible = !this.passwordVisible;
    } else {
      this.confirmPasswordVisible = !this.confirmPasswordVisible;
    }
  }

  printFormData() {
    console.log('Form Data:', JSON.stringify({
      username: this.username,
      emailAddress: this.emailAddress,
      userPassword: this.userPassword,
      userConfirmPassword: this.userConfirmPassword,
      termsAccepted: this.termsAccepted,
      userType: this.userType,
    }, null, 2));
  }
}
