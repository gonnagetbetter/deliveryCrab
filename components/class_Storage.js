'use strict';

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
    const parcel = parcelsData.get(id);
    for (carId in this.trucks) {
      const currentTruck = trucksData.get(carId);
      if (currentTruck.loaded = 0) {
        const emptyTruck = currentTruck;
      }
      if (parcel.route[1] == currentTruck.route[1]) {
        currentTruck.addParcel(id);
        trucksData.set(carId, currentTruck);
        return;
      }
    }
    emptyTruck.addParcel(id);
    emptyTruck.set(carId, currentTruck);
}


}

module.exports = Storage;
