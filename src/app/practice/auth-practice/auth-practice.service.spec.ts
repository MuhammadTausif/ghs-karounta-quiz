import { TestBed, inject } from '@angular/core/testing';

import { AuthPracticeService } from './auth-practice.service';

describe('AuthPracticeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthPracticeService]
    });
  });

  it('should be created', inject([AuthPracticeService], (service: AuthPracticeService) => {
    expect(service).toBeTruthy();
  }));
});
