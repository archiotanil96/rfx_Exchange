import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XchangeAuditPageComponent } from './xchange-audit-page.component';

describe('XchangeAuditPageComponent', () => {
  let component: XchangeAuditPageComponent;
  let fixture: ComponentFixture<XchangeAuditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XchangeAuditPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XchangeAuditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
