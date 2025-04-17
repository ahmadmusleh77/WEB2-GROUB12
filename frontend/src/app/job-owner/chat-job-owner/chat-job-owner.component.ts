import { Component } from '@angular/core';
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



interface ChatMessage {
  text: string;
  sender: 'user' | 'other';
  time?: string;
}

interface ChatContact {
  id: number;
  name: string;
  avatar: string;
  messages: ChatMessage[];
}
@Component({
  selector: 'app-chat-job-owner',
  imports: [
    NgForOf,
    NgIf,
    ReactiveFormsModule,
    NgClass,
    FormsModule
  ],
  templateUrl: './chat-job-owner.component.html',
  styleUrl: './chat-job-owner.component.css',
  standalone: true
})
export class ChatJobOwnerComponent {
  contacts: ChatContact[] = [];
  selectedChat!: ChatContact;
  messageInput: string = '';

  constructor() {
    this.contacts = [
      {
        id: 1,
        name: 'Ahmad Musleh',
        avatar: 'assets/download.jfif',
        messages: [
          { text: 'Hey, how are you?', sender: 'other', time: '09:00 am' },
          { text: 'I’m good, thanks!', sender: 'user', time: '09:01 am' }
        ]
      },
      {
        id: 2,
        name: 'Osama',
        avatar: 'assets/download.jfif',
        messages: [
          { text: 'Hello!', sender: 'other', time: '08:45 am' },
          { text: 'Hi there!', sender: 'user', time: '08:46 am' }
        ]
      }
    ];

    this.selectedChat = this.contacts[0];
  }

  selectChat(contact: ChatContact) {
    this.selectedChat = contact;
  }

  sendMessage() {
    if (this.messageInput.trim()) {
      this.selectedChat.messages.push({
        text: this.messageInput,
        sender: 'user',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      });
      this.messageInput = '';
    }
  }
}
