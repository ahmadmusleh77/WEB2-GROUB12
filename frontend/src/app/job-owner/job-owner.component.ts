import { Component } from '@angular/core';
import {ArtisanNavbarComponent} from '../artisans/navbar-artisan/artisan-navbar.component';
import {HeroSectionComponent} from './home-jobowners/hero-section/hero-section.component';
import {PostListComponent} from './home-jobowners/post-list/post-list.component';
import {FooterComponent} from '../artisans/footer-artisan/footer.component';

@Component({
  selector: 'app-job-owner',
  imports: [
    ArtisanNavbarComponent,
    HeroSectionComponent,
    PostListComponent,
    FooterComponent
  ],
  templateUrl: './job-owner.component.html',
  styleUrl: './job-owner.component.css'
})
export class JobOwnerComponent {

}
