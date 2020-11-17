import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicAdminPanelComponent } from './basic-admin-panel.component';

describe('BasicAdminPanelComponent', () => {
  let component: BasicAdminPanelComponent;
  let fixture: ComponentFixture<BasicAdminPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicAdminPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicAdminPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
