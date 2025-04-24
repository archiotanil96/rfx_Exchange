import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XchangeDashboardComponent } from './xchange-dashboard.component';

describe('XchangeDashboardComponent', () => {
  let component: XchangeDashboardComponent;
  let fixture: ComponentFixture<XchangeDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XchangeDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XchangeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
