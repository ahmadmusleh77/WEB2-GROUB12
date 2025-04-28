import {Component} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {StatisticsComponent} from './statistics/statistics.component';
import {WhoWeAreComponent} from './who-we-are/who-we-are.component';
import {FooterWelcomeComponent} from './footer-welcome/footer-welcome.component';
import {CardWelcomeComponent} from './card-welcome/card-welcome.component';
import {Router, RouterLink} from '@angular/router';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-welcome-page',
  imports: [
    HeaderComponent,
    WhoWeAreComponent,
    StatisticsComponent,
    FooterWelcomeComponent,
    CardWelcomeComponent,
    FormsModule,
    RouterLink,


  ],
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.css'
})
export class WelcomePageComponent {

  searchTerm: string = '';

  constructor(private router: Router) {}

  navigateToSearchPage() {
    if (this.searchTerm.trim()) {
      this.router.navigate(['/category'], { queryParams: { q: this.searchTerm } });
    }
  }

}
