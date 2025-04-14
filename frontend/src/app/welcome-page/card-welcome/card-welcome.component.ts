import {Component, Input, input} from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-card-welcome',
  imports: [
    NgIf
  ],
  templateUrl: './card-welcome.component.html',
  styleUrl: './card-welcome.component.css'
})
export class CardWelcomeComponent {
  @Input() title:string='';
  @Input() text:string='';
  @Input() imageUrl:string='';


}
