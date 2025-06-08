import { Component, OnInit } from '@angular/core';
import { NgClass, NgForOf, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatService } from '../../services/chat-service.service';
import { ActivatedRoute } from '@angular/router';

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
  selector: 'app-chat',
  standalone: true,
  imports: [NgClass, FormsModule, NgForOf, NgIf],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  contacts: ChatContact[] = [];
  selectedChat!: ChatContact;
  messageInput: string = '';

  constructor(
    private chatService: ChatService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const receiverId = +params['receiver_id'];
      this.loadContacts(receiverId);
    });
  }

  loadContacts(receiverId?: number) {
    this.chatService.getChatContacts().subscribe({
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

        const found = this.contacts.find(c => c.id === receiverId);

        if (found) {
          this.selectedChat = found;
        } else if (receiverId) {
          this.chatService.getSingleContact(receiverId).subscribe({
            next: (user: any) => {
              const newContact: ChatContact = {
                id: user.id,
                name: user.name,
                avatar: `http://127.0.0.1:8000/storage/${user.avatar || 'default.jpg'}`,
                messages: []
              };

              this.contacts.unshift(newContact);
              this.selectedChat = newContact;
              const welcomeMessage = {
                content: `Hello ${user.name}, I'm interested in your post.`,
                receiver_id: user.id
              };

              this.chatService.sendMessage(welcomeMessage).subscribe({
                next: (res) => {
                  const msg = res.data;
                  if (msg?.text && msg?.sender) {
                    this.selectedChat.messages.push({
                      text: msg.text,
                      sender: msg.sender,
                      time: msg.time
                    });
                  }
                },
                error: (err) => console.error('Error sending welcome message:', err)
              });
            },
            error: (err) => console.error('Error loading single contact:', err)
          });
        } else if (this.contacts.length > 0) {
          this.selectedChat = this.contacts[0];
        }
      },
      error: (err) => console.error('Error loading contacts:', err)
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
