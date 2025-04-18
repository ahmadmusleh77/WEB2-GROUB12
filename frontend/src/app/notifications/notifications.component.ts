import { Component, OnInit } from '@angular/core';

import { NotificationsService } from './notifications.service';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-notifications',
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css'
})


export class NotificationsComponent implements OnInit {
  notifications: { id: number, text: string }[] = [];
  show = false;

  constructor(private notificationService: NotificationsService) {}

  ngOnInit() {
    this.notifications = this.notificationService.getNotifications();
  }

  toggleNotifications() {
    this.show = !this.show;
  }
}
