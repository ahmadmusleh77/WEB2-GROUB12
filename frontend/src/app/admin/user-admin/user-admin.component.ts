import {Component, OnInit} from '@angular/core';
import {CardUserComponent} from "./card-user/card-user.component";
import {AdminService} from '../../services/admin.service';
import {post} from '../../models/post';

@Component({
  selector: 'app-user-admin',
  imports: [
    CardUserComponent,
  ],
  templateUrl: './user-admin.component.html',
  styleUrl: './user-admin.component.css'
})
export class UserAdminComponent implements OnInit{
  post:post[]=[]
  constructor(private adminService : AdminService) {
  }
  ngOnInit(): void {
    this.adminService.Posts().subscribe(post=>{
      this.post=post
    })
  }

}
