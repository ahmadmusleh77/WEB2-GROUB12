import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-card-report',
  imports: [
    NgClass
  ],
  templateUrl: './card-report.component.html',
  styleUrl: './card-report.component.css'
})
export class CardReportComponent {
  @Input() count: string = '';
  @Input() title: string = '';
  @Input() icon: string = '';

}
