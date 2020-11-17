import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontEndLanguageComponent } from './front-end-language.component';

describe('FrontEndLanguageComponent', () => {
  let component: FrontEndLanguageComponent;
  let fixture: ComponentFixture<FrontEndLanguageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontEndLanguageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontEndLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
