import { Component } from '@angular/core';
import {HeroSectionComponent} from './hero-section/hero-section.component';
import {PostListComponent} from './post-list/post-list.component';

@Component({
  selector: 'app-home-jobowners',
  imports: [
    HeroSectionComponent,
    PostListComponent,
  ],
  templateUrl: './home-jobowners.component.html',
  styleUrl: './home-jobowners.component.css'
})
export class HomeJobownersComponent {

}
