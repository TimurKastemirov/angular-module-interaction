import { Injectable } from '@angular/core';

console.log('ProductsRootProvidedService file\n===============================');
@Injectable({
  providedIn: 'root'
})
export class ProductsRootProvidedService {

  constructor() { }

  log(): void {
    console.log('ProductsRootProvidedService');
  }
}
