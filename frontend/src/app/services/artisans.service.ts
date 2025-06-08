import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtisansService {

  private apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    console.log(' Token:', token);
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
      Accept: 'application/json'
    });
  }


  getPosts(): Observable<any> {
    return this.http.get(`${this.apiUrl}/artisan/bids`, { headers: this.getAuthHeaders() });
  }

  sendBid(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/artisan/bids`, data, { headers: this.getAuthHeaders() });
  }

  getSubmittedOffers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/artisan/submitted-offers`, { headers: this.getAuthHeaders() });
  }

  cancelBid(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/artisan/${id}`, { headers: this.getAuthHeaders() });
  }

  getAcceptedOffers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/offers/accepted`, { headers: this.getAuthHeaders() });
  }

  updateJobStatus(jobId: number, status: string): Observable<any> {
    return this.http.put(
      `${this.apiUrl}/jobposts/status/${jobId}`,
      { current_status: status },
      { headers: this.getAuthHeaders() }
    );
  }



  filterJobs(filters: any): Observable<any> {
    const cleanedFilters: any = {};
    Object.keys(filters).forEach(key => {
      const value = filters[key];
      if (value !== null && value !== undefined && value !== '') {
        cleanedFilters[key] = value;
      }
    });

    const params = new HttpParams({ fromObject: cleanedFilters });

    return this.http.get(`${this.apiUrl}/jobposts/filter`, {
      headers: this.getAuthHeaders(),
      params
    });
  }

}
