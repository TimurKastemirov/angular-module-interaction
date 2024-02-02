import { Injectable } from '@angular/core';

console.log('FeatureRootProvidedService file \n==============================');
@Injectable({
  providedIn: 'root'
})
export class FeatureRootProvidedService {

  constructor() { }

  log(): void {
    console.log('FeatureRootProvidedService');
  }
}
