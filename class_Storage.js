'use strict'

class Storage {
    constructor(xPos, yPos, id) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.id = id;
        this.trucks = [];
    }
    
    get parcelNum() { return this.parcelNum }

    addTruck() {
        if (this.truckNum < this.truckMaxNum) { this.truckNum++ };
    }

    remTruck() {
        if (this.truckNum) { this.truckNum-- }
    }

    addParcel() {
        if (this.parcelNum < this.parcelMaxNum) {this.parcelNum++};
    }
    
    remParcel() {
        if (this.parcelNum) { this.parcelNum-- }
    }
}

const MyStorage = new MiddleStorage(1,2,1011);
MyStorage.addParcel()
MyStorage.addParcel()
MyStorage.addParcel()
MyStorage.addParcel()
//MyStorage.parcelNum = 69; //Error
//MyStorage.id = 777; //Isnt error!!!!
console.log(MyStorage.parcelNum);
console.log(MyStorage.id);
