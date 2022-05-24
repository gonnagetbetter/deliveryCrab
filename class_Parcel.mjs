'use strict';

export class Parcel {
  constructor(mass, origin, destination) { //origin and dest must contain IDs, not names!
    this.mass =  mass;
    this.status = "waiting";
    this.route;
    this.origin = origin;
    this.dest = destination;
  }

  createRoute() {
    const orig = this.origin;
    const dest = this.dest;
    let route = [];
    if (orig === dest) {
      console.log('Origin and destination are the same!');
    } else {
      const originHub = 'h' + orig.slice(1, 5);
      const destHub = 'h' + dest.slice(1, 5);
      if (originHub === destHub) {
        route.push(orig, dest);
      } else {
        if (orig[0] == 'r'){
          route.push(orig);
            route.push(originHub);
          } else {
            route.push(orig);
          };
        if (dest[0] == 'r') {
          route.push(destHub);
          route.push(dest);
        } else {
          route.push(dest);
        };
      }
    }
    this.route = route;
  }
  
  getStatus() {
    return this.status;
  }

  setStatus(value) {
    this.status = value;
  }

  get info() {
    return `ID:${this.id}, Status:${this.status}`;
  }
}

const myParcel = new Parcel(10,'ra001a02', 'ra001a00');
myParcel.createRoute()
console.log(myParcel.route);

 