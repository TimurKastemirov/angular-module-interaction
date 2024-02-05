import { Injectable } from '@angular/core';

console.log('ProvidedInAppComponentService file\n=========================');
@Injectable()
export class ProvidedInAppComponentService {

  constructor() { }

  log() {
    console.log('ProvidedInAppComponentService');
  }
}
