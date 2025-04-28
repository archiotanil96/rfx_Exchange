import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XchangeVrsPushPullAnalyticsComponent } from './xchange-vrs-push-pull-analytics.component';

describe('XchangeVrsPushPullAnalyticsComponent', () => {
  let component: XchangeVrsPushPullAnalyticsComponent;
  let fixture: ComponentFixture<XchangeVrsPushPullAnalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XchangeVrsPushPullAnalyticsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XchangeVrsPushPullAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
