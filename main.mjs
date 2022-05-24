'use strict';

import { Truck } from './class_Truck.mjs';
import { Storage } from './class_Storage.mjs';
import { idMaker } from './ID_creator.mjs';

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

  spawnTrucks(trucksMax) { //puts 0-trucksMax trucks in every created depot
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

export const deliverySystem = new Main;

deliverySystem.createDepot('Kyiv', 10, 10, 1);
deliverySystem.createDepot('Lviv', -100, 810, 1);
deliverySystem.createDepot('Brovary', 30, 210, 0, 'ha000');
deliverySystem.spawnTrucks(10);
console.log(deliverySystem.depots.get('ha000').trucks);
console.log(deliverySystem.depots.get('ha001').trucks);
console.log(deliverySystem.depots);