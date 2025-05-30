import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './settings-artisan.component.html',
  styleUrls: ['./settings-artisan.component.css']
})
export class SettingsComponent {
  activeTab = 'personal';

  personalInfo = {
    name: 'David',
    country: 'Italy',
    timezone: 'Europe/Rome',
    about: "Hey, it's me :)",
    languages: 'Italian'
  };

  loginSecurity = {
    email: 'jamal@example.com',
    password: '********',
    twoFactor: false,
    visibility: 'Public'
  };

  platformPreferences = {
    language: 'English',
    theme: 'Light',
    notifications: true,
    timeFormat: '24h',
    layout: 'Compact'
  };

  discardChanges() {
    alert('Changes discarded.');
  }

  applyChanges() {
    alert('Changes applied!');
  }
}
