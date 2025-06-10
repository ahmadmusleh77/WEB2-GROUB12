import { Component, OnInit ,HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NotificationService,Notification } from '../services/notification.service';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-notifications',
  imports: [
    NgIf,
    NgForOf,
    CommonModule
  ],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css'
})


export class NotificationsComponent implements OnInit {
  notifications: Notification[] = [];
  unreadCount = 0;
  show = false;

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.loadNotifications();
  }

  toggleNotifications(): void {
    this.show = !this.show;
    if (this.show) this.loadNotifications();
  }

  loadNotifications(): void {
    this.notificationService.getNotifications().subscribe(data => {
      // تأكد أن كل data عبارة عن object
      this.notifications = data.map((notification: any) => {
        try {
          // إذا كانت data عبارة عن string JSON، نقوم بتحويلها
          if (typeof notification.data === 'string') {
            notification.data = JSON.parse(notification.data);
          }
        } catch (e) {
          console.warn('Failed to parse notification data', notification.data);
        }
        return notification;
      });

      this.unreadCount = this.notifications.filter(n => !n.is_read).length;
    });
  }


  markAsRead(notification: Notification): void {
    if (!notification.is_read) {
      this.notificationService.markAsRead(notification.id).subscribe(() => {
        notification.is_read = true;
        this.unreadCount = this.notifications.filter(n => !n.is_read).length;
      });
    }
  }

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.notification-dropdown') && !target.closest('.fa-bell')) {
      this.show = false;
    }
  }


  formatType(type: string): string {
    return type.replace(/_/g, ' ');
  }

}
