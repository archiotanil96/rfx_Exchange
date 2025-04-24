import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XchangeErrorManagementComponent } from './xchange-error-management.component';

describe('XchangeErrorManagementComponent', () => {
  let component: XchangeErrorManagementComponent;
  let fixture: ComponentFixture<XchangeErrorManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XchangeErrorManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XchangeErrorManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
