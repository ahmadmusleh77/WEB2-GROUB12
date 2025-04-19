import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {NotificationsComponent} from "../../notifications/notifications.component";

@Component({
  selector: 'app-navbar-jobowner',
    imports: [
        RouterLink,
        RouterLinkActive,
        NotificationsComponent
    ],
  templateUrl: './navbar-jobowner.component.html',
  styleUrl: './navbar-jobowner.component.css'
})
export class NavbarJobownerComponent {

}
