

import { Component, OnInit } from '@angular/core';
import { ArtisanNavbarComponent } from '../../artisans/navbar-artisan/artisan-navbar.component';
import { FooterComponent } from '../../artisans/footer-artisan/footer.component';
import { NgClass, NgForOf, NgIf } from '@angular/common';
import { JobOwnersService } from '../../services/job-owners.service';

interface Offer {
  id: number;
  jobTitle: string;
  clientName: string;
  price: number;
  status: 'Pending' | 'In Progress'|'Completed';
  rating: number;
}

@Component({
  selector: 'app-offer-jobowner',
  templateUrl: './offer-jobowner.component.html',
  imports: [
    ArtisanNavbarComponent,
    FooterComponent,
    NgForOf,
    NgIf,
    NgClass
  ],
  styleUrls: ['./offer-jobowner.component.css'],
  standalone: true,
  providers: [JobOwnersService] 
})
export class OfferJobownerComponent implements OnInit {
  offers: Offer[] = [];

  constructor(private jobOwnersService: JobOwnersService) {}

  ngOnInit(): void {
    this.jobOwnersService.getJobStatuses().subscribe({
      next: (response: { data: Offer[] }) => {
        this.offers = response.data;
      },
      error: (err: any) => {
        console.error('Failed to load job statuses', err);
      }
    });
  }

  setRating(offer: Offer, newRating: number): void {
    if (offer.status === 'Completed') {
      offer.rating = Math.min(newRating, 5);
    }
  }
}