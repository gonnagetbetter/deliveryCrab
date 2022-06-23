import { deliverySystem } from "../../main.js";
console.log(deliverySystem);
const form = document.getElementById("form-data");
const data = document.getElementById("info-form");

const cities = {
  kiyv: "kiyv",
  zhitomir: "zhitomir",
  lviv: "lviv",
  kharkiv: "kharkiv",
};

const createList = () => {
  const fromList = document.getElementById("from-input");
  const toList = document.getElementById("to-input");
  for (const city in cities) {
    const optionTo = document.createElement("option", {
      value: city,
      id: city,
    });
    const optionFrom = document.createElement("option", {
      value: city,
      id: city,
    });
    optionTo.append(document.createTextNode(city));
    optionFrom.append(document.createTextNode(city));
    fromList.appendChild(optionFrom);
    toList.appendChild(optionTo);
  }
};

createList();
const showCreatedParcel = () => {
  const selectFrom = document.getElementById("from-input");
  const textFrom = selectFrom.options[selectFrom.selectedIndex].text;
  const selectedTo = document.getElementById("to-input");
  const textTo = selectedTo.options[selectedTo.selectedIndex].text;
  const createdText = document.createElement("span", { id: "one" });
  if (textFrom === textTo) {
    alert("?????????????????????????????????");
    return "";
  }
  createdText.append(
    document.createTextNode(
      `Parcel from ${textFrom} to ${textTo} has been created`
    )
  );
  data.innerHTML = "";
  data.appendChild(createdText);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  showCreatedParcel();
});

const statusForm = document.getElementById("status-form");

const func2 = () => {
  let status = document.getElementById("status").value;
  const node = document.createElement("span", { id: "one" });
  node.append(document.createTextNode(status));
  data.innerHTML = "";
  data.appendChild(node);
};
statusForm.addEventListener("submit", (e) => {
  e.preventDefault();
  func2();
});
