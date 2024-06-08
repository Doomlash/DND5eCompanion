import { Injectable } from '@angular/core';
import { Random, browserCrypto, nodeCrypto } from 'random-js';

@Injectable({
  providedIn: 'root'
})
export class DiceRollerService {

  random = new Random(nodeCrypto);

  constructor() { }

  rollD6(){
    const result = this.random.die(6);
    debugger;
    return result;
  }
}
