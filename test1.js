'use strict';

import { deliverySystem } from "./main.js";
import { dataBase } from "./database/dataBase.js";

deliverySystem.createDepot('Kyiv', 50.45, 30.52, 1);
deliverySystem.createDepot('Lviv', 49.83, 24.02, 1);
deliverySystem.createDepot('Fastiv', 50.07, 29.91, 0, 'a000');
deliverySystem.createDepot('Vasilkiv', 50.18, 30.31, 0, 'a000');
deliverySystem.createDepot('Drohobych', 49.34, 23.50, 0, 'a001');
deliverySystem.createDepot('Rava-Ruska', 50.23, 23.62, 0, 'a001');
deliverySystem.spawnTrucks(2);

const origin = 'ra000a00';
const destination = 'ra001a03';
deliverySystem.createParcel(origin, destination);
deliverySystem.createParcel(origin, destination);
deliverySystem.createParcel(origin, destination);

console.log(dataBase.depotsData);
console.log(dataBase.parcelsData);
console.log(dataBase.deliveredParcels);
