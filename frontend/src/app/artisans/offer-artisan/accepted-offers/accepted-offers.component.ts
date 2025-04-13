import { Component, Input } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Offer {
  id: number;
  jobTitle: string;
  clientName: string;
  price: number;
  status: 'in_progress' | 'completed' | 'pending';
}

@Component({
  selector: 'app-accepted-offers',
  templateUrl: './accepted-offers.component.html',
  imports: [
    NgForOf,
    NgIf,
    FormsModule
  ],
  styleUrls: ['./accepted-offers.component.css']
})
export class AcceptedOffersComponent {
  @Input() acceptedOffers: Offer[] = [
    {
      id: 1,
      jobTitle: 'Plumbing Service',
      clientName: 'Ahmad Musleh',
      price: 1500,
      status: 'in_progress'
    },
    {
      id: 2,
      jobTitle: 'Electrical Wiring',
      clientName: 'Saleh',
      price: 2500,
      status: 'completed'
    },
    {
      id: 3,
      jobTitle: 'House Painting',
      clientName: 'Karam',
      price: 3500,
      status: 'pending'
    },
    {
      id: 4,
      jobTitle: 'Roof Repair',
      clientName: 'Masa',
      price: 1800,
      status: 'in_progress'
    }
  ];

  updateStatus(id: number, newStatus: Offer['status']): void {
    const offer = this.acceptedOffers.find(o => o.id === id);
    if (offer) {
      offer.status = newStatus;
    }
  }
}
