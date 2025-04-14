import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelReport2Component } from './tabel-report2.component';

describe('TabelReport2Component', () => {
  let component: TabelReport2Component;
  let fixture: ComponentFixture<TabelReport2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabelReport2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelReport2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
