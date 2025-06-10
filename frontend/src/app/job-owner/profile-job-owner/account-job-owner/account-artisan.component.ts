import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SettingService } from '../../../services/setting.service';
import { UserService } from '../../../services/user.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-account-artisan',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './account-artisan.component.html',
  styleUrls: ['./account-artisan.component.css']
})
export class AccountProfileComponent implements OnInit {
  photoUrl = 'https://www.w3schools.com/howto/img_avatar.png';
  rating = 0;

  name = '';
  email = '';
  role = '';
  location = '';
  phone = '';
  address = '';
  birthday = '';
  gender = '';
  languages: string[] = [];
  about = '';
  skills: string[] = [];
  education = '';

  constructor(private settingService: SettingService, private userService: UserService) {}

  ngOnInit(): void {
    this.userService.user$.subscribe(user => {
      this.name = user?.name || '';
      this.email = user?.email || '';
      this.role = this.mapRole(user?.role_id);
      const userId = user?.user_id;
      if (userId) {
        this.settingService.getSetting(userId).subscribe({
          next: (data) => {
            this.location = data.country || '';
            this.phone = data.phone || '';
            this.address = data.address || '';
            this.birthday = data.birthday || '';
            this.gender = data.gender || '';
            this.languages = data.languages || [];
            this.about = data.about || '';
            this.skills = data.skills || [];
            this.education = data.education || '';
          },
          error: () => {}
        });

        this.settingService.getAverageRating(userId).subscribe({
          next: (ratingData) => {
            this.rating = ratingData.average_rating || 0;
          },
          error: () => {
            this.rating = 0;
          }
        });
      }
    });
  }

  mapRole(roleId: number): string {
    if (roleId === 1) return 'Admin';
    if (roleId === 2) return 'Artisan';
    if (roleId === 3) return 'Job Owner';
    return 'User';
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
