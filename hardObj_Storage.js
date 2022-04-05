'use strict'

const createStorage = (xPos, yPos, id) => {
    let [truckNum, parcelNum] = [0, 0];
    const [truckMaxNum, parcelMaxNum] = [3, 100];
    return Object.freeze({

        get Info() {
            return `ID:${id}, Coords:${xPos},${yPos}`
        },
        
        getparcelNum: () => parcelNum,

        gettruckNum: () => truckNum,

        gettruckNum: () => truckNum,
        
        addTruck: () => {
            if (truckNum < truckMaxNum) { truckNum++ };
        },

        remTruck: () => {
            if (truckNum) { truckNum-- }
        },

        addParcel: () =>  {
            if (parcelNum < parcelMaxNum) {parcelNum++};
        },
    
        remParcel: () => {
            if (parcelNum) { parcelNum-- }
        }
    })
}
   

const myStorage = createStorage(2,3,1054);
myStorage.addTruck();
myStorage.addTruck();
myStorage.addTruck();
myStorage.addTruck();
//myStorage.id = 1000; Error
console.log(myStorage.gettruckNum()); //3
console.log(myStorage.getparcelNum()); //0
console.log(myStorage.Info); //ID:1054, Coords:2,3

