import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XchangeConnectionSetupComponent } from './xchange-connection-setup.component';

describe('XchangeConnectionSetupComponent', () => {
  let component: XchangeConnectionSetupComponent;
  let fixture: ComponentFixture<XchangeConnectionSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XchangeConnectionSetupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XchangeConnectionSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
