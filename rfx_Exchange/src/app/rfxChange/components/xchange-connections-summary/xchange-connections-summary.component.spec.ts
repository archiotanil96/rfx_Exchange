import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XchangeConnectionsSummaryComponent } from './xchange-connections-summary.component';

describe('XchangeConnectionsSummaryComponent', () => {
  let component: XchangeConnectionsSummaryComponent;
  let fixture: ComponentFixture<XchangeConnectionsSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XchangeConnectionsSummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XchangeConnectionsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
