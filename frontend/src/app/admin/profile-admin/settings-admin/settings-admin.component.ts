import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SettingService } from '../../../services/setting.service';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './settings-admin.component.html',
  styleUrls: ['./settings-admin.component.css']
})
export class SettingsComponent {
  activeTab = 'profile';

  constructor(private settingService: SettingService) {}

  userId = JSON.parse(localStorage.getItem('user') || '{}')?.user_id || null;
  userType = this.mapRole(JSON.parse(localStorage.getItem('user') || '{}')?.role_id);

  profileInfo = {
    name: '',
    country: '',
    phone: '',
    address: '',
    birthday: '',
    gender: '',
    about: '',
    languages: [] as string[],
    newLanguage: ''
  };

  accountSettings = {
    email: '',
    password: '',
    visibility: 'Public',
    theme: 'Light'
  };

  background = {
    skills: [] as string[],
    newSkill: '',
    experience: '',
    education: ''
  };

  mapRole(roleId: number): 'admin' | 'artisan' | 'job_owner' {
    if (roleId === 1) return 'admin';
    if (roleId === 2) return 'artisan';
    return 'job_owner';
  }

  addSkill() {
    const skill = this.background.newSkill.trim();
    if (skill && !this.background.skills.includes(skill)) {
      this.background.skills.push(skill);
      this.background.newSkill = '';
    }
  }

  removeSkill(index: number) {
    this.background.skills.splice(index, 1);
  }

  addLanguage() {
    const lang = this.profileInfo.newLanguage.trim();
    if (lang && !this.profileInfo.languages.includes(lang)) {
      this.profileInfo.languages.push(lang);
      this.profileInfo.newLanguage = '';
    }
  }

  removeLanguage(index: number) {
    this.profileInfo.languages.splice(index, 1);
  }

  discardChanges() {
    alert('Changes discarded.');
  }

  applyChanges() {
    const payload = {
      user_id: this.userId,
      user_type: this.userType,
      name: this.profileInfo.name,
      country: this.profileInfo.country,
      phone: this.profileInfo.phone,
      address: this.profileInfo.address,
      birthday: this.profileInfo.birthday,
      gender: this.profileInfo.gender,
      about: this.profileInfo.about,
      languages: this.profileInfo.languages,
      email: this.accountSettings.email,
      password: this.accountSettings.password,
      visibility: this.accountSettings.visibility,
      theme: this.accountSettings.theme,
      skills: this.background.skills,
      experience: this.background.experience,
      education: this.background.education,
    };

    console.log('Payload:', payload);

    this.settingService.createSetting(payload).subscribe({
      next: (res: any) => {
        alert('Changes saved successfully!');
        console.log('Saved data:', res);
      },
      error: (err: any) => {
        console.error('Full error object:', err);
        alert(err.error?.message || 'Failed to save changes.');
      }
    });
  }
}
