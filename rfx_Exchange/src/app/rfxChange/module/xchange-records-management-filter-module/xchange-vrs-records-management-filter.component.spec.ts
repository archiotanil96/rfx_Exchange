import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XchangeVrsRecordsManagementFilterComponent } from './xchange-vrs-records-management-filter.component';

describe('XchangeVrsRecordsManagementFilterComponent', () => {
  let component: XchangeVrsRecordsManagementFilterComponent;
  let fixture: ComponentFixture<XchangeVrsRecordsManagementFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XchangeVrsRecordsManagementFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XchangeVrsRecordsManagementFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
