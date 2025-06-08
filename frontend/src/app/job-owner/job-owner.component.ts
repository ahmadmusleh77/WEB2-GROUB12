import { Component } from '@angular/core';
import {FooterComponent} from '../artisans/footer-artisan/footer.component';
import {NavbarJobownerComponent} from './navbar-jobowner/navbar-jobowner.component';
import {RouterOutlet} from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-job-owner',
  imports: [
    FooterComponent,
    NavbarJobownerComponent,
    RouterOutlet,
    RouterModule,
  ],
  templateUrl: './job-owner.component.html',
  styleUrl: './job-owner.component.css'
})
export class JobOwnerComponent {

}
