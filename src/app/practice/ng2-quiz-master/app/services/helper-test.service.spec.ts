import { TestBed, inject } from '@angular/core/testing';

import { HelperTestService } from './helper-test.service';

describe('HelperTestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HelperTestService]
    });
  });

  it('should be created', inject([HelperTestService], (service: HelperTestService) => {
    expect(service).toBeTruthy();
  }));
});
