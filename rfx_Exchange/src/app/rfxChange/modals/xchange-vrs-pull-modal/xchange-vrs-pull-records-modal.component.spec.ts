import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XchangeVrsPullRecordsModalComponent } from './xchange-vrs-pull-records-modal.component';

describe('XchangeVrsPullRecordsModalComponent', () => {
  let component: XchangeVrsPullRecordsModalComponent;
  let fixture: ComponentFixture<XchangeVrsPullRecordsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XchangeVrsPullRecordsModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XchangeVrsPullRecordsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
