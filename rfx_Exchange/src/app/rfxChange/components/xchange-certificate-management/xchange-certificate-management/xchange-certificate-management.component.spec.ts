import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XchangeCertificateManagementComponent } from './xchange-certificate-management.component';

describe('XchangeCertificateManagementComponent', () => {
  let component: XchangeCertificateManagementComponent;
  let fixture: ComponentFixture<XchangeCertificateManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XchangeCertificateManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XchangeCertificateManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
