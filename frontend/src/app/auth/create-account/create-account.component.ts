import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
})
export class CreateAccountComponent {
  username = '';
  email = '';
  password = '';
  confirmPassword = '';
  termsAccepted = false;
  userType: string = '';

  passwordVisible = false;
  confirmPasswordVisible = false;

  register() {
    if (this.password === this.confirmPassword && this.termsAccepted) {
      console.log('Form submitted with valid data:', {
        username: this.username,
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword,
        termsAccepted: this.termsAccepted,
      });
    } else {
      alert('Please fill out all fields and accept the terms.');
    }
  }

  togglePasswordVisibility(field: 'password' | 'confirmPassword') {
    if (field === 'password') {
      this.passwordVisible = !this.passwordVisible;
    } else {
      this.confirmPasswordVisible = !this.confirmPasswordVisible;
    }
  }
}
