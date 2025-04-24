import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XchangeFileManagementComponent } from './xchange-file-management.component';

describe('XchangeFileManagementComponent', () => {
  let component: XchangeFileManagementComponent;
  let fixture: ComponentFixture<XchangeFileManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XchangeFileManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XchangeFileManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
