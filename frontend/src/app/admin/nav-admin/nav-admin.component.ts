


import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {NotificationsComponent} from '../../notifications/notifications.component';

@Component({
  selector: 'app-nav-admin',
  standalone: true,
  imports: [RouterLink, NotificationsComponent],
  templateUrl: './nav-admin.component.html',
  styleUrls: ['./nav-admin.component.css']
})
export class NavAdminComponent {}
