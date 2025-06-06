import { Component } from '@angular/core';
import {ManageComponent} from './manage/manage.component';

@Component({
  selector: 'app-manage-users',
  imports: [
    ManageComponent,
  ],
  templateUrl: './manage-users.component.html',
  styleUrl: './manage-users.component.css'
})
export class ManageUsersComponent {

}
