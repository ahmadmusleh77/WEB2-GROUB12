import { Component, Input } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';

interface Offer {
  id: number;
  jobTitle: string;
  clientName: string;
  price: number;
  date: string;
  status: 'pending' | 'accepted';
}

@Component({
  selector: 'app-submitted-offers',
  templateUrl: './submitted-offers.component.html',
  imports: [
    NgForOf,
    NgIf
  ],
  styleUrls: ['./submitted-offers.component.css']
})
export class SubmittedOffersComponent {
  @Input() submittedOffers: Offer[] = [

    {
      id: 1,
      jobTitle: 'Cleaning Service',
      clientName: 'Ahmad',
      price: 5000,
      date: '2025-04-01',
      status: 'pending'
    },
    {
      id: 2,
      jobTitle: 'Blacksmith',
      clientName: 'Saleh',
      price: 7000,
      date: '2025-03-30',
      status: 'accepted'
    },
    {
      id: 3,
      jobTitle: 'Carpentry Service',
      clientName: 'jamal',
      price: 3000,
      date: '2025-04-05',
      status: 'pending'
    },
    {
      id: 4,
      jobTitle: 'Blacksmith',
      clientName: 'Masa',
      price: 2000,
      date: '2025-03-28',
      status: 'accepted'
    },
    {
      id: 5,
      jobTitle: 'Carpentry Service',
      clientName: 'karam',
      price: 1000,
      date: '2025-02-21',
      status: 'accepted'
    },
    {
      id: 6,
      jobTitle: 'Cleaning',
      clientName: 'shahed',
      price: 1000,
      date: '2025-04-1',
      status: 'pending'
    }
  ];

  deleteOffer(index: number) {
    if (confirm('Are you sure you want to delete this offer?')) {
      this.submittedOffers.splice(index, 1);
    }
  }
}
