import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {WelcomePageComponent} from './welcome-page/welcome-page.component';
import {AdminComponent} from './admin/admin.component';
import {ArtisansComponent} from './artisans/artisans.component';
import {AuthComponent} from './auth/auth.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ArtisansComponent, AuthComponent, AdminComponent, WelcomePageComponen],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
