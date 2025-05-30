import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XchangeMainLayoutComponent } from './xchange-main-layout.component';

describe('XchangeMainLayoutComponent', () => {
  let component: XchangeMainLayoutComponent;
  let fixture: ComponentFixture<XchangeMainLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XchangeMainLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XchangeMainLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
