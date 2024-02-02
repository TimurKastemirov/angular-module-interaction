import { Injectable } from '@angular/core';

console.log('ProductListRootProvidedService file\n=======================');
@Injectable({
  providedIn: 'root'
})
export class ProductListRootProvidedService {

  constructor() { }

  log() {
    console.log('ProductListRootProvidedService');
  }
}
