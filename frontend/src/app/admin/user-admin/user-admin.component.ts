import { Component } from '@angular/core';
import {CardUserComponent} from "./card-user/card-user.component";
import {FooterAdminComponent} from '../footer-admin/footer-admin.component';
import {NavAdminComponent} from '../nav-admin/nav-admin.component';

@Component({
  selector: 'app-user-admin',
  imports: [
    CardUserComponent,
    FooterAdminComponent,
    NavAdminComponent
  ],
  templateUrl: './user-admin.component.html',
  styleUrl: './user-admin.component.css'
})
export class UserAdminComponent {

}
