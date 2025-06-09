import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './settings-admin.component.html',
  styleUrls: ['./settings-admin.component.css']
})
export class SettingsComponent {
  activeTab = 'profile';

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
    alert('Changes applied!');
  }
}
