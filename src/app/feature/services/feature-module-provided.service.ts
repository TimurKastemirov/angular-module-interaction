import { Injectable } from '@angular/core';

console.log('FeatureModuleProvidedService file\n==============================');
@Injectable()
export class FeatureModuleProvidedService {

  constructor() { }

  log(): void {
    console.log('FeatureModuleProvidedService');
  }
}
