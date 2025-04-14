import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelReportComponent } from './tabel-report.component';

describe('TabelReportComponent', () => {
  let component: TabelReportComponent;
  let fixture: ComponentFixture<TabelReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabelReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
