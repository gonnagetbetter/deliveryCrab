'use strict';

const Truck = require('./components/class_Truck');
const Storage = require('./components/class_Storage');
const idMaker = require('./ID_creator/ID_creator');

const randInt = (min, max) => Math.random() * (max - min) + min;
const CAPACITY = 1500; //standard truck capacity
const VELOCITY = 60; //standard truck velocity

class Main {
  constructor() {
    this.trucks = new Map;
    this.parcels = new Map;
    this.depots = new Map;
  }

  createDepot(name, x, y, type, hub = '') { //type - 0 for regular storage, 1 for hub. Hub - connected hub ID; don`t use if creating a hub 
    const ID = idMaker.generateDepotId(type, hub);
    const depot = new Storage(x, y, name);
    this.depots.set(ID, depot);
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
}

const deliverySystem = new Main;

module.exports = deliverySystem;
