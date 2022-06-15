'use strict';

const database = require('../DataBase/DataBase.js')

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
      if (this.parcelStorage.length === 0) {
        const parcel = database.parcels[id];
        this.route = parcel.route.slice(0, 2);
      }
      this.parcelStorage.push(id);
    } else {
      console.log('This parsel is already in this truck'); //should add proper error handling
    }
  }

  deleteRoute() {
    this.route = [];
  }
  
  empty() {
    this.parcelStorage = [];
  }
}

module.exports = Truck;
