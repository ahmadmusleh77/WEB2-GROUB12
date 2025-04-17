import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatJobOwnerComponent } from './chat-job-owner.component';

describe('ChatJobOwnerComponent', () => {
  let component: ChatJobOwnerComponent;
  let fixture: ComponentFixture<ChatJobOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatJobOwnerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatJobOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
