import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ArtisansComponent} from './artisans/artisans.component';
import {AuthComponent} from './auth/auth.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ArtisansComponent, AuthComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
