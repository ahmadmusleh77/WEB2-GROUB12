import { Component } from '@angular/core';
import {NavAdminComponent} from '../nav-admin/nav-admin.component';
import {FooterAdminComponent} from '../footer-admin/footer-admin.component';
import {TabelBidsComponent} from './tabel-bids/tabel-bids.component';

@Component({
  selector: 'app-manage-bids',
  imports: [
    NavAdminComponent,
    FooterAdminComponent,
    TabelBidsComponent
  ],
  templateUrl: './manage-bids.component.html',
  styleUrl: './manage-bids.component.css'
})
export class ManageBidsComponent {

}
