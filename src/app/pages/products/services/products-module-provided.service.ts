import { Injectable } from '@angular/core';

console.log('ProductsModuleProvidedService file\n===============================');
@Injectable()
export class ProductsModuleProvidedService {

  constructor() { }

  log(): void {
    console.log('ProductsModuleProvidedService');
  }
}
