import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPracticeComponent } from './register-practice.component';

describe('RegisterPracticeComponent', () => {
  let component: RegisterPracticeComponent;
  let fixture: ComponentFixture<RegisterPracticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterPracticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
