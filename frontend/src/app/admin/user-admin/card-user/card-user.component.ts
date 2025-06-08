import {Component, Input} from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';
import {Router, RouterLink} from '@angular/router';
import {sure} from '../../../models/sure';
import {post} from '../../../models/post';
import {AdminService} from '../../../services/admin.service';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  imports: [
    NgForOf,
    NgIf,
    RouterLink
  ],
  styleUrls: ['./card-user.component.css']
})
export class CardUserComponent {
  @Input() MPost: post[] = [];

  constructor(private router: Router, private adminService : AdminService) {}

  goToManageBids(id: number) {
    this.router.navigate(['/admin-dashboard/manage-bids', id]);
  }
  currentPage = 1;
  offersPerPage = 8;

  get paginatedOffers() {
    const start = (this.currentPage - 1) * this.offersPerPage;
    return this.MPost.slice(start, start + this.offersPerPage);
  }

  get totalPages() {
    return Math.ceil(this.MPost.length / this.offersPerPage);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  deleteOffer(indexInPage: number) {
    const globalIndex = (this.currentPage - 1) * this.offersPerPage + indexInPage;
    const postId = this.MPost[globalIndex].job_id;

    if (!confirm('Are you sure you want to delete this post?')) return;

    this.adminService.deletePost(postId).subscribe({
      next: () => {
        this.MPost.splice(globalIndex, 1);
        if (this.currentPage > this.totalPages) {
          this.currentPage = this.totalPages;
        }
      },
      error: (err) => {
        alert('Failed to delete post: ' + err.message);
        console.error(err);
      }
    });
  }

}
