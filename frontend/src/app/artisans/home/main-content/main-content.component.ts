import { Component, OnInit } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ArtisansService } from '../../../services/artisans.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [NgForOf, FormsModule, RouterLink, HttpClientModule],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent implements OnInit {

  conversionItems: any[] = [];
  selectedItem: any = null;

  formData = {
    userName: '',
    amount: '',
    startDate: ''
  };

  constructor(private artisansService: ArtisansService) {}

  ngOnInit(): void {
    this.getBidsFromApi();
  }

  getBidsFromApi() {
    this.artisansService.getPosts().subscribe({
      next: (response) => {
        this.conversionItems = response.map((item: any) => ({
          title: item.title,
          location: item.location,
          description: item.description,
          date: item.deadline,
          price: `${item.budget}$`,
          image: item.image,
          additionalImage: item.image,
          ownerName: item.user?.name || 'Unknown',
          ownerId: item.user_id,
          jobId: item.job_id
        }));

      },
      error: (err) => {
        console.error('Error fetching posts:', err);
      }
    });
  }


  openModal(item: any) {
    this.selectedItem = item;
  }

  submitRequest() {
    const bidData = {
      job_id: this.selectedItem?.jobId,
      user_name: this.formData.userName,
      price_estimate: this.formData.amount,
      timeline: this.formData.startDate,
      status: 'Pending'
    };

    this.artisansService.sendBid(bidData).subscribe({
      next: (res) => {
        console.log('Bid sent:', res);
        alert('Your request has been submitted successfully!');
        this.formData = { userName: '', amount: '', startDate: '' };
      },
      error: (err) => {
        console.error('Error sending bid:', err);
        alert('An error occurred while submitting your request.');
      }
    });
  }


}
