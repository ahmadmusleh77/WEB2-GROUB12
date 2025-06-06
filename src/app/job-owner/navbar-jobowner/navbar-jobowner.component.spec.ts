import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarJobownerComponent } from './navbar-jobowner.component';

describe('NavbarJobownerComponent', () => {
  let component: NavbarJobownerComponent;
  let fixture: ComponentFixture<NavbarJobownerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarJobownerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarJobownerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
