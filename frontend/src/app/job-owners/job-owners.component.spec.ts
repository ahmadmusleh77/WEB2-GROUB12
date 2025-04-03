import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOwnersComponent } from './job-owners.component';

describe('JobOwnersComponent', () => {
  let component: JobOwnersComponent;
  let fixture: ComponentFixture<JobOwnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobOwnersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobOwnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
