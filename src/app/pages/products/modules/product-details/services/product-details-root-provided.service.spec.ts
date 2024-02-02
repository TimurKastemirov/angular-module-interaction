import { TestBed } from '@angular/core/testing';

import { ProductDetailsRootProvidedService } from './product-details-root-provided.service';

describe('ProductDetailsRootProvidedService', () => {
  let service: ProductDetailsRootProvidedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductDetailsRootProvidedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
