import { Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';


@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  imports: [
    FormsModule,
    RouterLink,

  ],
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent {

}
