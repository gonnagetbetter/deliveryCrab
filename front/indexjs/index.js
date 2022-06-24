import { deliverySystem } from "../../main.js";
import { dataBase } from "../../DataBase/DataBase.js";

const cities = {
  kiyv: "Kiyv",
  lviv: "Lviv",
  fastiv: "Fastiv",
  vasilkiv: "Vasilkiv",
  drohobych: "Drohobych",
  ravaRuska: "Rava-Ruska",
};

deliverySystem.createDepot(cities.kiyv, 50.45, 30.52, 1);
deliverySystem.createDepot(cities.lviv, 49.83, 24.02, 1);
deliverySystem.createDepot(cities.fastiv, 50.07, 29.91, 0, "a000");
deliverySystem.createDepot(cities.vasilkiv, 50.18, 30.31, 0, "a000");
deliverySystem.createDepot(cities.drohobych, 49.34, 23.5, 0, "a001");
deliverySystem.createDepot(cities.ravaRuska, 50.23, 23.62, 0, "a001");

console.log(dataBase.depotsData);

const createParcelForm = document.getElementById("form-data");
const status = document.getElementById("info-form");
const selectFrom = document.getElementById("from-input");
const selectTo = document.getElementById("to-input");

(() => {
  const fromList = document.getElementById("from-input");
  const toList = document.getElementById("to-input");
  for (const [ID, cityInfo] of dataBase.depotsData) {
    const optionTo = document.createElement("option");
    const optionFrom = document.createElement("option");
    optionTo.text = cityInfo.name;
    optionTo.value = ID;
    optionFrom.text = cityInfo.name;
    optionFrom.value = ID;
    fromList.appendChild(optionFrom);
    toList.appendChild(optionTo);
  }
})(); //function to show the list of cities to user;

const createUsersParcel = (origin, destination) => {
  return deliverySystem.createParcel(origin, destination);
};

const showCreatedParcel = () => {
  const selectedFrom = selectFrom.options[selectFrom.selectedIndex];
  const selectedTo = selectTo.options[selectTo.selectedIndex];
  const notification = document.createElement("span");
  if (selectedFrom.value === selectedTo.value) {
    alert("Select different cities");
    return "";
  }
  notification.append(
    document.createTextNode(
      `Parcel from ${selectedFrom.text} to ${selectedTo.text} has been created`
    )
  );
  createUsersParcel(selectFrom.value, selectTo.value);
  status.innerHTML = "";
  status.appendChild(notification);
};

createParcelForm.addEventListener("submit", (e) => {
  e.preventDefault();
  showCreatedParcel();
});

// ds.spawnTrucks(2);

// const origin = 'ra000a00';
// const destination = 'ra001a03';
// ds.createParcel(origin, destination);
// ds.createParcel(origin, destination);
// ds.createParcel(origin, destination);

// const statusForm = document.getElementById("status-form");

// const func2 = () => {
//   let status = document.getElementById("status").value;
//   const node = document.createElement("span", { id: "one" });
//   node.append(document.createTextNode(status));
//   data.innerHTML = "";
//   data.appendChild(node);
// };
// statusForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   func2();
// });
