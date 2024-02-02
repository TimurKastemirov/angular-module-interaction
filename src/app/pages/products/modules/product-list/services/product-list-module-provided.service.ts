import { Injectable } from '@angular/core';

console.log('ProductListModuleProvidedService file\n=======================');
@Injectable()
export class ProductListModuleProvidedService {

  constructor() { }

  log() {
    console.log('ProductListModuleProvidedService');
  }
}
