import { Component } from '@angular/core';

import {ManageUsersComponent} from './manage-users/manage-users.component';
import {ManageComponent} from './manage-users/manage/manage.component';
import {ManageBidsComponent} from './manage-bids/manage-bids.component';
import {UserAdminComponent} from './user-admin/user-admin.component';
import {HomeAdminComponent} from './home-admin/home-admin.component';


@Component({
  selector: 'app-admin',
  imports: [

    ManageUsersComponent,

    ManageBidsComponent,
    UserAdminComponent,
    HomeAdminComponent,


  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}
