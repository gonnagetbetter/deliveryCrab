'use strict';

const dataBase = require('../DataBase/DataBase.js')

class Truck {
  constructor(capacity, velocity) {
    this.capacity = capacity;
    this.velocity = velocity;
    this.status = "undefined"; 
    this.route = [];
    this.parcelStorage = [];
    this.loaded = this.parcelStorage.length;
  }

  addParcel(id) {
    if (!this.parcelStorage.includes(id) && this.parcelStorage.length < this.capacity) {
      if (this.parcelStorage.length === 0) {
        const parcel = dataBase.parcelsData.get(id);
        this.route = parcel.route.slice(0, 2);
      }
      this.parcelStorage.push(id);
    }
  }

  empty(destination) {
    this.route = []; //deletes truck's route
    destination.parcels = [...this.parcelStorage];
  }
}

module.exports = Truck;
