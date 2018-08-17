import { TestBed, inject } from '@angular/core/testing';

import { ClassRoomService } from './class-room.service';

describe('ClassRoomService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClassRoomService]
    });
  });

  it('should be created', inject([ClassRoomService], (service: ClassRoomService) => {
    expect(service).toBeTruthy();
  }));
});
