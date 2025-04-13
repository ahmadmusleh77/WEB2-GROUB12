import { Component } from '@angular/core';
import {SubmittedOffersComponent} from './submitted-offers/submitted-offers.component';
import {AcceptedOffersComponent} from './accepted-offers/accepted-offers.component';


@Component({
  selector: 'app-offer-artisan',
  imports: [
    SubmittedOffersComponent,
    AcceptedOffersComponent,
  ],
  templateUrl: './offer-artisan.component.html',
  styleUrl: './offer-artisan.component.css'
})
export class OfferArtisanComponent {

}
