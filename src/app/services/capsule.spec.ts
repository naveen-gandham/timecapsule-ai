import { TestBed } from '@angular/core/testing';

import { Capsule } from './capsule';

describe('Capsule', () => {
  let service: Capsule;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Capsule);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
