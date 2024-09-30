import { TestBed } from '@angular/core/testing';

import { SendToHeaderService } from './send-to-header.service';

describe('SendToHeaderService', () => {
  let service: SendToHeaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendToHeaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
