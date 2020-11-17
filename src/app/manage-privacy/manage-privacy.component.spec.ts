import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePrivacyComponent } from './manage-privacy.component';

describe('ManagePrivacyComponent', () => {
  let component: ManagePrivacyComponent;
  let fixture: ComponentFixture<ManagePrivacyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagePrivacyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePrivacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
