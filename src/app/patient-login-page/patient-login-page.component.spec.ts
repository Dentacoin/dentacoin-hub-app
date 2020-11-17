import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientLoginPageComponent } from './patient-login-page.component';

describe('PatientLoginPageComponent', () => {
  let component: PatientLoginPageComponent;
  let fixture: ComponentFixture<PatientLoginPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientLoginPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientLoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
