import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {Router, RouterLink} from '@angular/router';
import { ArtisansService } from '../../../services/artisans.service';
import { HttpClientModule } from '@angular/common/http';
import { ChatService } from '../../../services/chat-service.service';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [NgForOf, FormsModule, RouterLink, HttpClientModule],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css',
})
export class MainContentComponent implements OnInit {
  @ViewChild('detailsModalRef') detailsModalRef!: ElementRef;
  conversionItems: any[] = [];
  selectedItem: any = null;

  formData = {
    userName: '',
    amount: '',
    startDate: ''
  };

  constructor(
    private artisansService: ArtisansService,
    private chatService: ChatService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getBidsFromApi();
  }
  sendAndNavigateInstant(ownerId: number, ownerName: string) {
    const modalInstance = (window as any).bootstrap.Modal.getInstance(this.detailsModalRef.nativeElement);
    if (modalInstance) modalInstance.hide();

    const welcomeMessage = {
      content: `Hello ${ownerName}, I'm interested in your post.`,
      receiver_id: ownerId
    };

    this.chatService.sendMessage(welcomeMessage).subscribe({
      next: () => {
        this.router.navigate(['/artisans-dashboard/chat-artisan'], {
          queryParams: { receiver_id: ownerId }
        });
      },
      error: (err) => {
        console.error('Error sending welcome message:', err);
        this.router.navigate(['/artisans-dashboard/chat-artisan'], {
          queryParams: { receiver_id: ownerId }
        });
      }
    });
  }

  getBidsFromApi() {
    this.artisansService.getPosts().subscribe({
      next: (response) => {
        this.conversionItems = response.slice(0, 8).map((item: any) => ({
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
      }
    });
  }


}
