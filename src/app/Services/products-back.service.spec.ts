import { TestBed } from '@angular/core/testing';

import { ProductsBackService } from './products-back.service';

describe('ProductsBackService', () => {
  let service: ProductsBackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsBackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
