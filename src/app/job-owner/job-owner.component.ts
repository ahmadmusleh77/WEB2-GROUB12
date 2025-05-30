import { Component } from '@angular/core';
import {FooterComponent} from '../artisans/footer-artisan/footer.component';
import {NavbarJobownerComponent} from './navbar-jobowner/navbar-jobowner.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-job-owner',
  imports: [
    FooterComponent,
    NavbarJobownerComponent,
    RouterOutlet
  ],
  templateUrl: './job-owner.component.html',
  styleUrl: './job-owner.component.css'
})
export class JobOwnerComponent {

}
