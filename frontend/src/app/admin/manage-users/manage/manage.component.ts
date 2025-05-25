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

  deleteOffer(user  :any) {
    alert(' reject for'+ user.UserName);
  }
  acceptOffer(user  :any) {

   console.log(user)
    alert(' accepted for'+ user.UserName);

 //  this.usrServices.deleteUser(user.id)
    // إذا بدك تحدث الحالة:
   // this.manage[index].status = 'accepted';
  }

}
