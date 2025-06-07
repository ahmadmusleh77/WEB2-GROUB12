// import { Component } from '@angular/core';
// import {ArtisanNavbarComponent} from '../../artisans/navbar-artisan/artisan-navbar.component';
// import {FooterComponent} from '../../artisans/footer-artisan/footer.component';
// import {NgClass, NgForOf, NgIf} from '@angular/common';

// interface Offer {
//   id: number;
//   jobTitle: string;
//   clientName: string;
//   price: number;
//   status: 'pending' | 'completed';
//   rating: number;
// }
// @Component({
//   selector: 'app-offer-jobowner',
//   templateUrl: './offer-jobowner.component.html',
//   imports: [
//     ArtisanNavbarComponent,
//     FooterComponent,
//     NgForOf,
//     NgIf,
//     NgClass
//   ],
//   styleUrls: ['./offer-jobowner.component.css'],
//   standalone: true
// })
// export class OfferJobownerComponent {
//   offers: Offer[] = [
//     {
//       id: 1,
//       jobTitle: 'Plumbing Service',
//       clientName: 'Ali Al-Farsi',
//       price: 1500,
//       status: 'completed',
//       rating: 5
//     },
//     {
//       id: 2,
//       jobTitle: 'Electrical Wiring',
//       clientName: 'Mona Saleh',
//       price: 2500,
//       status: 'pending',
//       rating: 5
//     },
//     {
//       id: 3,
//       jobTitle: 'House Painting',
//       clientName: 'Ahmed Al-Bassam',
//       price: 3500,
//       status: 'completed',
//       rating: 5
//     },
//     {
//       id: 4,
//       jobTitle: 'Roof Repair',
//       clientName: 'Fatima Al-Mutairi',
//       price: 1800,
//       status: 'pending',
//       rating: 5
//     }
//   ];

//   setRating(offer: Offer, newRating: number): void {
//     if (offer.status === 'completed') {
//       offer.rating = Math.min(newRating, 5);
//     }
//   }
// }

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