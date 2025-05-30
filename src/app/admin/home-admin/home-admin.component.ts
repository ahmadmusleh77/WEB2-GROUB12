import { Component } from '@angular/core';
import {CardReportComponent} from "./card-report/card-report.component";
import {NgForOf} from "@angular/common";
import {TabelReport2Component} from "./tabel-report2/tabel-report2.component";
import {TabelReportComponent} from "./tabel-report/tabel-report.component";
import {TitelAdminComponent} from "./titel-admin/titel-admin.component";

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
export class HomeAdminComponent {
  cards = [
    {
      count: '20k+',
      title: 'Total Registered Artisans',
      icon: 'fa-solid fa-users-gear'
    },
    {
      count: '5k+',
      title: 'Total number of jobs posted',
      icon: 'fas fa-briefcase'
    },
    {
      count: '1.2k+',
      title: 'Total NumberOf jobs completed',
      icon: 'fa-solid fa-clipboard-check'
    },
    {
      count: '2k+',
      title: 'Total number of daily jobs',
      icon: 'fa-solid fa-clipboard-check'
    },
    {
      count: '5+',
      title: 'Total number of admins',
      icon: 'fas fa-gear'
    },
    {
      count: '1.2k+',
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
}
