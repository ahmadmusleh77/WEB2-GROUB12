import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeJobownersComponent } from './home-jobowners.component';

describe('HomeJobownersComponent', () => {
  let component: HomeJobownersComponent;
  let fixture: ComponentFixture<HomeJobownersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeJobownersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeJobownersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
