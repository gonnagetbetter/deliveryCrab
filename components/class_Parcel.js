'use strict';

class Parcel {
  constructor(origin, destination) {
    //origin and destination must contain IDs, not names!
    this.status = 'waiting';
    this.route;
    this.origin = origin;
    this.dest = destination;
  }

  createRoute() {
    const orig = this.origin;
    const dest = this.dest;
    const route = [];
    if (orig === dest) {
      console.log('Origin and destination are the same!');
    } else {
      const originHub = 'h' + orig.slice(1, 5);
      const destHub = 'h' + dest.slice(1, 5);
      if (originHub === destHub) {
        route.push(orig, dest);
      } else {
        if (orig[0] === 'r') {
          route.push(orig);
          route.push(originHub);
        } else {
          route.push(orig);
        }
        if (dest[0] === 'r') {
          route.push(destHub);
          route.push(dest);
        } else {
          route.push(dest);
        }
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

  getInfo() {
    return `ID:${this.id}, Status:${this.status}`;
  }
}

export { Parcel };
