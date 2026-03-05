import { TestBed } from '@angular/core/testing';

import { FutureAi } from './future-ai';

describe('FutureAi', () => {
  let service: FutureAi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FutureAi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
