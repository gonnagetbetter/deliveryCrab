'use strict';

import deliverySystem from 'main.js';

class Parcel {
    constructor(id, mass, origin, dest) { //origin and dest must contain IDs, not names!
        this.id = id;
        this.mass =  mass;
        this.dest = " " +dest;//будет браться автоматически от Storage в момент создания посылки
        this.status = "waiting";
        this.origin = " " + origin;
    }
    createRout() {
      //aboba
    }
    get status() { return this.status }
    set status(value) {
        this.status = value;
    }
    get Info() { return `ID:${this.id}, Status:${this.status}` }
}

const myParcel = new Parcel(1034,30,"Ternopil");
//myParcel.setStatus("ready");
myParcel.status = "ready";  
//Нужно закрыть класс от лишнего внешнего воздействия
console.log(myParcel.Info);
 