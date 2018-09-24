import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPracticeComponent } from './login-practice.component';

describe('LoginPracticeComponent', () => {
  let component: LoginPracticeComponent;
  let fixture: ComponentFixture<LoginPracticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPracticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
