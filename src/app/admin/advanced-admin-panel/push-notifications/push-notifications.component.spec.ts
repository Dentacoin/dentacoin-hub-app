import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PushNotificationsComponent } from './push-notifications.component';

describe('PushNotificationsComponent', () => {
  let component: PushNotificationsComponent;
  let fixture: ComponentFixture<PushNotificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PushNotificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PushNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
