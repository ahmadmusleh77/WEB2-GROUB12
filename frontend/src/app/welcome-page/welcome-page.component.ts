import {Component, HostListener} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {StatisticsComponent} from './statistics/statistics.component';


@Component({
  selector: 'app-welcome-page',
  imports: [
    HeaderComponent,
    StatisticsComponent
  ],
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.css'
})
export class WelcomePageComponent {


}
