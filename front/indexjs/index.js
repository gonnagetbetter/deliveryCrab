import { deliverySystem } from "../../main.js";
import { dataBase } from "../../database/dataBase.js";
import { cities } from "../../config.js";

deliverySystem.createDepot(cities.kiyv, 50.45, 30.52, 1);
deliverySystem.createDepot(cities.lviv, 49.83, 24.02, 1);
deliverySystem.createDepot(cities.fastiv, 50.07, 29.91, 0, "a000");
deliverySystem.createDepot(cities.vasilkiv, 50.18, 30.31, 0, "a000");
deliverySystem.createDepot(cities.drohobych, 49.34, 23.5, 0, "a001");
deliverySystem.createDepot(cities.ravaRuska, 50.23, 23.62, 0, "a001");

deliverySystem.spawnTrucks(2);

const createParcelForm = document.getElementById("form-data");
const info = document.getElementById("info-form");
const selectFrom = document.getElementById("from-input");
const selectTo = document.getElementById("to-input");
const statusForm = document.getElementById("status-form");

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

const showNotification = (notificationText) => {
  const notification = document.createElement("span");
  notification.append(
    document.createTextNode(
      `${notificationText}`
    )
  );
  info.innerHTML = "";
  info.appendChild(notification);
}

const showCreatedParcel = () => {
  const selectedFrom = selectFrom.options[selectFrom.selectedIndex];
  const selectedTo = selectTo.options[selectTo.selectedIndex];
  if (selectedFrom.value === selectedTo.value) {
    alert("Select different cities");
    return "";
  }
  const ID = createUsersParcel(selectFrom.value, selectTo.value);
  showNotification(`Parcel from ${selectedFrom.text} to ${selectedTo.text} has been created;
  ID: ${ID}`);
};

createParcelForm.addEventListener("submit", (e) => {
  e.preventDefault();
  showCreatedParcel();
});

const showStatus = () => {
  const ID = document.getElementById('id-status').value;
  const parcel = dataBase.parcelsData.get(ID);
  if (!parcel) {
    alert('no such parcel');
    return '';
  }
  showNotification(parcel.status);
}

statusForm.addEventListener("submit", (e) => {
  e.preventDefault();
  showStatus();
})
