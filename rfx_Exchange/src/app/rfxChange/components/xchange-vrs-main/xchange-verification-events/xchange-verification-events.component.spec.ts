import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XchangeVerificationEventsComponent } from './xchange-verification-events.component';

describe('XchangeVerificationEventsComponent', () => {
  let component: XchangeVerificationEventsComponent;
  let fixture: ComponentFixture<XchangeVerificationEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XchangeVerificationEventsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XchangeVerificationEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
