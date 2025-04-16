import { Component } from '@angular/core';
import {ArtisanNavbarComponent} from './navbar-artisan/artisan-navbar.component';
import {FooterComponent} from './footer-artisan/footer.component';

import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-artisans',
  imports: [
    ArtisanNavbarComponent,
    FooterComponent,
    RouterOutlet
  ],
  templateUrl: './artisans.component.html',
  styleUrl: './artisans.component.css'
})
export class ArtisansComponent {

}
