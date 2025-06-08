import { Component, Input } from '@angular/core';
import { NgForOf } from '@angular/common';
import { sure } from '../../../models/sure';
import { AdminService } from '../../../services/admin.service';

@Component({
  selector: 'app-manage',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent {
  @Input() manages: sure[] = [];

  constructor(private adminService: AdminService) {}

  acceptOffer(user: sure) {
    if (!user?.user_id) {
      alert('User ID is missing!');
      return;
    }

    this.adminService.acceptUser(user.user_id).subscribe({
      next: () => {

        this.manages = this.manages.filter(u => u.user_id !== user.user_id);
        alert('User accepted successfully ');
      },
      error: err => {
        alert('Failed to accept user: ' + err.message);
      }
    });
  }



  deleteUser(user: sure) {
    console.log('Trying to delete user:', user);
    if (!user?.user_id) {
      alert('User ID is missing!');
      return;
    }

    this.adminService.rejectUser(user.user_id).subscribe({
      next: () => {
        this.manages = this.manages.filter(u => u.user_id !== user.user_id);
        alert('User deleted successfully.');
      },
      error: err => {
        alert('Failed to delete user: ' + err.message);
      }
    });
  }
}
