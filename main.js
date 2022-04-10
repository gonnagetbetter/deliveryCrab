'use strict';

import Truck from 'class_Truck.js';
import Storage from 'class_Storage.js';

const randInt = (min, max) => Math.random() * (max - min) + min;

class Main {
  constructor() {
    this.trucks = new Map;
    this.parcels = new Map;
    this.depots = new Map;
  }

  createDepot(name, size, hub, x, y) { //size - hub/not hub, hub - connected hub. Both used to create proper ID
    const ID = 'aboba' //add ID creator
    const depot = new Storage(x, y, name);
    this.depots.set(ID, depot);
  }

  spawnTrucks(trucksMax) {
    for (depot in depots) {
      //put random from 0 to trucksCeiling trucks in every depot
    }
  }
    //hesh cities
    //hesh trucks
    //hesh parcels

}

const deliverySystem = new Main;