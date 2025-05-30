import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  getNotifications() {
    return [
      { id: 1, text: 'job owner hired you' },
      { id: 2, text: 'New message from sami' },
      { id: 2, text: 'New message from sami' },
      { id: 2, text: 'New message from sami' },
      { id: 2, text: 'New message from sami' },
      { id: 2, text: 'New message from sami' },
      { id: 2, text: 'New message from sami' },
      { id: 2, text: 'New message from sami' },
      { id: 2, text: 'New message from sami' },
      { id: 2, text: 'New message from sami' },
      { id: 2, text: 'New message from sami' }


    ];
  }
}
