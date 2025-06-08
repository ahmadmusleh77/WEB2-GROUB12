import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Most} from '../models/most';
import {sure} from '../models/sure';
import {post} from '../models/post';
import {bids} from '../models/bids';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) {
  }

  getArtisansCount(): Observable<number> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.get<number>('http://127.0.0.1:8000/api/artisans/count', {headers});
  }

  //////////////////////////////////////////////////////////////////////
  getUserCount(): Observable<number> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.get<number>('http://127.0.0.1:8000/api/users/count', {headers});
  }

  //////////////////////////////////////////////////////////////////////////
  getAdminsCount(): Observable<number> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.get<number>('http://127.0.0.1:8000/api/Admins/count', {headers});
  }

  ////////////////////////////////////////////////////////////////////////////
  getCompletedJobs(): Observable<number> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.get<number>('http://127.0.0.1:8000/api/CompletedJobs', {headers});
  }

  //////////////////////////////////////////////////////////////////////////////
  getCountAnnouncedJobs(): Observable<number> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.get<number>('http://127.0.0.1:8000/api/countAnnouncedJobs', {headers});
  }

  /////////////////////////////////////////////////////////////////////////////////
  getCountDailyJobs(): Observable<number> {
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.get<number>('http://127.0.0.1:8000/api/countDailyJobs', {headers});
  }

////////////////////////////////////////////////////////////////////////////////////////////
////////// /////////////// ///////////////// اعملنا فوق لاول 6 get///////////////////////////

  getMostUsers(): Observable<Most[]> {
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.get<Most[]>('http://127.0.0.1:8000/api/most/users', {headers});
  }

  ////////////////////////////////////Manage users/////////////////////////////////////////////
  getUnapprovedUsers(): Observable<sure[]> {
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.get<sure[]>('http://127.0.0.1:8000/api/UnapprovedUsers', {headers});
  }

  acceptUser(userId: number): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    return this.http.put(`http://127.0.0.1:8000/api/Accept/${userId}`, {}, {headers});
  }


  // رفض المستخدم
  rejectUser(userId: number): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    return this.http.delete(`http://127.0.0.1:8000/api/users/${userId}`, {headers});
  }

  ////////////////////////////////////////////////All Post////////////////////////////////////////////////////////////////////
  Posts(): Observable<post[]> {
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.get<post[]>('http://127.0.0.1:8000/api/Posts', {headers});
  }
  deletePost(id: number): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });



      return this.http.delete(`http://127.0.0.1:8000/api/deletePost/${id}`, { headers });
    }
  /////////////////////////////////////////////bids///////////////////////////////////////////////////////////////////////////

  bidsCount(postId: number): Observable<{ jobpost: string, bids: bids[] }> {

    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.get<{ jobpost: string, bids: bids[] }>(
      `http://127.0.0.1:8000/api/jobpost/${postId}/bids`,
      {headers}
    );


  }
}

