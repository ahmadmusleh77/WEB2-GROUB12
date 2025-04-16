import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [
    RouterLink
  ]
})
export class LoginComponent {
  email = '';
  password = '';


  login() {
    if (this.email.trim() !== '' && this.password.trim() !== '') {
      console.log('Form submitted with valid data:', {
        email: this.email,
        password: this.password,
      });

    } else {
      alert('Please fill out all fields.');
    }
  }


  updateEmail(event: Event) {
    this.email = (event.target as HTMLInputElement).value;
  }

  updatePassword(event: Event) {
    this.password = (event.target as HTMLInputElement).value;
  }
}
