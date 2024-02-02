import { TestBed } from '@angular/core/testing';

import { CoreRootProvidedService } from './core-root-provided.service';

describe('CoreRootProvidedService', () => {
  let service: CoreRootProvidedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoreRootProvidedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
