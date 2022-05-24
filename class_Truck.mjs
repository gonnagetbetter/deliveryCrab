'use strict';

export class Truck {
  constructor(capacity, velocity) {
    this.capacity = capacity;
    this.velocity = velocity;
    this.status = "undef"; 
    this.rout = [];
    this.loaded = 0; //how much cargo there is in a truck
    this.parcelStorage = [];
  }
  
  getStatus() {
    return this.status; 
  }

  setStatus(value) {
    this.status = value;
  }

  addParsel(id) {
    if (!this.parcelStorage.includes(id)) {
      this.parcelStorage.push(id);
    } else {
      console.log('This parsel is already in this truck'); //should add proper error handling
    }
  }

  empty() {
    this.parcelStorage = [];
  }

  //This piece doesn`t work properly and isn`t needed here (route is calculated in Parcel class), so should be removed completely.
  //setDest(origId, destId) {
  //  let rout = [origId, destId];
  //  const origHub = "h" + origId.slice(1, 5); //create a hubId
  //  const destHub = "h" + destId.slice(1, 5);
  //
  //  if (origHub !== destHub) {  //if hubs are different
  //    rout.splice(1, 0, origHub, destHub); //add hubsId in our rout
  //  }
  //
  //  this.rout = rout;
  //}
}