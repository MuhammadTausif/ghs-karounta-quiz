import { TestBed, inject } from '@angular/core/testing';

import { MyLoginService } from './my-login.service';

describe('MyLoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyLoginService]
    });
  });

  it('should be created', inject([MyLoginService], (service: MyLoginService) => {
    expect(service).toBeTruthy();
  }));
});
