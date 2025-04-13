import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ArtisansComponent} from './artisans/artisans.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ArtisansComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
