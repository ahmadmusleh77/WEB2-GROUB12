import {Component, OnInit} from '@angular/core';
import {ManageComponent} from './manage/manage.component';
import {AdminService} from '../../services/admin.service';

import {sure} from '../../models/sure';

@Component({
  selector: 'app-manage-users',
  imports: [
    ManageComponent,
  ],
  templateUrl: './manage-users.component.html',
  styleUrl: './manage-users.component.css'
})
export class ManageUsersComponent implements OnInit{
sure:sure[]=[]
  constructor(private adminService : AdminService) {
  }
  ngOnInit(): void {
    console.log('fd');
    const token = localStorage.getItem('token');
    console.log("Token from localStorage:", token);
    this.adminService.getUnapprovedUsers().subscribe(sure=>{
      this.sure =sure
      console.log(this.sure)
    })
    console.log('saleh hisham')
  }


}
