import { Component, OnInit } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';
import { ArtisansService } from '../../../services/artisans.service';

interface Offer {
  bidId: number;
  jobTitle: string;
  clientName: string;
  price: number;
  date: string;
  status: 'pending' | 'accepted';
}

@Component({
  selector: 'app-submitted-offers',
  standalone: true,
  templateUrl: './submitted-offers.component.html',
  styleUrls: ['./submitted-offers.component.css'],
  imports: [NgForOf, NgIf]
})
export class SubmittedOffersComponent implements OnInit {
  submittedOffers: Offer[] = [];

  constructor(private artisansService: ArtisansService) {}

  ngOnInit(): void {
    this.fetchSubmittedOffers();
  }

  fetchSubmittedOffers(): void {
    this.artisansService.getSubmittedOffers().subscribe({
      next: (res) => {
        if (res && res.offers) {
          this.submittedOffers = res.offers.map((offer: any) => ({
            bidId: offer.bid_id,

            jobTitle: offer.job_title,
            clientName: offer.client_name,
            price: offer.price,
            date: offer.submission_date,
            status: offer.status.toLowerCase()
          }));
        }
      },
      error: (err) => {
        console.error('Failed to load offers:', err);
      }
    });
  }

  deleteOffer(index: number): void {
    const offer = this.submittedOffers[index];
    console.log('Trying to delete:', offer);

    if (!offer) return;

    if (confirm('Are you sure you want to cancel this offer?')) {
      this.artisansService.cancelBid(offer.bidId).subscribe({
        next: () => {
          console.log('Deleted:', offer.bidId);
          this.submittedOffers.splice(index, 1);
          alert('Offer cancelled successfully!');
        },
        error: (err) => {
          console.error('Delete failed:', err);
          alert('Failed to cancel offer. Please try again.');
        }
      });
    }
  }

}
