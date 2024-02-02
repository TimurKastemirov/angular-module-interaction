import { TestBed } from '@angular/core/testing';

import { CoreModuleProvidedService } from './core-module-provided.service';

describe('CoreModuleProvidedService', () => {
  let service: CoreModuleProvidedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoreModuleProvidedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
