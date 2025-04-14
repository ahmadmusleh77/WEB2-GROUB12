import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitelAdminComponent } from './titel-admin.component';

describe('TitelAdminComponent', () => {
  let component: TitelAdminComponent;
  let fixture: ComponentFixture<TitelAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitelAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitelAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
