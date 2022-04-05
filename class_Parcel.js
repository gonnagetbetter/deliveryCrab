'use strict'

class Parcel {
    
    constructor(id, mass, dest) {
        this.id = id;
        this.mass = mass;
        this.dest = dest;//будет браться автоматически от Storage в момент создания посылки
    }
    
    status = "";
    origin = "";

    createRout() {
        doSomthing; 
    }
    
    get status() { return this.status }

    set status(value) {
        this.status = value;
    }

    get Info() { return `ID:${this.id}, Status:${this.status}` }
}

const myParcel = new Parcel(1034,30,"Ternopil");
//myParcel.setStatus("ready");
myParcel.status = "ready";  //Нужно закрыть класс от лишнего внешнего воздействия
console.log(myParcel.Info);