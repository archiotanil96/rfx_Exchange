import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XchangeVrsPullRecordsComponent } from './xchange-vrs-pull-records.component';

describe('XchangeVrsPullRecordsComponent', () => {
  let component: XchangeVrsPullRecordsComponent;
  let fixture: ComponentFixture<XchangeVrsPullRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XchangeVrsPullRecordsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XchangeVrsPullRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
