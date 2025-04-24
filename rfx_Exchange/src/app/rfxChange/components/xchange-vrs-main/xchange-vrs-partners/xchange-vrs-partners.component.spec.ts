import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XchangeVrsPartnersComponent } from './xchange-vrs-partners.component';

describe('XchangeVrsPartnersComponent', () => {
  let component: XchangeVrsPartnersComponent;
  let fixture: ComponentFixture<XchangeVrsPartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XchangeVrsPartnersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XchangeVrsPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
