import { TestBed } from '@angular/core/testing';

import { ProductDetailsModuleProvidedService } from './product-details-module-provided.service';

describe('ProductDetailsModuleProvidedService', () => {
  let service: ProductDetailsModuleProvidedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductDetailsModuleProvidedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
