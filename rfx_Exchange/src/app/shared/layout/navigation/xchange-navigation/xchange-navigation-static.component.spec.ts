import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XchangeNavigationStaticComponent } from './xchange-navigation-static.component';

describe('XchangeNavigationStaticComponent', () => {
  let component: XchangeNavigationStaticComponent;
  let fixture: ComponentFixture<XchangeNavigationStaticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XchangeNavigationStaticComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XchangeNavigationStaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
