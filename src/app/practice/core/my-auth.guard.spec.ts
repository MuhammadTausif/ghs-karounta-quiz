import { TestBed, async, inject } from '@angular/core/testing';

import { MyAuthGuard } from './my-auth.guard';

describe('MyAuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyAuthGuard]
    });
  });

  it('should ...', inject([MyAuthGuard], (guard: MyAuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
