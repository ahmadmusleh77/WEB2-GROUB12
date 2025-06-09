import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingService } from '../../../services/setting.service';

@Component({
  selector: 'app-account-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account-admin.component.html',
  styleUrls: ['./account-admin.component.css']
})
export class AccountProfileComponent implements OnInit {
  photoUrl = 'https://www.w3schools.com/howto/img_avatar.png';
  rating = 4.3;

  name = '';
  role = '';
  location = '';
  email = '';
  phone = '';
  address = '';
  birthday = '';
  gender = '';
  education = '';
  languages: string[] = [];
  about = '';
  skills: string[] = [];

  constructor(private settingService: SettingService) {}

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const settingId = user?.user_id;

    if (settingId) {
      this.settingService.getSetting(settingId).subscribe({
        next: (data) => {
          this.name = data.name;
          this.role = user?.role || 'User';
          this.location = data.country || 'Unknown';
          this.email = data.email;
          this.phone = data.phone;
          this.address = data.address;
          this.birthday = data.birthday;
          this.gender = data.gender;
          this.languages = data.languages || [];
          this.about = data.about;
          this.skills = data.skills || [];
        },
        error: (err) => {
          console.error('Failed to fetch setting:', err);
        }
      });
    }
  }

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
