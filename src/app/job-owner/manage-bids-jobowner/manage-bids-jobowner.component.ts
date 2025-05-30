import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-manage-bids-jobowner',
  templateUrl: './manage-bids-jobowner.component.html',
  styleUrls: ['./manage-bids-jobowner.component.css'],
  standalone: true,
  imports: [NgForOf]
})
export class ManageBidsJobownerComponent {

  bids = [
    { username: 'Sami', amount: '100$', startDate: '12/2/2005' },
    { username: 'Ali', amount: '150$', startDate: '01/3/2006' },
    { username: 'Lina', amount: '200$', startDate: '20/6/2007' },
    { username: 'Sara', amount: '120$', startDate: '15/7/2008' }
  ];

  offerJobowner: any[] = [];

  acceptBid(bid: any) {
    this.offerJobowner.push(bid);
    this.bids = this.bids.filter(b => b !== bid);
    alert(`Bid from ${bid.username} accepted and moved to offers.`);
  }

  rejectBid(bid: any) {
    const confirmed = confirm(`Are you sure you want to reject the bid from ${bid.username}?`);
    if (confirmed) {
      this.bids = this.bids.filter(b => b !== bid);
      alert(`Bid from ${bid.username} rejected and removed.`);
    }
  }
}
