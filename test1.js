'use strict';

import { deliverySystem } from "./main.js";
import { dataBase } from "./database/dataBase.js";
import { cities } from "./config.js";

deliverySystem.createDepot(cities.kiyv, 50.45, 30.52, 1);
deliverySystem.createDepot(cities.lviv, 49.83, 24.02, 1);
deliverySystem.createDepot(cities.fastiv, 50.07, 29.91, 0, "a000");
deliverySystem.createDepot(cities.vasilkiv, 50.18, 30.31, 0, "a000");
deliverySystem.createDepot(cities.drohobych, 49.34, 23.5, 0, "a001");
deliverySystem.createDepot(cities.ravaRuska, 50.23, 23.62, 0, "a001");

deliverySystem.spawnTrucks(2);

const origin = 'ra000a00';
const destination = 'ra001a03';
deliverySystem.createParcel(origin, destination);
deliverySystem.createParcel(origin, destination);
deliverySystem.createParcel(origin, destination);

console.log(dataBase.depotsData);
console.log(dataBase.parcelsData);
console.log(dataBase.deliveredParcels);
