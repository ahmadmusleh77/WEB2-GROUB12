import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.css'],
  standalone: true,
  imports: [CommonModule, RouterLink],
})
export class NewPasswordComponent {
  password = '';
  confirmPassword = '';

  passwordVisible = false;
  confirmPasswordVisible = false;

  savePassword() {
    if (this.password === this.confirmPassword) {
      console.log('Form submitted with valid data:', {
        password: this.password,
        confirmPassword: this.confirmPassword,
      });
    } else {
      alert('Passwords do not match.');
    }
  }

  togglePasswordVisibility(field: 'password' | 'confirmPassword') {
    if (field === 'password') {
      this.passwordVisible = !this.passwordVisible;
    } else {
      this.confirmPasswordVisible = !this.confirmPasswordVisible;
    }
  }

  onPasswordInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.password = target.value;
  }

  onConfirmPasswordInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.confirmPassword = target.value;
  }
}
