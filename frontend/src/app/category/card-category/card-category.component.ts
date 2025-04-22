import {Component, Input, input} from '@angular/core';

@Component({
  selector: 'app-card-category',
  imports: [],
  templateUrl: './card-category.component.html',
  styleUrl: './card-category.component.css'
})
export class CardCategoryComponent {

  @Input() image:string='';
  @Input() title:string='';
  @Input() location:string='';
  @Input() description:string ='';
  @Input() date:string='';
  @Input() price:string='';
}
