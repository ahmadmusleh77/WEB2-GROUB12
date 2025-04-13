import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisanNavbarComponent } from './artisan-navbar.component';

describe('ArtisanNavbarComponent', () => {
  let component: ArtisanNavbarComponent;
  let fixture: ComponentFixture<ArtisanNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtisanNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtisanNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
