'use strict';

const dataBase = require('../DataBase/DataBase.js');

class Truck {
  constructor(capacity, velocity) {
    this.capacity = capacity;
    this.velocity = velocity;
    this.status = 'undefined';
    this.route = [];
    this.parcelStorage = [];
  }

  addParcel(id) {
    if (!this.parcelStorage.includes(id) && this.parcelStorage.length < this.capacity) {
      if (this.parcelStorage.length === 0) {
        const parcel = dataBase.parcelsData.get(id);
        this.route = parcel.route.slice(0, 2);
      }
      this.parcelStorage.push(id);
      if (this.parcelStorage.length === this.capacity) {
        this.status = 'ready';
      }
    }
  }

  unload(destination) {
    const destinationStorage = dataBase.depotsData.get(destination);
    this.route = []; //deletes truck's route
    for (const parcel of this.parcelStorage) {
      destinationStorage.addParcel(parcel);
    }
    this.parcelStorage.length = 0;
  }
}

module.exports = Truck;
