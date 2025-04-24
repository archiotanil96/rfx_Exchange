import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XchangeServiceManagementComponent } from './xchange-service-management.component';

describe('XchangeServiceManagementComponent', () => {
  let component: XchangeServiceManagementComponent;
  let fixture: ComponentFixture<XchangeServiceManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XchangeServiceManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XchangeServiceManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
