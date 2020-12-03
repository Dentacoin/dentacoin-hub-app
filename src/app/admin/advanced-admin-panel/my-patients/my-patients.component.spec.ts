import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPatientsComponent } from './my-patients.component';

describe('MyPatientsComponent', () => {
  let component: MyPatientsComponent;
  let fixture: ComponentFixture<MyPatientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPatientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
