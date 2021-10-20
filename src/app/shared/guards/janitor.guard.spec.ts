import { TestBed } from '@angular/core/testing';

import { JanitorGuard } from './janitor.guard';

describe('JanitorGuard', () => {
  let guard: JanitorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(JanitorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
