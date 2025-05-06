import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XchangeVrsVerificationEventsStatusModalComponent } from './xchange-vrs-verification-events-status-modal.component';

describe('XchangeVrsVerificationEventsStatusModalComponent', () => {
  let component: XchangeVrsVerificationEventsStatusModalComponent;
  let fixture: ComponentFixture<XchangeVrsVerificationEventsStatusModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XchangeVrsVerificationEventsStatusModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XchangeVrsVerificationEventsStatusModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
