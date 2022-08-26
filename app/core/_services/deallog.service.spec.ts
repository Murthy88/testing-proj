import { TestBed } from '@angular/core/testing';

import { DeallogService } from './deallog.service';

describe('DeallogService', () => {
  let service: DeallogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeallogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
