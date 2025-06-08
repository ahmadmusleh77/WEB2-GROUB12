import {Component, OnInit} from '@angular/core';
import {CardReportComponent} from "./card-report/card-report.component";
import {NgForOf} from "@angular/common";
import {TabelReport2Component} from "./tabel-report2/tabel-report2.component";
import {TabelReportComponent} from "./tabel-report/tabel-report.component";
import {TitelAdminComponent} from "./titel-admin/titel-admin.component";
import {AdminService} from '../../services/admin.service';
import {Most} from '../../models/most';

@Component({
  selector: 'app-home-admin',
    imports: [
        CardReportComponent,
        NgForOf,
        TabelReport2Component,
        TabelReportComponent,
        TitelAdminComponent
    ],
  templateUrl: './home-admin.component.html',
  styleUrl: './home-admin.component.css'
})
export class HomeAdminComponent implements  OnInit{

most:Most[]=[]
constructor(private adminService : AdminService) {
}






  cards = [
    {
      count: '',
      title: 'Total Registered Artisans',
      icon: 'fa-solid fa-users-gear'
    },
    {
      count: '',
      title: 'Total number of jobs posted',
      icon: 'fas fa-briefcase'
    },
    {
      count: '',
      title: 'Total NumberOf jobs completed',
      icon: 'fa-solid fa-clipboard-check'
    },
    {
      count: '',
      title: 'Total number of daily jobs',
      icon: 'fa-solid fa-clipboard-check'
    },
    {
      count: '',
      title: 'Total number of admins',
      icon: 'fas fa-gear'
    },
    {
      count: '',
      title: 'Total number of users',
      icon: 'fa-solid fa-users-gear'
    }

  ];
  userList = [
    {
      UserName: 'Saleh',
      Profession: 'Carpentry',
      Email: 'saleh@example.com',
      NumberOfImplementedProjects: '100'
    },
    {
      UserName: 'Khaled',
      Profession: 'Electrician',
      Email: 'khaled@example.com',
      NumberOfImplementedProjects: '300'
    }
  ];
  userData = [
    {
      clientName: 'Saleh',
      Profession: 'Carpentry',
      Email: 'saleh@example.com',
      NumberOfImplementedProjects: '100'
    },
    {
      clientName: 'Khaled',
      Profession: 'Electrician',
      Email: 'khaled@example.com',
      NumberOfImplementedProjects: '200'
    },
    {
      clientName: 'Saleh',
      Profession: 'Carpentry',
      Email: 'saleh@example.com',
      NumberOfImplementedProjects: '100'
    },
    {
      clientName: 'Khaled',
      Profession: 'Electrician',
      Email: 'khaled@example.com',
      NumberOfImplementedProjects: '200'
    },
    {
      clientName: 'Saleh',
      Profession: 'Carpentry',
      Email: 'saleh@example.com',
      NumberOfImplementedProjects: '100'
    },
    {
      clientName: 'Khaled',
      Profession: 'Electrician',
      Email: 'khaled@example.com',
      NumberOfImplementedProjects: '200'
    },
    {
      clientName: 'Saleh',
      Profession: 'Carpentry',
      Email: 'saleh@example.com',
      NumberOfImplementedProjects: '100'
    },
    {
      clientName: 'Khaled',
      Profession: 'Electrician',
      Email: 'khaled@example.com',
      NumberOfImplementedProjects: '200'
    }
  ];
  userData2 = [
    {
      clientName: 'Saleh',
      Email: 'saleh@example.com',
      NumberPost: 200
    },
    {
      clientName: 'Khaled',
      Email: 'khaled@example.com',
      NumberPost: 200
    },
    {
      clientName: 'Saleh',
      Email: 'saleh@example.com',
      NumberPost: 200
    },
    {
      clientName: 'Khaled',
      Email: 'khaled@example.com',
      NumberPost: 200
    },
    {
      clientName: 'Saleh',
      Email: 'saleh@example.com',
      NumberPost: 200
    },
    {
      clientName: 'Khaled',
      Email: 'khaled@example.com',
      NumberPost: 200
    },
    {
      clientName: 'Saleh',
      Email: 'saleh@example.com',
      NumberPost: 200
    },
    {
      clientName: 'Khaled',
      Email: 'khaled@example.com',
      NumberPost: 200
    }
  ];

  ngOnInit(): void {
    console.log("api");
    const token = localStorage.getItem('token');
    console.log("Token from localStorage:", token);

    this.adminService.getArtisansCount().subscribe(count => {
      this.cards[0].count = count.toString();
    });

    this.adminService.getCountAnnouncedJobs().subscribe(count => {
      this.cards[1].count = count.toString();
    });

    this.adminService.getCompletedJobs().subscribe(count => {
      this.cards[2].count = count.toString();
    });

    this.adminService.getCountDailyJobs().subscribe(count => {
      this.cards[3].count = count.toString();
    });

    this.adminService.getAdminsCount().subscribe(count => {
      this.cards[4].count = count.toString();
    });

    this.adminService.getUserCount().subscribe(count => {
      this.cards[5].count = count.toString();
    });
    /////////////////////////////////////////
    this.adminService.getMostUsers().subscribe(most =>{
      console.log(most)
      this.most=most
    })

  }

}
