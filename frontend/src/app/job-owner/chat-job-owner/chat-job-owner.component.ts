import { Component } from '@angular/core';
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ChatService} from '../../services/chat-service.service';



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


  constructor(private chatService: ChatService) {}

  ngOnInit() {
    this.loadContacts();
  }

  loadContacts() {
    this.chatService.getChatContacts()
      .subscribe({
      next: (res) => {
        this.contacts = res.map((c: any) => ({
          id: c.id,
          name: c.name,
          avatar: `http://127.0.0.1:8000/storage/${c.avatar || 'default.jpg'}`,
          messages: c.messages.map((m: any) => ({
            text: m.text,
            sender: m.sender,
            time: m.time
          }))
        }));

        if (this.contacts.length > 0) {
          this.selectedChat = this.contacts[0];
        }
      },
      error: (err) => console.error('Failed to load contacts:', err)
    });
  }

  selectChat(contact: ChatContact) {
    this.selectedChat = contact;
  }

  sendMessage() {
    const text = this.messageInput.trim();
    if (!text) return;

    const payload = {
      content: text,
      receiver_id: this.selectedChat.id
    };

    this.chatService.sendMessage(payload).subscribe({
      next: (res) => {
        const msg = res.data;
        this.selectedChat.messages.push({
          text: msg.text,
          sender: msg.sender,
          time: msg.time
        });
        this.messageInput = '';
      },
      error: (err) => console.error('Failed to send message:', err)
    });
  }
}
