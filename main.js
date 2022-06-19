'use strict';

const Parcel = require('./components/class_Parcel.js');
const Truck = require('./components/class_Truck');
const Storage = require('./components/class_Storage');
const idMaker = require('./components/ID_creator');
const dataBase = require('./DataBase/DataBase.js');

const randInt = (min, max) => Math.random() * (max - min) + min;
const CAPACITY = 2; //standard truck capacity
const VELOCITY = 60; //standard truck velocity

class Main {
  createDepot(name, x, y, type, hub = '') {
    //type - 0 for regular storage, 1 for hub. Hub - connected hub ID;
    //don`t use if creating a hub
    const ID = idMaker.generateDepotId(type, hub);
    const depot = new Storage(x, y, name);
    dataBase.depotsData.set(ID, depot);
  }

  createParcel(origin, destination) { //origin and destination must contain IDs
    const ID = idMaker.generateParcelId();
    const newParcel = new Parcel(origin, destination);
    newParcel.createRoute();
    dataBase.parcelsData.set(ID, newParcel);
    const originStorage = dataBase.depotsData.get(origin);
    originStorage.addParcel(ID);
    originStorage.loadParcel(ID);
  }

  spawnTrucks(trucksMax) {
    for (const depotId of dataBase.depotsData.keys()) {
      const depot = dataBase.depotsData.get(depotId);
      const quantity = randInt(0, trucksMax);
      for (let i = 0; i < quantity; i++) {
        const truck = new Truck(CAPACITY, VELOCITY, 'some dest');
        const id = idMaker.generateTruckId();
        depot.addTruck(id);
        dataBase.trucksData.set(id, truck);
      }
    }
  }
}

const deliverySystem = new Main();

module.exports = deliverySystem;
