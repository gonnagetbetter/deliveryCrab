'use strict';

import { dataBase } from '../DataBase/DataBase.js'

class Truck {
  constructor(capacity, velocity) {
    this.capacity = capacity;
    this.velocity = velocity;
    this.status = 'undefined';
    this.route = [];
    this.parcelStorage = [];
    this.pathLength = 0;
  }

  addParcel(id) {
    if (!this.parcelStorage.includes(id) && this.parcelStorage.length < this.capacity) {
      if (this.parcelStorage.length === 0) {
        const parcel = dataBase.parcelsData.get(id);
        this.route = parcel.route.slice(0, 2);
        this.calculatePathLenth(id);
      }
      this.parcelStorage.push(id);
      if (this.parcelStorage.length === this.capacity) {
        this.status = 'ready';
      }
      console.log('parcel added to truck');
    }
  }

  unload(destination) {
    const destinationStorage = dataBase.depotsData.get(destination);
    this.route.length = 0; //deletes truck's route
    for (const parcelId of this.parcelStorage) {
      const parcel = dataBase.parcelsData.get(parcelId);
      parcel.route.shift();
      destinationStorage.addParcel(parcelId);
      if (parcel.route.length === 1) {
        const deliveredParcelIndex = destinationStorage.parcels.indexOf(parcelId);
        destinationStorage.parcels.splice(deliveredParcelIndex);
        dataBase.parcelsData.delete(parcelId);
        dataBase.deliveredParcels.push(parcelId);
        console.log(`Parcel ${parcelId} has been delivered!`);
        console.log(dataBase.deliveredParcels);
      }
    }
    this.parcelStorage.length = 0;
  }
  calculatePathLenth(id) {
    const origin = dataBase.depotsData.get(this.route[0]);
    const destination = dataBase.depotsData.get(this.route[1]);
    const xCoord = destination.xPos - origin.xPos;
    const yCoord = destination.yPos - origin.yPos;
    const pathLength = Math.pow((Math.pow(xCoord, 2) + Math.pow(yCoord, 2)), 0.5);
    this.pathLength = pathLength;
  }
}

export { Truck };
