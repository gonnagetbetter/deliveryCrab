'use strict';

class Truck {
  constructor(capacity, velocity) {
    this.capacity = capacity;
    this.velocity = velocity;
    this.status = "undef"; 
    this.route = [];
    this.loaded = 0; //how much cargo there is in a truck
    this.parcelStorage = [];
  }
  
  getStatus() {
    return this.status; 
  }

  setStatus(value) {
    this.status = value;
  }

  addParcel(id) {
    if (!this.parcelStorage.includes(id)) {
      this.parcelStorage.push(id);
    } else {
      console.log('This parsel is already in this truck'); //should add proper error handling
    }
  }

  empty() {
    this.parcelStorage = [];
  }
}
