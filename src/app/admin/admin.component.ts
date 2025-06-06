import { Component } from '@angular/core';

import {RouterOutlet} from '@angular/router';
import {FooterAdminComponent} from './footer-admin/footer-admin.component';
import {NavAdminComponent} from './nav-admin/nav-admin.component';


@Component({
  selector: 'app-admin',
  imports: [

    RouterOutlet,
    FooterAdminComponent,
    NavAdminComponent,


  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}
