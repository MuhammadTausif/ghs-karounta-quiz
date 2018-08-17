import { TestBed, inject } from '@angular/core/testing';

import { StudentClassService } from './student-class.service';

describe('StudentClassService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentClassService]
    });
  });

  it('should be created', inject([StudentClassService], (service: StudentClassService) => {
    expect(service).toBeTruthy();
  }));
});
