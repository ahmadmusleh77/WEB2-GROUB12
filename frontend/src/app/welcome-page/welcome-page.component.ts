import {Component, HostListener} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {NgIf} from '@angular/common';


@Component({
  selector: 'app-welcome-page',
  imports: [
    HeaderComponent,
    NgIf
  ],
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.css'
})
export class WelcomePageComponent {
  scrolled=false;

  @HostListener('window:scroll',[])
  onScroll() {
    const ScrollTop = window.scrollY || document.documentElement.scrollTop;
    this.scrolled = ScrollTop > 50;
  }
}
