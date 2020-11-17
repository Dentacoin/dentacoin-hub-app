import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientRegisterByInviteComponent } from './patient-register-by-invite.component';

describe('PatientRegisterByInviteComponent', () => {
  let component: PatientRegisterByInviteComponent;
  let fixture: ComponentFixture<PatientRegisterByInviteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientRegisterByInviteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientRegisterByInviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
