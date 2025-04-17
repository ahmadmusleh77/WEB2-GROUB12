import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferJobownerComponent } from './offer-jobowner.component';

describe('OfferJobownerComponent', () => {
  let component: OfferJobownerComponent;
  let fixture: ComponentFixture<OfferJobownerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfferJobownerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferJobownerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
