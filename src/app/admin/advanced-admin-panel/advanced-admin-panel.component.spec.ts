import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedAdminPanelComponent } from './advanced-admin-panel.component';

describe('AdvancedAdminPanelComponent', () => {
  let component: AdvancedAdminPanelComponent;
  let fixture: ComponentFixture<AdvancedAdminPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedAdminPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedAdminPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
