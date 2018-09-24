import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPracticeComponent } from './user-practice.component';

describe('UserPracticeComponent', () => {
  let component: UserPracticeComponent;
  let fixture: ComponentFixture<UserPracticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPracticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
