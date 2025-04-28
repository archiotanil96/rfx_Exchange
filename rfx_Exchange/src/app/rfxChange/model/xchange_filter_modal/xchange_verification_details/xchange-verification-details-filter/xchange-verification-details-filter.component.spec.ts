import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XchangeVerificationDetailsFilterComponent } from './xchange-verification-details-filter.component';

describe('XchangeVerificationDetailsFilterComponent', () => {
  let component: XchangeVerificationDetailsFilterComponent;
  let fixture: ComponentFixture<XchangeVerificationDetailsFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XchangeVerificationDetailsFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XchangeVerificationDetailsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
