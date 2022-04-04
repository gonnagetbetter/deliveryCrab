'use strict'

class Storage {
    
    truckNum = 0;
    parcelNum = 0;

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

class MiddleStorage extends Storage {
    constructor(xPos, yPos, id) {
        super();
        this.xPos = xPos;
        this.yPos = yPos;
        this.id = id;
    }

    parcelMaxNum = 100;
    truckMaxNum = 10;
}

class BigStorage extends Storage {
    constructor(xPos, yPos, id) {
        super();
        this.xPos = xPos;
        this.yPos = yPos;
        this.id = id;
    }

    parcelMaxNum = 1000;
    truckMaxNum = 100;
}


/*
const MyStorage = new MiddleStorage(1,2,1011);
MyStorage.addParcel()
MyStorage.addParcel()
MyStorage.addParcel()
MyStorage.addParcel()
console.log(MyStorage.parcelNum);
*/



/*
    addParcel(n=1) {
        if (this.parcelNum < this.parcelMaxNum) {
            this.parcelNum += this.Parcel*n;
        };
    }   !!!нужна проверка вместимости на выходе, неудобно.
*/
