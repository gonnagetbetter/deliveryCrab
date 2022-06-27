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
    const route = [];
    if (this.origin === this.dest) {
      console.log('Origin and destination are the same!');
    } else {
      const originHub = 'h' + this.origin.slice(1, 5);
      const destHub = 'h' + this.dest.slice(1, 5);
      if (originHub === destHub) {
        route.push(this.origin, this.dest);
      } else {
        if (this.origin[0] === 'r') {
          route.push(this.origin);
          route.push(originHub);
        } else {
          route.push(this.origin);
        }
        if (this.dest[0] === 'r') {
          route.push(destHub);
          route.push(this.dest);
        } else {
          route.push(this.dest);
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
}

export { Parcel };
