import {Component, HostListener} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {StatisticsComponent} from './statistics/statistics.component';
import {WhoWeAreComponent} from './who-we-are/who-we-are.component';


@Component({
  selector: 'app-welcome-page',
  imports: [
    HeaderComponent,
    StatisticsComponent,
    WhoWeAreComponent
  ],
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.css'
})
export class WelcomePageComponent {


}
