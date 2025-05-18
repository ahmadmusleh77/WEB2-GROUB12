import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './settings-artisan.component.html',
  styleUrls: ['./settings-artisan.component.css']
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
    languages: ''
  };

  accountSettings = {
    email: '',
    password: '',
    visibility: 'Public',
    language: 'English',
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

  discardChanges() {
    alert('Changes discarded.');
  }

  applyChanges() {
    alert('Changes applied!');
  }
}
