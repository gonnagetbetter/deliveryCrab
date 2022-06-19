'use strict';

const dataBase = require('../DataBase/DataBase.js');

class Storage {
  constructor(xPos, yPos, name) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.name = name;
    this.trucks = []; //conatains trucks` IDs
    this.parcels = []; //contains parcels` IDs; works as a stack
  }

  addTruck(id) {
    if (!this.trucks.includes(id)) {
      this.trucks.push(id);
    } else {
      console.log('This truck is already in this depot'); 
      //should add proper error handling
    }
  }

  removeTruck(id) {
    const position = this.trucks.indexOf(id);
    console.log(position);
    if (position !== -1) {
      this.trucks.splice(position, 1);
    } else {
      console.log('This truck does not exist or is not in this depot'); 
      //should add proper error handling
    }
  }

  addParcel(id) {
    if (!this.parcels.includes(id)) {
      this.parcels.unshift(id);
    } else {
      console.log('This parcel is already in this storage'); 
      //should add proper error handling
    }
  }

  removeParcel() {
    const parcel = this.parcels.pop();
    if (parcel) {
      return parcel;
    } else {
      console.log('This storage is empty!'); //should add proper error handling
    }
  }

  loadParcel(id) {
    const parcel = dataBase.parcelsData.get(id);
    let suitableTruck;
    let suitableTruckId;
    for (const currentId of this.trucks) {
      const currentTruck = dataBase.trucksData.get(currentId);
      if (!suitableTruck && currentTruck.parcelStorage.length === 0) {
        suitableTruck = currentTruck;
        suitableTruckId = currentId;
      }
      if (parcel.route[1] == currentTruck.route[1]) {
        suitableTruck = currentTruck;
        suitableTruckId = currentId;
      }
    }
    if (suitableTruck) {
      suitableTruck.addParcel(id);
      this.parcels.splice(id);
      if (suitableTruck.status === 'ready') {
        suitableTruck.status = 'not ready';
        this.moveTruck(suitableTruckId);
      }
    }
  }

  moveTruck(truckID) {
    const truck = dataBase.trucksData.get(truckID);
    const destinationID = truck.route[1];
    const destination = dataBase.depotsData.get(destinationID);
    this.removeTruck(truckID);
    destination.trucks.push(truckID);
    truck.unload(destinationID);
    console.log(`truck ${truckID} moved to ${destinationID}`);
  }
}

module.exports = Storage;
