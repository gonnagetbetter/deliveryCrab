'use strict';

const Truck = require('./components/class_Truck');
const Storage = require('./components/class_Storage');
const idMaker = require('./components/ID_creator');

const randInt = (min, max) => Math.random() * (max - min) + min;
const CAPACITY = 1500; //standard truck capacity
const VELOCITY = 60; //standard truck velocity

class Main {
  constructor() {
    this.trucks = new Map();
    this.parcels = new Map();
    this.depots = new Map();
  }

  createDepot(name, x, y, type, hub = '') {
    //type - 0 for regular storage, 1 for hub.
    //Hub - connected hub ID; don`t use if creating a hub
    const ID = idMaker.generateDepotId(type, hub);
    const depot = new Storage(x, y, name);
    this.depots.set(ID, depot);
  }

  spawnTrucks(trucksMax) {
    for (const depotId of this.depots.keys()) {
      const depot = this.depots.get(depotId);
      const quantity = randInt(0, trucksMax);
      for (let i = 0; i < quantity; i++) {
        const truck = new Truck(CAPACITY, VELOCITY, 'some dest');
        const id = idMaker.generateTruckId();
        depot.addTruck(id);
        this.trucks.set(id, truck);
      }
    }
  }

  moveTruck(storage, truckId) {
    const depot = this.depots[storage];
    depot.removeTruck(truckId);
    const truck = this.trucks[truckId];
    truck.deleteRoute();
    truck.parcelStorage.shift();
    // add truck to the destination point...
    truck.empty();
  }
}
const deliverySystem = new Main();

deliverySystem.createDepot('first', 1, 1, 0);
deliverySystem.spawnTrucks(3);
// deliverySystem.moveTruck('ra00', 'a000');

console.log(deliverySystem.depots);
console.log(deliverySystem.trucks);


module.exports = deliverySystem;
