// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterLink } from '@angular/router';

// @Component({
//   selector: 'app-post-list',
//   standalone: true,
//   imports: [CommonModule, RouterLink],
//   templateUrl: './post-list.component.html',
//   styleUrls: ['./post-list.component.css']
// })
// export class PostListComponent {

//   posts = [
//     {
//       title: 'Content Writer',
//       deadline: 'Mar 21, 2025',
//       budget: '$70,000',
//       location: 'Palestine',
//       description: 'There are 4 working days in the carpentry shop from 8 am to 4 pm',
//       image: 'assets/post1.svg'
//     },
//     {
//       title: 'Web Developer',
//       deadline: 'Apr 10, 2025',
//       budget: '$85,000',
//       location: 'Jordan',
//       description: 'Full-stack developer needed for eCommerce project',
//       image: 'assets/post1.svg'
//     },
//     {
//       title: 'UI/UX Designer',
//       deadline: 'May 5, 2025',
//       budget: '$60,000',
//       location: 'Remote',
//       description: 'Design modern interfaces and improve user experience',
//       image: 'assets/post1.svg'
//     },
//     {
//       title: 'Marketing Manager',
//       deadline: 'Jun 12, 2025',
//       budget: '$90,000',
//       location: 'Egypt',
//       description: 'Manage digital campaigns and branding strategy',
//       image: 'assets/post1.svg'
//     },
//     {
//       title: 'Project Manager',
//       deadline: 'Jul 1, 2025',
//       budget: '$100,000',
//       location: 'Lebanon',
//       description: 'Coordinate tasks, teams, and resources across departments',
//       image: 'assets/post1.svg'
//     }
//   ];

//   deletePost(index: number): void {
//     const confirmDelete = confirm('Are you sure you want to delete this post?');
//     if (confirmDelete) {
//       this.posts.splice(index, 1);
//     }
//   }

// }

import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { JobOwnersService } from '../../../services/job-owners.service';
import { JobPost } from '../../../models/job-post.model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  providers: [JobOwnersService],
  imports: [CommonModule, RouterLink], 
})
export class PostListComponent implements OnInit {
  posts: JobPost[] = [];

  constructor(private jobPostService: JobOwnersService) {}

  ngOnInit(): void {
    this.jobPostService.getPosts().subscribe({
      next: (posts: JobPost[]) => this.posts = posts,
      error: (err: HttpErrorResponse) => console.error('Failed to load posts', err)    });
  }


  deletePost(index: number): void {
    const postId = this.posts[index].job_id;
    const confirmDelete = confirm('Are you sure you want to delete this post?');
    if (confirmDelete) {
      this.jobPostService.deletePost(postId).subscribe({
        next: () => this.posts.splice(index, 1),
        error: (err: HttpErrorResponse) => console.error('Failed to delete post', err)
      });
    }
  }


}
