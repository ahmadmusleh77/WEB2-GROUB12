import {Component, OnInit} from '@angular/core';
import {NavAdminComponent} from '../nav-admin/nav-admin.component';
import {FooterAdminComponent} from '../footer-admin/footer-admin.component';
import {TabelBidsComponent} from './tabel-bids/tabel-bids.component';
import {bids} from '../../models/bids';
import {AdminService} from '../../services/admin.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manage-bids',
  standalone: true,
  imports: [TabelBidsComponent],
  templateUrl: './manage-bids.component.html',
  styleUrl: './manage-bids.component.css'
})

export class ManageBidsComponent implements OnInit {
  bids: bids[] = [];
  postId!: number;

  constructor(
    private adminService: AdminService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.postId = +this.route.snapshot.paramMap.get('id')!;

    this.adminService.bidsCount(this.postId).subscribe(data => {
      this.bids = data.bids;
      console.log(this.bids);
    });
  }
}
