import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-account-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './account-artisan.component.html',
  styleUrls: ['./account-artisan.component.css']
})
export class AccountProfileComponent {
  name = 'Jamal Ilaiwi';

  role = 'Supervisor';

  location = 'Palestine';

  email = 'jamal@gmail.com';

  phone = '+970 599 000 000';

  address = 'Ramallah, Palestine';

  birthday = 'March 15, 1995';
  gender = 'Male';

  languages = 'Arabic, English';

  about = 'Skilled electrician with hands-on experience in wiring, installations, and repairs.';
  
  skills = ['Precision', 'Reliability', 'Adaptability', 'Communication', 'Efficiency'];
  photoUrl = 'https://www.w3schools.com/howto/img_avatar.png';
  rating = 4.3;

  get stars() {
    const fullStars = Math.floor(this.rating);
    const halfStar = this.rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    let starArray = [];
    for (let i = 0; i < fullStars; i++) starArray.push('fas fa-star');
    if (halfStar) starArray.push('fas fa-star-half-alt');
    for (let i = 0; i < emptyStars; i++) starArray.push('far fa-star');
    return starArray;
  }


  goToChat() {
    console.log('Redirecting to chat...');
   
  }
}