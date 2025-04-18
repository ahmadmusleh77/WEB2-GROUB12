import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-navbar-artisan',

  imports: [
    RouterLink,
    RouterLinkActive,

  ],
  templateUrl: './artisan-navbar.component.html',
  styleUrl: './artisan-navbar.component.css'
})
export class ArtisanNavbarComponent {

}
