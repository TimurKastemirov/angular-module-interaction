import { Injectable } from '@angular/core';

console.log('ProductListRootProvidedService file\n==============================');
@Injectable({
  providedIn: 'root'
})
export class ProductDetailsRootProvidedService {

  constructor() { }

  log() {
    console.log('ProductDetailsRootProvidedService');
  }
}
