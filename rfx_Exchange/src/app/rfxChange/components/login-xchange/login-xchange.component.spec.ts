import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginXChangeComponent } from './login-xchange.component';

describe('LoginXChangeComponent', () => {
  let component: LoginXChangeComponent;
  let fixture: ComponentFixture<LoginXChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginXChangeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginXChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
