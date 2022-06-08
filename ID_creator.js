'use strict';

const idIncrement = require('./increment.js');

class idProcessor {
  constructor() {
    this.nextTruck = 'a000';
    this.nextHub = 'a000';
    this.nextStorage = 'a00';
    this.nextParsel = 'aa000'; 
  }

  generateParselId() {
    const result = this.nextParsel;
    this.nextParsel = idIncrement(this.nextParsel);
    return result;
  }

  generateTruckId() {
    const result = this.nextTruck;
    this.nextTruck = idIncrement(this.nextTruck);
    return result;
  }

  generateDepotId(type, hub = '') { //type: 0 for regular storage, 1 for hub; hub takes hubId in form of string
    let result;
    if (type == 0) {
      result = 'r' + hub.substring(1) + this.nextStorage;
      this.nextStorage = idIncrement(this.nextStorage); 
    } else if (type == 1) {
      result = 'h' + this.nextHub;
      this.nextHub = idIncrement(this.nextHub);
    } else {
      result = 'error';   //add proper error handling
      console.log('Invalid arguments');
    }
    return result;
  }
}

let idMaker = new idProcessor();
console.log(idMaker.generateParselId());
console.log(idMaker.generateParselId());
console.log(idMaker.generateDepotId(0, 'ha135'));
console.log(idMaker.generateDepotId(1));

module.exports = { idProcessor };