import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink],
})
export class ForgotPasswordComponent {
  forgotPasswordForm!: FormGroup;

  isSubmitting: boolean = false;
  successMessage: string = '';
  errorMessage: string = '';
  
  // Cooldown timer properties
  cooldownActive: boolean = false;
  cooldownTimeLeft: number = 60;
  cooldownInterval: any;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  // Start the cooldown timer
  startCooldown() {
    this.cooldownActive = true;
    this.cooldownTimeLeft = 60;
    
    this.cooldownInterval = setInterval(() => {
      this.cooldownTimeLeft--;
      
      if (this.cooldownTimeLeft <= 0) {
        this.stopCooldown();
      }
    }, 1000);
  }
  
  // Stop the cooldown timer
  stopCooldown() {
    clearInterval(this.cooldownInterval);
    this.cooldownActive = false;
  }
  
  // Handle specific error messages
  handleErrorMessage(err: any): string {
    if (err.status === 0) {
      return 'Cannot connect to server. Please check your internet connection.';
    } else if (err.error && err.error.message) {
      // Check for specific error messages
      if (err.error.message.toLowerCase().includes('not found') || 
          err.error.message.includes('unavailable') ||
          err.error.message.includes('البريد الإلكتروني غير مسجل لدينا')) {
        return 'Email is not registered in our system. Please check your email or create a new account.';
      } else if (err.error.message.toLowerCase().includes('already sent') || 
                 err.error.message.includes("actually")) {
        return 'Password reset link has already been sent. Please check your email or try again later.';
      }
      return err.error.message;
    } else if (err.error && typeof err.error === 'object') {
      // Handle validation errors
      const errorMessages = [];
      for (const key in err.error) {
        if (Array.isArray(err.error[key])) {
          errorMessages.push(...err.error[key]);
        }
      }
      return errorMessages.join('\n') || 'Failed to send password reset link.';
    }
    return 'Failed to send password reset link.';
  }

  sendResetLink() {
    if (this.forgotPasswordForm.valid && !this.cooldownActive) {
      const email = this.forgotPasswordForm.value.email;
      console.log('Sending reset link to:', email);
      
      this.isSubmitting = true;
      this.successMessage = '';
      this.errorMessage = '';
      
      this.authService.sendResetLinkEmail({ email }).subscribe({
        next: (res) => {
          console.log('Reset link sent successfully:', res);
          this.isSubmitting = false;
          
          // Display success message
          this.successMessage = res.message || 'Password reset link has been sent to your email. Please check your inbox.';
          
          // Clear the form
          this.forgotPasswordForm.reset();
          
          // Start the cooldown timer
          this.startCooldown();
          
          // Optionally redirect after a delay
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 5000);
        },
        error: (err) => {
          console.error('Failed to send reset link:', err);
          this.isSubmitting = false;
          
          // Handle error message
          this.errorMessage = this.handleErrorMessage(err);
          
          // Even on error, start the cooldown to prevent spam
          this.startCooldown();
        }
      });
    }
  }
}
