let from = document.getElementById("from-input").value;
let to = document.getElementById("to-input").value;
const form = document.getElementById("form-data");

const data = document.getElementById("info-form");

const func = () => {
  const node = document.createElement("span", { id: "one" });
  node.append(
    document.createTextNode(`Parcel from ${from} to ${to} has been created`)
  );
  data.innerHTML = "";
  data.appendChild(node);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  func();
});

const statusForm = document.getElementById("status-form");
let status = document.getElementById("status").value;

const func2 = () => {
  const node = document.createElement("span", { id: "one" });
  node.append(document.createTextNode(status));
  data.innerHTML = "";
  data.appendChild(node);
};
statusForm.addEventListener("submit", (e) => {
  e.preventDefault();
  func2();
});
