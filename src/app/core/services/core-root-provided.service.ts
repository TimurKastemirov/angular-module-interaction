import { Injectable } from '@angular/core';

console.log('CoreRootProvidedService file\n==============================');
@Injectable({
  providedIn: 'root'
})
export class CoreRootProvidedService {

  constructor() { }

  log(): void {
    console.log('CoreRootProvidedService');
  }
}
