import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-filter-category',
  imports: [
    NgForOf
  ],
  templateUrl: './filter-category.component.html',
  styleUrl: './filter-category.component.css'
})
export class FilterCategoryComponent {
  @Output() filterEvent = new EventEmitter<string>(); // لإرسال العنوان المختار إلى الأب

  onButtonClick(title: string) {
    console.log('Button Clicked:', title);
    this.filterEvent.emit(title); // إرسال العنوان المختار إلى الأب
  }

}
