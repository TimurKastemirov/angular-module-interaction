import { TestBed } from '@angular/core/testing';

import { FeatureModuleProvidedService } from './feature-module-provided.service';

describe('FeatureModuleProvidedService', () => {
  let service: FeatureModuleProvidedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeatureModuleProvidedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
