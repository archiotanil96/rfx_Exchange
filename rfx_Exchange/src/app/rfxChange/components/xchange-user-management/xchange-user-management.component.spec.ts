import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XchangeUserManagementComponent } from './xchange-user-management.component';

describe('XchangeUserManagementComponent', () => {
  let component: XchangeUserManagementComponent;
  let fixture: ComponentFixture<XchangeUserManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XchangeUserManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XchangeUserManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
