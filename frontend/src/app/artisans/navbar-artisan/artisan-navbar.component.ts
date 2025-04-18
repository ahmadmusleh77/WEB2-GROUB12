import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {NotificationsComponent} from '../../notifications/notifications.component';

@Component({
  selector: 'app-navbar-artisan',

  imports: [
    RouterLink,
    RouterLinkActive,
    NotificationsComponent,

  ],
  templateUrl: './artisan-navbar.component.html',
  styleUrl: './artisan-navbar.component.css'
})
export class ArtisanNavbarComponent {

}
