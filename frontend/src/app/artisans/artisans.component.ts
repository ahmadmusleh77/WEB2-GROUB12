import { Component } from '@angular/core';
import {ArtisanNavbarComponent} from './navbar-artisan/artisan-navbar.component';
import {FooterComponent} from './footer-artisan/footer.component';
import {HomeComponent} from './home/home.component';
import {AllPostComponent} from './allpost-artisan/all-post.component';
import {OfferArtisanComponent} from './offer-artisan/offer-artisan.component';
import {ChatComponent} from './chat-artisan/chat.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-artisans',
  imports: [
    ArtisanNavbarComponent,
    FooterComponent,
    HomeComponent,
    AllPostComponent,
    OfferArtisanComponent,
    ChatComponent,
    RouterOutlet
  ],
  templateUrl: './artisans.component.html',
  styleUrl: './artisans.component.css'
})
export class ArtisansComponent {

}
