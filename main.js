'use strict';

const Truck = require('./components/class_Truck');
const Storage = require('./components/class_Storage');
const idMaker = require('./components/ID_creator');
const Parcel = require('./components/class_Parcel.js');

const randInt = (min, max) => Math.random() * (max - min) + min;
const CAPACITY = 1500; //standard truck capacity
const VELOCITY = 60; //standard truck velocity

class Main {
  constructor() {
    this.trucks = new Map();
    this.parcels = new Map();
    this.depots = new Map();
  }

  createDepot(name, x, y, type, hub = '') { //type - 0 for regular storage, 1 for hub. Hub - connected hub ID; don`t use if creating a hub 
    const ID = idMaker.generateDepotId(type, hub);
    const depot = new Storage(x, y, name);
    this.depots.set(ID, depot);
  }

  createParcel(origin, destination) { //origin and destination must contain IDs
    const ID = idMaker.generateParcelId();
    const newParcel = new Parcel(origin, destination);
    this.parcels.set(ID, newParcel);
  }

  spawnTrucks(trucksMax) {
    for (let depotId of this.depots.keys()) {
      let depot = this.depots.get(depotId);
      const quantity = randInt(0, trucksMax);
      for (let i = 0; i < quantity; i++) {
        const truck = new Truck(CAPACITY, VELOCITY, 'some dest');
        const id = idMaker.generateTruckId();
        depot.addTruck(id);
        this.trucks.set(id, truck);
      }
    }
  }

  moveTruck(storageID, truckID, destinationID) {
    const depot = this.depots.get(storageID);
    const truck = this.trucks.get(truckID);
    const destination = this.depots.get(destinationID);
    depot.removeTruck(truckID);
    destination.trucks.push(truckID);
    truck.empty(destination);
  }


}

const deliverySystem = new Main();

deliverySystem.createDepot('first', 1, 1, 0);
deliverySystem.spawnTrucks(5);
deliverySystem.createDepot('second', 1, 1, 1);
deliverySystem.moveTruck('ra00', 'a000', 'ha000');

console.log(deliverySystem.depots);
console.log(deliverySystem.trucks);

module.exports = deliverySystem;
