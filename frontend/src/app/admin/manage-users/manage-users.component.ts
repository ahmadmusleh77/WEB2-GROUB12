import { Component } from '@angular/core';
import {NavAdminComponent} from '../nav-admin/nav-admin.component';
import {ManageComponent} from './manage/manage.component';
import {FooterAdminComponent} from '../footer-admin/footer-admin.component';


@Component({
  selector: 'app-manage-users',
  imports: [
    NavAdminComponent,
    ManageComponent,
    FooterAdminComponent

  ],
  templateUrl: './manage-users.component.html',
  styleUrl: './manage-users.component.css'
})
export class ManageUsersComponent {

}
