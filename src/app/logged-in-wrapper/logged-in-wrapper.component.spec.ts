import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedInWrapperComponent } from './logged-in-wrapper.component';

describe('LoggedInWrapperComponent', () => {
  let component: LoggedInWrapperComponent;
  let fixture: ComponentFixture<LoggedInWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoggedInWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedInWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
