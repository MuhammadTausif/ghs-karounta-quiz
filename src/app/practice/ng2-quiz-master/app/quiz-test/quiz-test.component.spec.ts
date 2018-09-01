import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizTestComponent } from './quiz-test.component';

describe('QuizTestComponent', () => {
  let component: QuizTestComponent;
  let fixture: ComponentFixture<QuizTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
