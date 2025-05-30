import { Component } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  imports: [
    NgForOf,
    NgIf,
    RouterLink
  ],
  styleUrls: ['./card-user.component.css']
})
export class CardUserComponent {

  artisanOffers = [
    { name: 'Mohammed Al-Qahtani', jobTitle: 'Plumber', price: 250, location: 'Riyadh', description: 'Experienced plumber with 5 years in fixing residential plumbing issues.' },
    { name: 'Sara Al-Harbi', jobTitle: 'Electrician', price: 300, location: 'Jeddah', description: 'Professional in electrical installations and repairs.' },
    { name: 'Ahmed Al-Mutairi', jobTitle: 'Carpenter', price: 400, location: 'Dammam', description: 'Expert in woodwork, furniture assembly, and repairs.' },
    { name: 'Layla Al-Dossari', jobTitle: 'Gardener', price: 150, location: 'Mecca', description: 'Gardening services including trimming, planting, and lawn care.' },
    { name: 'Fahad Al-Shammari', jobTitle: 'Painter', price: 350, location: 'Medina', description: 'Interior and exterior painting with modern tools and techniques.' },
    { name: 'Alaa Al-Rashid', jobTitle: 'Mechanic', price: 500, location: 'Tabuk', description: 'Skilled in vehicle diagnostics and repairs.' },
    { name: 'Noura Al-Saleh', jobTitle: 'Cleaner', price: 200, location: 'Hail', description: 'Thorough cleaning services for homes and offices.' },
    { name: 'Khaled Al-Fahad', jobTitle: 'Driver', price: 100, location: 'Abha', description: 'Professional driver available for daily commutes.' },
    { name: 'Mona Al-Zahrani', jobTitle: 'Tailor', price: 180, location: 'Najran', description: 'Expert in tailoring traditional and modern garments.' },
    { name: 'Saad Al-Ahmari', jobTitle: 'Technician', price: 300, location: 'Al Khobar', description: 'IT support and maintenance specialist.' }

  ];

  currentPage = 1;
  offersPerPage = 8;

  get paginatedOffers() {
    const start = (this.currentPage - 1) * this.offersPerPage;
    return this.artisanOffers.slice(start, start + this.offersPerPage);
  }

  get totalPages() {
    return Math.ceil(this.artisanOffers.length / this.offersPerPage);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  deleteOffer(indexInPage: number) {
    const globalIndex = (this.currentPage - 1) * this.offersPerPage + indexInPage;
    this.artisanOffers.splice(globalIndex, 1);


    if (this.currentPage > this.totalPages) {
      this.currentPage = this.totalPages;
    }
  }

}
