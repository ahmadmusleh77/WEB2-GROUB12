import {Component, Input} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {bids} from '../../../models/bids';

@Component({
  selector: 'app-tabel-bids',
  standalone: true,
  imports: [NgForOf, NgIf],
  templateUrl: './tabel-bids.component.html',
  styleUrl: './tabel-bids.component.css'
})
export class TabelBidsComponent {
  @Input() someBids: bids[] = [];
}

