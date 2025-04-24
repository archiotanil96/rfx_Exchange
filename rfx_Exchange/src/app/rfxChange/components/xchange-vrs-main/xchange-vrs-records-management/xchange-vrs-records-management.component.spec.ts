import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XchangeVrsRecordsManagementComponent } from './xchange-vrs-records-management.component';

describe('XchangeVrsRecordsManagementComponent', () => {
  let component: XchangeVrsRecordsManagementComponent;
  let fixture: ComponentFixture<XchangeVrsRecordsManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XchangeVrsRecordsManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XchangeVrsRecordsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
