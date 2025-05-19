import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XchangeVrsPushRecordsModalComponent } from '../xchange-vrs-push-modal/xchange-vrs-push-records-modal.component';

describe('XchangeVrsPushRecordsModalComponent', () => {
  let component: XchangeVrsPushRecordsModalComponent;
  let fixture: ComponentFixture<XchangeVrsPushRecordsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XchangeVrsPushRecordsModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XchangeVrsPushRecordsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
