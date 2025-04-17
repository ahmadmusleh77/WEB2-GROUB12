import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageBidsJobownerComponent } from './manage-bids-jobowner.component';

describe('ManageBidsJobownerComponent', () => {
  let component: ManageBidsJobownerComponent;
  let fixture: ComponentFixture<ManageBidsJobownerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageBidsJobownerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageBidsJobownerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
