import { Component, Input } from '@angular/core';
import {NgForOf} from '@angular/common';

interface User {
  clientName: string;
  Profession: string;
  Email: string;
  NumberOfImplementedProjects: string;
}

@Component({
  selector: 'app-tabel-report',
  templateUrl: './tabel-report.component.html',
  styleUrls: ['./tabel-report.component.css'],
  imports: [
    NgForOf
  ],
  standalone: true
})
export class TabelReportComponent {

  @Input() data: User[] = [];  // هنا نستخدم Input لتلقي البيانات من HomeComponent

}
