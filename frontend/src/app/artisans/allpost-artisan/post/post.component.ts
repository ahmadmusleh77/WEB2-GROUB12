import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgForOf, SlicePipe } from '@angular/common';
import {FilterComponent} from '../filter/filter.component';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-post',
  imports: [
    FormsModule,
    NgForOf,
    ReactiveFormsModule,
    SlicePipe,
    FilterComponent,
    FilterComponent,
    RouterLink
  ],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  conversionItems = [
    {
      title: 'Carpentry',
      location: 'Ramallah, Palestine',
      description: 'Four working days in a carpentry shop from 8 am to 4 pm',
      date: '17/5/2025',
      price: '149$',
      image: '/assets/post.svg',
      additionalImage: '/assets/post1.svg',
      ownerName: 'Ahmad Musleh',
      ownerId: 1
    },
    {
      title: 'Blacksmithing',
      location: 'Nablus, Palestine',
      description: 'Forge work for four days from 8 am to 4 pm',
      date: '18/5/2025',
      price: '159$',
      image: '/assets/post1.svg',
      additionalImage: '/assets/post.svg',
      ownerName: 'Ahmad Musleh',
      ownerId: 2
    },
    {
      title: 'Gardening',
      location: 'Hebron, Palestine',
      description: 'Garden maintenance service for four days from 8 am to 4 pm',
      date: '19/5/2025',
      price: '169$',
      image: '/assets/post.svg',
      additionalImage: '/assets/post1.svg',
      ownerName: 'Ahmad Musleh',
      ownerId: 3
    },
    {
      title: 'House Cleaning',
      location: 'Jenin, Palestine',
      description: 'Home cleaning service for four days from 8 am to 4 pm',
      date: '20/5/2025',
      price: '179$',
      image: '/assets/post1.svg',
      additionalImage: '/assets/post.svg',
      ownerName: 'Ahmad Musleh',
      ownerId: 4
    },
    {
      title: 'Painting',
      location: 'Tulkarm, Palestine',
      description: 'Indoor and outdoor painting for four days from 8 am to 4 pm',
      date: '21/5/2025',
      price: '189$',
      image: '/assets/post.svg',
      additionalImage: '/assets/post1.svg',
      ownerName: 'Ahmad Musleh',
      ownerId: 5
    },
    {
      title: 'Plumbing',
      location: 'Qalqilya, Palestine',
      description: 'Plumbing services including maintenance and installation',
      date: '22/5/2025',
      price: '199$',
      image: '/assets/post1.svg',
      additionalImage: '/assets/post.svg',
      ownerName: 'Ahmad Musleh',
      ownerId: 6
    },
    {
      title: 'Electrical Work',
      location: 'Bethlehem, Palestine',
      description: 'Wiring and repair services for four days from 8 am to 4 pm',
      date: '23/5/2025',
      price: '209$',
      image: '/assets/post1.svg',
      additionalImage: '/assets/post.svg',
      ownerName: 'Ahmad Musleh',
      ownerId: 7
    },
    {
      title: 'Tile Installation',
      location: 'Jericho, Palestine',
      description: 'Tile flooring installation for four days from 8 am to 4 pm',
      date: '24/5/2025',
      price: '219$',
      image: '/assets/post.svg',
      additionalImage: '/assets/post1.svg',
      ownerName: 'Ahmad Musleh',
      ownerId: 8
    },
    {
      title: 'Roofing',
      location: 'Beit Jala, Palestine',
      description: 'Roof maintenance and repair over four working days',
      date: '25/5/2025',
      price: '229$',
      image: '/assets/post1.svg',
      additionalImage: '/assets/post.svg',
      ownerName: 'Ahmad Musleh',
      ownerId: 9
    },
    {
      title: 'Masonry',
      location: 'Salfit, Palestine',
      description: 'Bricklaying and stone work for four days from 8 am to 4 pm',
      date: '26/5/2025',
      price: '239$',
      image: '/assets/post1.svg',
      additionalImage: '/assets/post1.svg',
      ownerName: 'Ahmad Musleh',
      ownerId: 10
    },
    {
      title: 'Wood Crafting',
      location: 'Yatta, Hebron, Palestine',
      description: 'Wood cutting and shaping work for a few days, morning shift only',
      date: '27/5/2025',
      price: '153$',
      image: '/assets/post1.svg',
      additionalImage: '/assets/post.svg',
      ownerName: 'Ahmad Musleh',
      ownerId: 11
    },
    {
      title: 'Metal Works',
      location: 'Deir Istiya, Salfit, Palestine',
      description: 'Iron welding and frame building, 4 days project',
      date: '28/5/2025',
      price: '162$',
      image: '/assets/post.svg',
      additionalImage: '/assets/post1.svg',
      ownerName: 'Ahmad Musleh',
      ownerId: 12
    },
    {
      title: 'Outdoor Planting',
      location: 'Qabatiya, Jenin, Palestine',
      description: 'Planting flowers and trimming bushes – tools provided',
      date: '29/5/2025',
      price: '173$',
      image: '/assets/post.svg',
      additionalImage: '/assets/post1.svg',
      ownerName: 'Ahmad Musleh',
      ownerId: 13
    },
    {
      title: 'Deep Cleaning',
      location: 'Birzeit, Ramallah, Palestine',
      description: 'Spring cleaning service with heavy-duty tools, 3–4 days',
      date: '30/5/2025',
      price: '182$',
      image: '/assets/post1.svg',
      additionalImage: '/assets/post1.svg',
      ownerName: 'Ahmad Musleh',
      ownerId: 14
    },
    {
      title: 'Wall Painting',
      location: 'Al-Eizariya, Jerusalem, Palestine',
      description: 'Interior painting with vibrant colors – client provides paint',
      date: '31/5/2025',
      price: '195$',
      image: '/assets/post1.svg',
      additionalImage: '/assets/post.svg',
      ownerName: 'Ahmad Musleh',
      ownerId: 15
    },
    {
      title: 'Drain Fixing',
      location: 'Azzun, Qalqilya, Palestine',
      description: 'Leak checks and pipe replacement in kitchen and bathroom',
      date: '1/6/2025',
      price: '202$',
      image: '/assets/post.svg',
      additionalImage: '/assets/post1.svg',
      ownerName: 'Ahmad Musleh',
      ownerId: 16
    },
    {
      title: 'Wiring Setup',
      location: 'Beit Sahour, Bethlehem, Palestine',
      description: 'Fixing old wires, new socket installations (tools not included)',
      date: '2/6/2025',
      price: '213$',
      image: '/assets/post1.svg',
      additionalImage: '/assets/post1.svg',
      ownerName: 'Ahmad Musleh',
      ownerId: 17
    },
    {
      title: 'Ceramic Flooring',
      location: 'Anabta, Tulkarm, Palestine',
      description: 'Kitchen and hall tile placement job for 4 days',
      date: '3/6/2025',
      price: '225$',
      image: '/assets/post.svg',
      additionalImage: '/assets/post.svg',
      ownerName: 'Ahmad Musleh',
      ownerId: 18
    },
    {
      title: 'Roof Patch-Up',
      location: 'Al-Zawiya, Salfit, Palestine',
      description: 'Fix roof cracks, apply waterproofing, 4-day work max',
      date: '4/6/2025',
      price: '235$',
      image: '/assets/post1.svg',
      additionalImage: '/assets/post.svg',
      ownerName: 'Ahmad Musleh',
      ownerId: 19
    },
    {
      title: 'Brick Setting',
      location: 'Arraba, Jenin, Palestine',
      description: 'Set bricks and shape corners, includes mortar mixing',
      date: '5/6/2025',
      price: '244$',
      image: '/assets/post1.svg',
      additionalImage: '/assets/post1.svg',
      ownerName: 'Ahmad Musleh',
      ownerId: 20
    }
  ];
  filteredItems = this.conversionItems;
  itemsPerPage = 8;
  currentPage = 1;

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

  onFilterChanged(filterData: any): void {
    this.filteredItems = this.conversionItems.filter(item => {
      return (
        (item.title.toLowerCase().includes(filterData.jobTitle.toLowerCase()) || !filterData.jobTitle) &&
        (item.location.toLowerCase().includes(filterData.location.toLowerCase()) || !filterData.location) &&
        (parseFloat(item.price.replace('$', '')) >= filterData.minPrice || !filterData.minPrice) &&
        (parseFloat(item.price.replace('$', '')) <= filterData.maxPrice || !filterData.maxPrice)
      );
    });
    this.currentPage = 1;
  }

  selectedItem: any;
  formData = { userName: '', amount: 0, startDate: '' };

  openModal(item: any): void {
    this.selectedItem = item;
  }

  submitRequest() {
    console.log('Request sent:', this.formData);
    alert('Your request has been submitted successfully!');
  }
}
