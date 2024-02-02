import { Injectable } from '@angular/core';

console.log('ProductDetailsModuleProvidedService file\n==============================');
@Injectable()
export class ProductDetailsModuleProvidedService {

  constructor() { }

  log() {
    console.log('ProductDetailsModuleProvidedService');
  }
}
