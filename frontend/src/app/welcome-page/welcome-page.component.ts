import {Component} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {StatisticsComponent} from './statistics/statistics.component';
import {WhoWeAreComponent} from './who-we-are/who-we-are.component';
import {FooterWelcomeComponent} from './footer-welcome/footer-welcome.component';



@Component({
  selector: 'app-welcome-page',
  imports: [
    HeaderComponent,
    WhoWeAreComponent,
    StatisticsComponent,
    FooterWelcomeComponent,

  ],
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.css'
})
export class WelcomePageComponent {


}
