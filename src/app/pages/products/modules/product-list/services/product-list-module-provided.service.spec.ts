import { TestBed } from '@angular/core/testing';

import { ProductListModuleProvidedService } from './product-list-module-provided.service';

describe('ProductListModuleProvidedService', () => {
  let service: ProductListModuleProvidedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductListModuleProvidedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
