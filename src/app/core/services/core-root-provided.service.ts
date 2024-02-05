import { Injectable } from '@angular/core';

console.log('CoreRootProvidedService file\n==============================');
@Injectable({
  providedIn: 'root'
})
export class CoreRootProvidedService {

  constructor() {
    console.log('CoreRootProvidedService instance created');
  }

  log(): void {
    console.log('CoreRootProvidedService');
  }
}
