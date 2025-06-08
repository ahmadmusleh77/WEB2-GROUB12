import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JobOwnersService } from '../../services/job-owners.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  imports: [
    ReactiveFormsModule,
    CommonModule,

  ],
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent {
  postForm: FormGroup;
  isLoading = true;
  isSubmitting = false;
  previewUrl: string | ArrayBuffer | null = null;
  selectedFile: File | null = null;

  constructor(
    private fb: FormBuilder,
    private jobOwnersService: JobOwnersService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      budget: ['', Validators.required],
      location: ['', Validators.required],
      deadline: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const postId = Number(this.route.snapshot.paramMap.get('id'));
    if (postId) {
      this.jobOwnersService.getPostById(postId).subscribe(post => {
        this.postForm.patchValue({
          title: post.title,
          description: post.description,
          budget: post.budget,
          location: post.location,
          deadline: post.deadline
        });
        this.isLoading = false;
      });
    }
  }

  onFileSelected(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      this.selectedFile = fileInput.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.previewUrl = reader.result;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  onSubmit(): void {
    if (this.postForm.invalid) return;
  
    this.isSubmitting = true;
    const postId = Number(this.route.snapshot.paramMap.get('id'));
  
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
    if (this.selectedFile) {
      formData.append('image', this.selectedFile);
    }
    
  
    this.jobOwnersService.updatePost(postId, formData).subscribe({
      next: () => {
        this.isSubmitting = false;
        this.router.navigate(['/job-owner-dashboard/home-job-owner']);
      },
      error: () => {
        this.isSubmitting = false;
        // handle error
      }
    });
  }

}