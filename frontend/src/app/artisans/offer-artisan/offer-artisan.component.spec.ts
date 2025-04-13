import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferArtisanComponent } from './offer-artisan.component';

describe('OfferArtisanComponent', () => {
  let component: OfferArtisanComponent;
  let fixture: ComponentFixture<OfferArtisanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfferArtisanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferArtisanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
