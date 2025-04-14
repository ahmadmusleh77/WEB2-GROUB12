import { Component, Input } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';

interface User {
  UserName: string;
  Profession: string;
  Email: string;
  Select: string;
  Reject: string;
  status?: 'pending' | 'accepted';
}

@Component({
  selector: 'app-manage',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent {
  @Input() manage: User[] = [
    {
      UserName: 'Saleh',
      Profession: 'Carpentry',
      Email: 'user@example.com',
      Select: 'Yes',
      Reject: 'No',
      status: 'pending'
    },
    {
      UserName: 'Khaled',
      Profession: 'Electrician',
      Email: 'user@example.com',
      Select: 'Yes',
      Reject: 'No',
      status: 'accepted'
    },
    {
      UserName: 'Salman',
      Profession: 'Carpentry',
      Email: 'user@example.com',
      Select: 'Yes',
      Reject: 'No',
      status: 'pending'
    },
    {
      UserName: 'sameh',
      Profession: 'Carpentry',
      Email: 'user@example.com',
      Select: 'Yes',
      Reject: 'No',
      status: 'pending'
    },
    {
      UserName: 'Khaled',
      Profession: 'Electrician',
      Email: 'user@example.com',
      Select: 'Yes',
      Reject: 'No',
      status: 'accepted'
    },
    {
      UserName: 'Salman',
      Profession: 'Carpentry',
      Email: 'user@example.com',
      Select: 'Yes',
      Reject: 'No',
      status: 'pending'
    },
    {
      UserName: 'sameh',
      Profession: 'Carpentry',
      Email: 'user@example.com',
      Select: 'Yes',
      Reject: 'No',
      status: 'pending'
    }

  ];

  deleteOffer(index: number) {
    if (confirm('Are you sure you want to delete this offer?')) {
      this.manage.splice(index, 1);
    }
  }
  acceptOffer(index: number) {
    alert(`Offer accepted for ${this.manage[index].UserName}`);
    // إذا بدك تحدث الحالة:
    this.manage[index].status = 'accepted';
  }

}
