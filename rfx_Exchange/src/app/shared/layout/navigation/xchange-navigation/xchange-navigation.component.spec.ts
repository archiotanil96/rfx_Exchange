import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XchangeNavigationComponent } from './xchange-navigation.component';

describe('XchangeNavigationComponent', () => {
  let component: XchangeNavigationComponent;
  let fixture: ComponentFixture<XchangeNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XchangeNavigationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XchangeNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
