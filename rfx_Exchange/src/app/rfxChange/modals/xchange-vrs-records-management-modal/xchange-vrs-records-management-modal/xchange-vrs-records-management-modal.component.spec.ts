import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XchangeVrsRecordsManagementModalComponent } from './xchange-vrs-records-management-modal.component';

describe('XchangeVrsRecordsManagementModalComponent', () => {
  let component: XchangeVrsRecordsManagementModalComponent;
  let fixture: ComponentFixture<XchangeVrsRecordsManagementModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XchangeVrsRecordsManagementModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XchangeVrsRecordsManagementModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
