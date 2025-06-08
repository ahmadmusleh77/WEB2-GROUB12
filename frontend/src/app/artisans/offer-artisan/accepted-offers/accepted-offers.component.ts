import { Component, OnInit } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ArtisansService } from '../../../services/artisans.service';

interface Offer {
  id: number;
  jobTitle: string;
  clientName: string;
  price: number;
  status: string;
}

@Component({
  selector: 'app-accepted-offers',
  standalone: true,
  imports: [NgForOf, NgIf, FormsModule],
  templateUrl: './accepted-offers.component.html',
  styleUrls: ['./accepted-offers.component.css']
})
export class AcceptedOffersComponent implements OnInit {
  acceptedOffers: Offer[] = [];

  constructor(private artisansService: ArtisansService) {}

  ngOnInit(): void {
    this.fetchAcceptedOffers();
  }

  fetchAcceptedOffers(): void {
    this.artisansService.getAcceptedOffers().subscribe({
      next: (res) => {
        if (res && res.offers) {
          this.acceptedOffers = res.offers.map((offer: any) => ({
            id: offer.job_id,
            jobTitle: offer.job_title,
            clientName: offer.client_name,
            price: offer.price,
            status: offer.current_status
          }));
        }
      },
      error: (err) => {
        console.error('Error fetching accepted offers:', err);
      }
    });
  }

  updateStatus(id: number, newStatus: string): void {
    const offer = this.acceptedOffers.find(o => o.id === id);
    if (offer) {
      offer.status = newStatus;

      this.artisansService.updateJobStatus(id, newStatus).subscribe({
        next: () => {
          console.log(`Status updated for job ${id}`);
          this.fetchAcceptedOffers();
        },
        error: (err) => {
          console.error(`Failed to update status for job ${id}:`, err);
        }
      });
    }
  }
}
