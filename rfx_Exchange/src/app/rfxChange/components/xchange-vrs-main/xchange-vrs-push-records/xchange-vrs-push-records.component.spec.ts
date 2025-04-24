import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XchangeVrsPushRecordsComponent } from './xchange-vrs-push-records.component';
describe('XchangeVrsPushRecordsComponent', () => {
  let component: XchangeVrsPushRecordsComponent;
  let fixture: ComponentFixture<XchangeVrsPushRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XchangeVrsPushRecordsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XchangeVrsPushRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
