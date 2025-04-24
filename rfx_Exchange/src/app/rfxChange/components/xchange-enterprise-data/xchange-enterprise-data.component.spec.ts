import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XchangeEnterpriseDataComponent } from './xchange-enterprise-data.component';

describe('XchangeEnterpriseDataComponent', () => {
  let component: XchangeEnterpriseDataComponent;
  let fixture: ComponentFixture<XchangeEnterpriseDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XchangeEnterpriseDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XchangeEnterpriseDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
