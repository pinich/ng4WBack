import { TestBed, inject } from '@angular/core/testing';

import { SrvMyService } from './srv-my.service';

describe('SrvMyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SrvMyService]
    });
  });

  it('should be created', inject([SrvMyService], (service: SrvMyService) => {
    expect(service).toBeTruthy();
  }));
});
