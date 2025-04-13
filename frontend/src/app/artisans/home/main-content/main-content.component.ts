import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [NgForOf, FormsModule, RouterLink],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent {

  conversionItems = [
    {
      title: 'Carpentry',
      location: 'Sarta village, Salfit, Palestine',
      description: 'There are 4 working days in the carpentry shop from 8 am to 4 pm',
      date: '17/5/2025',
      price: '149$',
      image: '/assets/post.svg',
      additionalImage: '/assets/post1.svg',
      ownerName: 'Ahmad Salim',
      ownerId: 1
    },
    {
      title: 'Carpentry 2',
      location: 'Sarta village, Salfit, Palestine',
      description: 'There are 4 working days in the carpentry shop from 8 am to 4 pm',
      date: '18/5/2025',
      price: '159$',
      image: '/assets/post1.svg',
      additionalImage: '/assets/post.svg',
      ownerName: 'Ahmad Salim',
      ownerId: 2
    },
    {
      title: 'Carpentry 3',
      location: 'Sarta village, Salfit, Palestine',
      description: 'There are 4 working days in the carpentry shop from 8 am to 4 pm',
      date: '19/5/2025',
      price: '169$',
      image: '/assets/post.svg',
      additionalImage: '/assets/post1.svg',
      ownerName: 'Ahmad Salim',
      ownerId: 3
    },
    {
      title: 'Carpentry 4',
      location: 'Sarta village, Salfit, Palestine',
      description: 'There are 4 working days in the carpentry shop from 8 am to 4 pm',
      date: '20/5/2025',
      price: '179$',
      image: '/assets/post.svg',
      additionalImage: '/assets/post1.svg',
      ownerName: 'Ahmad Salim',
      ownerId: 4
    },
    {
      title: 'Carpentry 5',
      location: 'Sarta village, Salfit, Palestine',
      description: 'There are 4 working days in the carpentry shop from 8 am to 4 pm',
      date: '21/5/2025',
      price: '189$',
      image: '/assets/post.svg',
      additionalImage: '/assets/post1.svg',
      ownerName: 'Ahmad Salim',
      ownerId: 5
    },
    {
      title: 'Carpentry 6',
      location: 'Sarta village, Salfit, Palestine',
      description: 'There are 4 working days in the carpentry shop from 8 am to 4 pm',
      date: '22/5/2025',
      price: '199$',
      image: '/assets/post1.svg',
      additionalImage: '/assets/post.svg',
      ownerName: 'Ahmad Salim',
      ownerId: 6
    }
    ,
    {
      title: 'Carpentry 7',
      location: 'Sarta village, Salfit, Palestine',
      description: 'There are 4 working days in the carpentry shop from 8 am to 4 pm',
      date: '21/5/2025',
      price: '189$',
      image: '/assets/post1.svg',
      additionalImage: '/assets/post.svg',
      ownerName: 'Ahmad Salim',
      ownerId: 7
    },
    {
      title: 'Carpentry 8',
      location: 'Sarta village, Salfit, Palestine',
      description: 'There are 4 working days in the carpentry shop from 8 am to 4 pm',
      date: '22/5/2025',
      price: '199$',
      image: '/assets/post.svg',
      additionalImage: '/assets/post1.svg',
      ownerName: 'Ahmad Salim',
      ownerId: 8
    }
  ];

  selectedItem: any = null;

  formData = {
    userName: '',
    amount: '',
    startDate: ''
  };

  openModal(item: any) {
    this.selectedItem = item;
  }


  submitRequest() {
    console.log('\n' +
      'Request sent:', this.formData);
    alert('Your request has been submitted successfully!');


    this.formData = {
      userName: '',
      amount: '',
      startDate: ''
    };
  }
}
