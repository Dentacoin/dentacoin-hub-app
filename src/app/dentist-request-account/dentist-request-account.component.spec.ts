import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DentistRequestAccountComponent } from './dentist-request-account.component';

describe('DentistRequestAccountComponent', () => {
  let component: DentistRequestAccountComponent;
  let fixture: ComponentFixture<DentistRequestAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DentistRequestAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DentistRequestAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
