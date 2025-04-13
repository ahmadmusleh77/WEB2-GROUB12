import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SlicePipe } from '@angular/common';
import {PostComponent} from './post/post.component';


@Component({
  standalone: true,
  selector: 'app-allpost-artisan',
  imports: [
    CommonModule,
    FormsModule,
    PostComponent,
  ],
  templateUrl: './all-post.component.html',
  styleUrls: ['./all-post.component.css']
})
export class AllPostComponent {

}
