import { Component } from '@angular/core';
import {CardUserComponent} from "./card-user/card-user.component";

@Component({
  selector: 'app-user-admin',
  imports: [
    CardUserComponent,
  ],
  templateUrl: './user-admin.component.html',
  styleUrl: './user-admin.component.css'
})
export class UserAdminComponent {

}
