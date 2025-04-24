import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XchangeVrsDashboardComponent } from './xchange-vrs-dashboard.component';

describe('XchangeVrsDashboardComponent', () => {
  let component: XchangeVrsDashboardComponent;
  let fixture: ComponentFixture<XchangeVrsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XchangeVrsDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XchangeVrsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
