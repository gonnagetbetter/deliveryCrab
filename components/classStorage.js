'use strict';

import { dataBase } from '../database/dataBase.js'

class Storage {
  constructor(xPos, yPos, name) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.name = name;
    this.trucks = []; //conatains trucks` IDs
    this.parcels = []; //contains parcels` IDs; works as a stack
    this.pathLength = 0;
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
      console.log('parcel added to storage');
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
    console.log('loading parcel');
    const parcel = dataBase.parcelsData.get(id);
    let suitableTruck;
    let suitableTruckId;
    for (const currentId of this.trucks) {
      const currentTruck = dataBase.trucksData.get(currentId);
      if (!suitableTruck && currentTruck.parcelStorage.length === 0) {
        suitableTruck = currentTruck;
        suitableTruckId = currentId;
      }
      if (parcel.route[1] === currentTruck.route[1]) {
        suitableTruck = currentTruck;
        suitableTruckId = currentId;
      }
    }
    console.log(`truck chosen: ${suitableTruck}`);
    if (suitableTruck) {  //
      console.log('this isn`t an issue');
      suitableTruck.addParcel(id);
      this.parcels.splice(id);
      if (suitableTruck.status === 'ready') {
        suitableTruck.status = 'not ready';
        console.log('truck ready to go');
        this.moveTruck(suitableTruckId);
      }
    }
  }

  moveTruck(truckId) {
    const truck = dataBase.trucksData.get(truckId);
    const destinationId = truck.route[1];
    const destination = dataBase.depotsData.get(destinationId);
    this.removeTruck(truckId);
    const tickToSeconds = 1000;
    const time = truck.pathLength / truck.velocity * tickToSeconds;
    truck.status = 'En route';
    setTimeout(() => {
      destination.trucks.push(truckId);
      truck.status = 'Waiting';
      truck.unload(destinationId);
      console.log(`truck ${truckId} moved to ${destinationId}`); //for testing
      const destinationParcels = destination.parcels.slice();
      for (const parcelId of destinationParcels.reverse()) {
        destination.loadParcel(parcelId);
      }
    }, time);
    console.log('truck moved');
  }
}

export { Storage };
