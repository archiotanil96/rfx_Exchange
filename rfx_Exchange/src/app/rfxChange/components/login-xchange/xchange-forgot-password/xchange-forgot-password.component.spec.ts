import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XchangeForgotPasswordComponent } from './xchange-forgot-password.component';

describe('XchangeForgotPasswordComponent', () => {
  let component: XchangeForgotPasswordComponent;
  let fixture: ComponentFixture<XchangeForgotPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XchangeForgotPasswordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XchangeForgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
