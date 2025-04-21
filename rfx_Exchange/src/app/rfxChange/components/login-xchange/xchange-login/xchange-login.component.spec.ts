import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XchangeLoginComponent } from './xchange-login.component';

describe('XchangeLoginComponent', () => {
  let component: XchangeLoginComponent;
  let fixture: ComponentFixture<XchangeLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XchangeLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XchangeLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
