import { TestBed } from '@angular/core/testing';

import { ProductsModuleProvidedService } from './products-module-provided.service';

describe('ProductsModuleProvidedService', () => {
  let service: ProductsModuleProvidedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsModuleProvidedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
