'use strict';

import { Parcel } from "./components/classParcel.js";
import { Truck } from "./components/classTruck.js";
import { Storage } from "./components/classStorage.js";
import { idMaker } from './components/idCreator.js';
import { dataBase } from "./database/dataBase.js";
import { CAPACITY, VELOCITY } from "./config.js";

const randInt = (min, max) => Math.random() * (max - min) + min;

class Main {
  createDepot(name, x, y, type, hub = '') {
    //type - 0 for regular storage, 1 for hub. Hub - connected hub ID;
    //don`t use if creating a hub
    const ID = idMaker.generateDepotId(type, hub);
    const depot = new Storage(x, y, name);
    dataBase.depotsData.set(ID, depot);
  }

  createParcel(origin, destination) { //origin and destination must contain IDs
    console.log(dataBase.trucksData);
    console.log("created");
    const ID = idMaker.generateParcelId();
    const newParcel = new Parcel(origin, destination);
    newParcel.createRoute();
    dataBase.parcelsData.set(ID, newParcel);
    const originStorage = dataBase.depotsData.get(origin);
    originStorage.addParcel(ID);
    originStorage.loadParcel(ID);
    return ID;
  }

  spawnTrucks(trucksMax) {
    for (const depotId of dataBase.depotsData.keys()) {
      const depot = dataBase.depotsData.get(depotId);
      const quantity = randInt(0, trucksMax);
      for (let i = 0; i < 1; i++) {
        //it now spawns one truck in every depot. i < quantity - release version
        const truck = new Truck(CAPACITY, VELOCITY, 'some dest');
        const id = idMaker.generateTruckId();
        depot.addTruck(id);
        dataBase.trucksData.set(id, truck);
      }
    }
  }
}

const deliverySystem = new Main();

export { deliverySystem }
