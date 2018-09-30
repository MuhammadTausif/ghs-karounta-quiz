import { TestBed, inject } from '@angular/core/testing';

import { RegisterStudentService } from './register-student.service';

describe('RegisterStudentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegisterStudentService]
    });
  });

  it('should be created', inject([RegisterStudentService], (service: RegisterStudentService) => {
    expect(service).toBeTruthy();
  }));
});
