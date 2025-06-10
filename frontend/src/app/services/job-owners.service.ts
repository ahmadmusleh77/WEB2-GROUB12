import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JobPost } from '../models/job-post.model';

@Injectable({
  providedIn: 'root'
})
export class JobOwnersService {
  private apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      Accept: 'application/json'
    });
  }

  getPosts(): Observable<JobPost[]> {
    return this.http.get<{ data: JobPost[] }>(`${this.apiUrl}/posts`, { headers: this.getAuthHeaders() }).pipe(
      map(response => response.data)
    );
  }

  createPost(postData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/newpost`, postData, { headers: this.getAuthHeaders() });
  }

  deletePost(postId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/posts/${postId}`, { headers: this.getAuthHeaders() });
  }

  getPostById(jobId: number): Observable<JobPost> {
    return this.http.get<{ data: JobPost }>(`${this.apiUrl}/posts/${jobId}`, { headers: this.getAuthHeaders() }).pipe(
      map(response => response.data)
    );
  }

  getJobPostBids(jobId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/jobposts/${jobId}/bids`, { headers: this.getAuthHeaders() });
  }

  updatePost(jobId: number, updatedData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/posts/${jobId}`, updatedData, { headers: this.getAuthHeaders() });
  }

  acceptBid(bidId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/bids/${bidId}/accept`, {}, { headers: this.getAuthHeaders() });
  }

  rejectBid(bidId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/bids/${bidId}/reject`, {}, { headers: this.getAuthHeaders() });
  }

  getJobStatuses(): Observable<any> {
    return this.http.get(`${this.apiUrl}/job-statuses`, { headers: this.getAuthHeaders() });
  }

  createReview(reviewData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/reviews`, reviewData, { headers: this.getAuthHeaders() });
  }
}
