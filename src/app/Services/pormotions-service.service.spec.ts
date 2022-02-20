import { TestBed } from '@angular/core/testing';

import { PormotionsServiceService } from './pormotions-service.service';

describe('PormotionsServiceService', () => {
  let service: PormotionsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PormotionsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
