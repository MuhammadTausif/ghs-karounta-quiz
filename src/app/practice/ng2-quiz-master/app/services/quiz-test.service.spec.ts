import { TestBed, inject } from '@angular/core/testing';

import { QuizTestService } from './quiz-test.service';

describe('QuizTestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuizTestService]
    });
  });

  it('should be created', inject([QuizTestService], (service: QuizTestService) => {
    expect(service).toBeTruthy();
  }));
});
