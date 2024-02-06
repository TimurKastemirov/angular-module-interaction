import { Injectable } from '@angular/core';

console.log('%c CoreModuleProvidedService file', 'color: red; font-size: 18px; font-weight: bold');
@Injectable()
export class CoreModuleProvidedService {

  constructor() {
    console.log('%c CoreModuleProvidedService instance created', 'color: red; font-size: 15px');
  }

  log(): void {
    console.log('%c CoreModuleProvidedService.log', 'color: red');
  }
}
