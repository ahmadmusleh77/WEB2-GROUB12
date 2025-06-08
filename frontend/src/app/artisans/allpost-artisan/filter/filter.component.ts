import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Output() filterChanged = new EventEmitter<any>();

  jobTitle: string = '';
  location: string = '';
  minPrice: number | null = null;
  maxPrice: number | null = null;

  onFilterChange(): void {

    this.filterChanged.emit({
      jobTitle: this.jobTitle,
      location: this.location,
      minPrice: this.minPrice,
      maxPrice: this.maxPrice,
    });
  }


  clearFilters(): void {
    this.jobTitle = '';
    this.location = '';
    this.minPrice = null;
    this.maxPrice = null;
    this.onFilterChange();
  }
}
