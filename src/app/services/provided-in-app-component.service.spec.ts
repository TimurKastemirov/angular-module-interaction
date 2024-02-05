import { TestBed } from '@angular/core/testing';

import { ProvidedInAppComponentService } from './provided-in-app-component.service';

describe('ProvidedInAppComponentService', () => {
  let service: ProvidedInAppComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProvidedInAppComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
