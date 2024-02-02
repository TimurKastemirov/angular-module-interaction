import { Injectable } from '@angular/core';

console.log('CoreModuleProvidedService file\n==============================');
@Injectable()
export class CoreModuleProvidedService {

  constructor() { }

  log(): void {
    console.log('CoreModuleProvidedService');
  }
}
