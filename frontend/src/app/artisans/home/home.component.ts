import { Component } from '@angular/core';
import {CarouselComponent} from "./carousel/carousel.component";
import {MainContentComponent} from "./main-content/main-content.component";

@Component({
  selector: 'app-home',
    imports: [
        CarouselComponent,
        MainContentComponent
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
