import { TestBed } from '@angular/core/testing';

import { FeatureRootProvidedService } from './feature-root-provided.service';

describe('FeatureRootProvidedService', () => {
  let service: FeatureRootProvidedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeatureRootProvidedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
