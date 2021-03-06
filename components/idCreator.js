'use strict';

class IdProcessor {
  constructor() {
    this.nextTruck = 'a000';
    this.nextHub = 'a000';
    this.nextStorage = 'a00';
    this.nextParsel = 'aa000';
  }

  idIncrement(array, index = array.length - 1) {
    let nextSymbol;
    if (array[index] === 'z') {
      nextSymbol = 'a';
      array.splice(index, 1, nextSymbol);
      this.idIncrement(array, index - 1);
    } else if (array[index] === '9') {
      nextSymbol = '0';
      array.splice(index, 1, nextSymbol);
      this.idIncrement(array, index - 1);
    } else {
      nextSymbol = String.fromCharCode(array[index].charCodeAt(0) + 1);
      array.splice(index, 1, nextSymbol);
    };
    return array.join('');
  }

  generateParcelId() {
    const result = this.nextParsel;
    this.nextParsel = this.idIncrement(Array.from(this.nextParsel));
    return result;
  }

  generateTruckId() {
    const result = this.nextTruck;
    this.nextTruck = this.idIncrement(Array.from(this.nextTruck));
    return result;
  }

  generateDepotId(type, hub = '') {
    //type: 0 for regular storage, 1 for hub; hub takes hubId in form of string
    let result;
    if (type === 0) {
      result = 'r' + hub.substring(0) + this.nextStorage;
      this.nextStorage = this.idIncrement(Array.from(this.nextStorage));
    } else if (type === 1) {
      result = 'h' + this.nextHub;
      this.nextHub = this.idIncrement(Array.from(this.nextHub));
    } else {
      result = 'error';   //add proper error handling
      console.log('Invalid arguments');
    }
    return result;
  }
}

const idMaker = new IdProcessor();

export { idMaker };
