import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
  standalone: true,
  imports: [
    RouterLink
  ]
})
export class CreatePostComponent {

}
