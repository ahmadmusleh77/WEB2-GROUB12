import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JobOwnersService } from '../../services/job-owners.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
  imports: [ReactiveFormsModule, CommonModule],

})
export class CreatePostComponent {
  postForm: FormGroup;
  isSubmitting: boolean = false;

  constructor(private fb: FormBuilder, private jobService: JobOwnersService, private router: Router) {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      budget: ['', Validators.required],
      location: ['', Validators.required],
      deadline: ['', Validators.required],
      image: [null]
    });
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.postForm.patchValue({ image: file });
    }
  }

  onSubmit(): void {
    if (this.postForm.invalid) return;

    this.isSubmitting = true;

    const formData = new FormData();
    Object.entries(this.postForm.value).forEach(([key, value]) => {
      if (value !== null && value !== undefined) {
        if (value instanceof File || value instanceof Blob) {
          formData.append(key, value);
          
        } else {
          formData.append(key, value.toString());
        }
      }
    });
    this.jobService.createPost(formData).subscribe({
      next: () => {
        this.isSubmitting = false;
        this.postForm.reset();
        this.router.navigate(['/job-owner-dashboard/home-job-owner']);
      },
      error: () => {
        this.isSubmitting = false;
      }
    });
  }
}