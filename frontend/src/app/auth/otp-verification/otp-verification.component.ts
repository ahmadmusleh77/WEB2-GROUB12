import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.component.html',
  styleUrls: ['./otp-verification.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink],
})
export class OtpVerificationComponent implements OnInit {
  otpForm!: FormGroup;
  email: string = '';
  resendDisabled: boolean = false;
  countdown: number = 0;
  countdownInterval: any;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.otpForm = this.fb.group({
      code: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  
  ngOnInit() {
    // Check if we're in a browser environment before accessing localStorage
    if (typeof window !== 'undefined' && window.localStorage) {
      // Get email from localStorage
      this.email = localStorage.getItem('verificationEmail') || '';
      if (!this.email) {
        // Redirect to login if no email is found
        this.router.navigate(['/login']);
      }
    } else {
      // Handle server-side rendering case
      this.email = '';
    }
  }


  sendCode() {
    if (this.otpForm.valid) {
      const code = this.otpForm.value.code;
      console.log('Verifying OTP code:', code);
      
      this.authService.verifyOtp({
        email: this.email,
        otp: code
      }).subscribe({
        next: (res) => {
          console.log('OTP verification successful:', res);
          
          // Show success message
          alert('Account activated successfully!');
          
          // Check if we're in a browser environment
          if (typeof window !== 'undefined' && window.localStorage) {
            // Clear verification email from localStorage
            localStorage.removeItem('verificationEmail');
            
            // Check if we have user data stored from registration
            const tempUserData = localStorage.getItem('tempUserData');
            
            if (tempUserData) {
              // Parse the user data
              const userData = JSON.parse(tempUserData);
              
              // Store token if available in response
              if (res.token) {
                localStorage.setItem('token', res.token);
              }
              
              // Store user data in AuthService
              this.authService.setUserData(userData);
              
              // Clear temporary user data
              localStorage.removeItem('tempUserData');
              
              console.log('OTP verification successful, redirecting based on role_id:', userData.role_id);
              
              // Use AuthService to redirect based on role
              this.authService.redirectBasedOnRole();
            } else {
              // If no user data is found, redirect to login page
              this.router.navigate(['/login']);
            }
          }
        },
        error: (err) => {
          console.error('OTP verification failed:', err);
          alert(err.error.message || 'Verification code validation failed!');
        }
      });
    }
  }
  
  resendOtp() {
    if (!this.resendDisabled && this.email) {
      this.authService.sendOtp({ email: this.email }).subscribe({
        next: (res) => {
          console.log('OTP resent successfully:', res);
          alert('New verification code has been sent!');
          
          // Disable resend button for 60 seconds
          this.resendDisabled = true;
          this.countdown = 60;
          
          this.countdownInterval = setInterval(() => {
            this.countdown--;
            if (this.countdown <= 0) {
              this.resendDisabled = false;
              clearInterval(this.countdownInterval);
            }
          }, 1000);
        },
        error: (err) => {
          console.error('Failed to resend OTP:', err);
          alert(err.error.message || 'Failed to send verification code!');
        }
      });
    }
  }
  
  ngOnDestroy() {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
  }
}
