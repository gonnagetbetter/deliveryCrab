'use strict';

const database = require('../DataBase/DataBase.js')

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
    const percent = this.parcelStorage.length/this.capacity;
    console.log(percent);
    if (!this.parcelStorage.includes(id) && this.parcelStorage.length < this.capacity) {
      if (this.parcelStorage.length === 0) {
        const parcel = database.parcels[id];
        this.route = parcel.route.slice(0, 2);
      }
      this.parcelStorage.push(id);
      if ( percent >= 0.9) {
        this.status = (percent == 1) ? "ready100": "ready90";/*moveTruck()*///doesnt work with 1
      };
    } else {
      console.log(`Parsel "${id}" is already in a truck or there is no space`); //should add proper error handling
    }
  }

  empty(destination) {
    this.route = []; //deletes truck's route
    destination.parcels = [...this.parcelStorage];
  }
}

module.exports = Truck;
