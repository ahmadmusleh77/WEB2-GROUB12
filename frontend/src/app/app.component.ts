import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {WelcomePageComponent} from './welcome-page/welcome-page.component';
import {AuthComponent} from './auth/auth.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, WelcomePageComponent, AuthComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
