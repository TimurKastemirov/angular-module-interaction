import { Injectable } from '@angular/core';

console.log('%c CoreRootProvidedService file', 'color: red; font-size: 18px; font-weight: bold');
@Injectable({
  providedIn: 'root'
})
export class CoreRootProvidedService {

  constructor() {
    console.log('%c CoreRootProvidedService instance created', 'color: red; font-size: 15px');
  }

  log(): void {
    console.log('%c CoreRootProvidedService.log', 'color: red');
  }
}
