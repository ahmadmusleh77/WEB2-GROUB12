import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterWelcomeComponent } from './footer-welcome.component';

describe('FooterWelcomeComponent', () => {
  let component: FooterWelcomeComponent;
  let fixture: ComponentFixture<FooterWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterWelcomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
