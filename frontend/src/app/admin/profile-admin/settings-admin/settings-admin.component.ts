import { Component, OnInit } from '@angular/core';
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
export class SettingsComponent implements OnInit {
  activeTab = 'profile';
  settingId: number | null = null;
  isEditing = false;

  user = JSON.parse(localStorage.getItem('user') || '{}');
  userId = this.user?.user_id || null;
  userType = this.mapRole(this.user?.role_id);

  constructor(private settingService: SettingService) {}

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

  ngOnInit(): void {
    if (this.userId) {
      this.settingService.getSetting(this.userId).subscribe({
        next: (data) => {
          if (data) {
            const id = data.id || data.setting_id || data.ID || null;

            if (id) {
              this.settingId = +id;
              this.isEditing = true;
            } else {
              this.isEditing = false;
              this.settingId = null;
            }

            this.profileInfo = {
              name: data.name || '',
              country: data.country || '',
              phone: data.phone || '',
              address: data.address || '',
              birthday: data.birthday || '',
              gender: data.gender || '',
              about: data.about || '',
              languages: data.languages || [],
              newLanguage: ''
            };

            this.accountSettings.email = data.email || '';
            this.accountSettings.visibility = data.visibility || 'Public';
            this.accountSettings.theme = data.theme || 'Light';

            this.background.skills = data.skills || [];
            this.background.experience = data.experience || '';
            this.background.education = data.education || '';
          } else {
            this.isEditing = false;
            this.settingId = null;
          }
        },
        error: (err) => {
          console.error('Error loading settings:', err);
          this.isEditing = false;
          this.settingId = null;
        }
      });
    }
  }

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
    const payload: any = {
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
      visibility: this.accountSettings.visibility,
      theme: this.accountSettings.theme,
      skills: this.background.skills,
      experience: this.background.experience,
      education: this.background.education
    };

    if (this.accountSettings.password?.trim()) {
      payload.password = this.accountSettings.password;
    }

    if (this.isEditing && this.settingId !== null) {
      this.settingService.updateSetting(this.settingId, payload).subscribe({
        next: () => {
          alert('Changes updated successfully!');
        },
        error: (err) => {
          console.error('Update error:', err);
          alert(err.error?.message || 'Failed to update settings.');
        }
      });
    } else {
      this.settingService.createSetting(payload).subscribe({
        next: (res: any) => {
          alert('Changes saved successfully!');
          this.settingId = res.id || res.setting_id;
          this.isEditing = true;
        },
        error: (err) => {
          console.error('Create error:', err);
          alert(err.error?.message || 'Failed to save settings.');
        }
      });
    }
  }
}
