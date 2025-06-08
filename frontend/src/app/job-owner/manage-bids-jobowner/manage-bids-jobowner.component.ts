import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobOwnersService } from '../../services/job-owners.service';
import { NgForOf } from '@angular/common';


@Component({
  selector: 'app-manage-bids-jobowner',
  templateUrl: './manage-bids-jobowner.component.html',
  styleUrls: ['./manage-bids-jobowner.component.css'],
  standalone: true,
  imports: [NgForOf]
})
export class ManageBidsJobownerComponent implements OnInit {

  bids: any[] = [];
  offerJobowner: any[] = [];
  jobId!: number;

  constructor(
    private route: ActivatedRoute,
    private jobOwnersService: JobOwnersService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.jobId = +params['job_id'];
      this.loadBids();
    });
  }

  loadBids(): void {
    this.jobOwnersService.getJobPostBids(this.jobId).subscribe({
      next: (response) => {
       this.bids = response.data;
      },
      error: (err) => {
        console.error('Failed to load bids', err);
      }
    });
  }

  acceptBid(bid: any) {
    this.jobOwnersService.acceptBid(bid.id).subscribe({
      next: () => {
        this.offerJobowner.push(bid);
        this.bids = this.bids.filter(b => b !== bid);
        alert(`Bid from ${bid.user_name} accepted and moved to offers.`);
      },
      error: (err) => {
        console.error('Failed to accept bid', err);
        alert('Failed to accept bid.');
      }
    });
  }

  rejectBid(bid: any) {
    const confirmed = confirm(`Are you sure you want to reject the bid from ${bid.user_name}?`);
    if (confirmed) {
      this.jobOwnersService.rejectBid(bid.id).subscribe({
        next: () => {
          this.bids = this.bids.filter(b => b !== bid);
          alert(`Bid from ${bid.user_name} rejected and removed.`);
        },
        error: (err) => {
          console.error('Failed to reject bid', err);
          alert('Failed to reject bid.');
        }
      });
    }
  }
}