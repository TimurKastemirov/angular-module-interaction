import { TestBed } from '@angular/core/testing';

import { ProductsRootProvidedService } from './products-root-provided.service';

describe('ProductsRootProvidedService', () => {
  let service: ProductsRootProvidedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsRootProvidedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
