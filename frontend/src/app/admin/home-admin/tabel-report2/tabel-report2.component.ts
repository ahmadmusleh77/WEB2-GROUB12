import {Component, Input} from '@angular/core';
import {NgForOf} from '@angular/common';
import {Most} from '../../../models/most';
interface User {
  clientName: string;
  Email: string;
  NumberPost: number;
}
@Component({
  selector: 'app-tabel-report2',
  imports: [
    NgForOf
  ],
  templateUrl: './tabel-report2.component.html',
  styleUrls: ['./tabel-report2.component.css']
})

export class TabelReport2Component {
 // @Input() information: User[] = [];  // هنا نستخدم Input لتلقي البيانات من HomeComponent
  @Input() information: Most[] = [];
}
