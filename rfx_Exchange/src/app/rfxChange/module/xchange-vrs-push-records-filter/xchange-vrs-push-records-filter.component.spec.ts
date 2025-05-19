import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XchangeVrsPushRecordsFilterComponent } from './xchange-vrs-push-records-filter.component';

describe('XchangeVrsPushRecordsFilterComponent', () => {
  let component: XchangeVrsPushRecordsFilterComponent;
  let fixture: ComponentFixture<XchangeVrsPushRecordsFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XchangeVrsPushRecordsFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XchangeVrsPushRecordsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
