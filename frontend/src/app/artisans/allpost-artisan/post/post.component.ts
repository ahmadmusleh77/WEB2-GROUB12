import {Component, OnInit, ViewChild} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgForOf } from '@angular/common';
import { FilterComponent } from '../filter/filter.component';
import { ArtisansService } from '../../../services/artisans.service';
import { CommonModule } from '@angular/common';
import { ChatService } from '../../../services/chat-service.service';
import {Router, RouterLink} from '@angular/router';
import { ElementRef } from '@angular/core';
@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgForOf,

    FilterComponent,
    CommonModule,
    RouterLink,


  ],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @ViewChild('detailsModalRef') detailsModalRef!: ElementRef;


  conversionItems: any[] = [];
  filteredItems: any[] = [];
  itemsPerPage = 8;
  currentPage = 1;
  selectedItem: any;
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
    this.fetchPosts();
  }

  fetchPosts(): void {


    this.artisansService.getPosts().subscribe(
      (data: any[]) => {

        this.conversionItems = data

          .filter(item => item.status === 'active')
          .map(item => ({
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
          }))

          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        console.log('Before filter:', data.length);
        const activeItems = data.filter(item => item.status === 'active');
        console.log('After filter:', activeItems.length);

        this.filteredItems = [...this.conversionItems];
        this.currentPage = 1;
        console.log('Data received:', data);

      },
      error => {
        console.error('Error fetching posts:', error);
      }
    );
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



  get totalPages(): number {
    return Math.ceil(this.filteredItems.length / this.itemsPerPage);
  }

  get totalPagesArray(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  isLoading = false;

  onFilterChanged(filterData: any): void {
    this.isLoading = true;

    this.artisansService.filterJobs(filterData).subscribe({
      next: (filteredJobs) => {
        console.log(' Filtered jobs:', filteredJobs);

        this.filteredItems = filteredJobs.map((item: any) => ({
          title: item.title,
          location: item.location,
          description: item.description,
          date: item.deadline,
          price: `${item.budget}$`,

          image: item.image,
          additionalImage: item.image,
          ownerName: item.user?.name || 'Unknown',
          ownerId: item.user_id
      }));

        this.currentPage = 1;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching filtered jobs:', err);
        this.isLoading = false;
      }
    });
  }






  openModal(item: any): void {
    this.selectedItem = {
      ...item,
      image: item.image || 'assets/default.jpg',
      additionalImage: item.additionalImage || 'assets/default.jpg'
    };
  }

  submitRequest() {
    const bidData = {
      job_id: this.selectedItem?.jobId,
      user_name: this.formData.userName,
      price_estimate: Number(this.formData.amount),
      timeline: this.formData.startDate,
      status: 'Pending'
    };

    console.log('📤 bidData sent:', bidData);

    this.artisansService.sendBid(bidData).subscribe({
      next: (res) => {
        alert('Your request has been submitted successfully!');
        this.formData = { userName: '', amount: '', startDate: '' };
      }
    });
  }

}
