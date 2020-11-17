import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotLoggedInWrapperComponent } from './not-logged-in-wrapper.component';

describe('NotLoggedInWrapperComponent', () => {
  let component: NotLoggedInWrapperComponent;
  let fixture: ComponentFixture<NotLoggedInWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotLoggedInWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotLoggedInWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
