import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SettingService } from '../../../services/setting.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-account-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './account-admin.component.html',
  styleUrls: ['./account-admin.component.css']
})
export class AccountProfileComponent implements OnInit {
  photoUrl = 'https://www.w3schools.com/howto/img_avatar.png';
  rating = 4.3;

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

  constructor(
    private settingService: SettingService,
    private userService: UserService
  ) {}

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
          error: (err) => {
            console.error('Failed to fetch setting:', err);
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
