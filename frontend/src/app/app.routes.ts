import { Routes } from '@angular/router';
import { HomeComponent } from './artisans/home/home.component';
import { ChatComponent } from './artisans/chat-artisan/chat.component';
import { AllPostComponent } from './artisans/allpost-artisan/all-post.component';
import { OfferArtisanComponent } from './artisans/offer-artisan/offer-artisan.component';
import { ArtisansComponent } from './artisans/artisans.component';

export const routes: Routes = [
  {

    path: '',
    component: ArtisansComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'chat', component: ChatComponent },
      { path: 'all-posts', component: AllPostComponent },
      { path: 'offers', component: OfferArtisanComponent }
    ]
  }
];
