'use strict';

class IdProcessor {
  constructor() {
    this.alphabet = [
      'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
      'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];
    this.nextTruck = 'a000';
    this.nextHub = 'a000';
    this.nextStorage = 'a00';
    this.nextParsel = 'aa000';
    this.idIncrement = (id) => {
      const increment = (array, index = array.length - 1) => {
        if (array[index] === 'z') {
          array[index] = 'a';
          index--;
          increment(array, index);
        } else {
          array[index] = this.alphabet[this.alphabet.indexOf(array[index]) + 1];
        }
      };
      const letters = [];
      let numbers = '';
      for (const symbol of id) {
        if (this.alphabet.includes(symbol)) {
          letters.push(symbol);
        } else {
          numbers += symbol;
        }
      }
      const numbersLength = numbers.length;
      if (numbers === '9'.repeat(numbersLength)) {
        numbers = '0'.repeat(numbersLength);
        increment(letters);
      } else {
        numbers++;
        while (numbers.toString().length < numbersLength) {
          numbers = '0' + numbers;
        }
      }
      const result = letters.join('') + numbers;
      return result;
    };
  }

  generateParselId() {
    const result = this.nextParsel;
    this.nextParsel = this.idIncrement(this.nextParsel);
    return result;
  }

  generateTruckId() {
    const result = this.nextTruck;
    this.nextTruck = this.idIncrement(this.nextTruck);
    return result;
  }

  generateDepotId(type, hub = '') { //type: 0 for regular storage, 1 for hub; hub takes hubId in form of string
    let result;
    if (type === 0) {
      result = 'r' + hub.substring(1) + this.nextStorage;
      this.nextStorage = this.idIncrement(this.nextStorage);
    } else if (type === 1) {
      result = 'h' + this.nextHub;
      this.nextHub = this.idIncrement(this.nextHub);
    } else {
      result = 'error';   //add proper error handling
      console.log('Invalid arguments');
    }
    return result;
  }
}

const idMaker = new IdProcessor();

module.exports = idMaker;
