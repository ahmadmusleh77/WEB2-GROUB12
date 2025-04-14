import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class NewPasswordComponent {
  password = '';
  confirmPassword = '';


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


  togglePasswordVisibility(field: string) {
    const inputElement = document.querySelector(`input[name="${field}"]`);
    if (inputElement) {
      (inputElement as HTMLInputElement).type =
        (inputElement as HTMLInputElement).type === 'password' ? 'text' : 'password';
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

