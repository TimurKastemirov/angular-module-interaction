import { TestBed } from '@angular/core/testing';

import { ProductListRootProvidedService } from './product-list-root-provided.service';

describe('ProductListRootProvidedService', () => {
  let service: ProductListRootProvidedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductListRootProvidedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
