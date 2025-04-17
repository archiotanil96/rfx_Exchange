import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardXChangeComponent } from './dashboard-xchange.component';

describe('DashboardXChangeComponent', () => {
  let component: DashboardXChangeComponent;
  let fixture: ComponentFixture<DashboardXChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardXChangeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardXChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
