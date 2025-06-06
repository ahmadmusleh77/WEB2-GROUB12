import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelBidsComponent } from './tabel-bids.component';

describe('TabelBidsComponent', () => {
  let component: TabelBidsComponent;
  let fixture: ComponentFixture<TabelBidsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabelBidsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelBidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
