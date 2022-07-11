import { TestBed } from '@angular/core/testing';

import { TokenCheckingService } from './token-checking.service';

describe('TokenCheckingService', () => {
  let service: TokenCheckingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenCheckingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
