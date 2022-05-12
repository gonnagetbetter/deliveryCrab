'use strict';

class Truck {
  constructor(id, capacity, velocity, dest) {
    this.id = id;
    this.capacity = capacity;
    this.velocity = velocity;
    this.status = "undef"; 
    this.dest = dest;
    //this.loaded => should be in status
    //this.parcelStorage => should be in id
  }
  
  getStatus() {
    return this.status; 
  }

  setStatus(value) {
    this.status = value;
  }

  addParcel() {
    //doSomething
  }

  empty() {
    //doSomething
  }

  setDest(origId, destId) {
    let rout = [origId, destId];
    const origHub = "h" + origId.slice(1, 5); //create a hubId
    const destHub = "h" + destId.slice(1, 5);

    if (origHub !== destHub) {  //if hubs are different
      rout.splice(1, 0, origHub, destHub); //add hubsId in our rout
    }

    return rout;
  }
}


const myTruck = new Truck(25, 100, 80, 'Kyiv');
const res = myTruck.setDest("ra000a00","ra001a01");
myTruck.setStatus("loaded");
const res2 = myTruck.getStatus();
console.log(res);
console.log(res2);