import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileJobOwnerComponent } from './profile-job-owner.component';

describe('ProfileJobOwnerComponent', () => {
  let component: ProfileJobOwnerComponent;
  let fixture: ComponentFixture<ProfileJobOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileJobOwnerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileJobOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
