const form = document.querySelector("form");
const input = document.querySelector("[name='input']");
const todoList = document.getElementById("list");

const existingTodos = JSON.parse(localStorage.getItem("list")) || [];

const todoData = [];

existingTodos.forEach((todo) => {
  addTodo(todo);
});
function addTodo(todoText) {
  todoData.push(todoText);
  const li = document.createElement("li");
  li.innerHTML = todoText;
  todoList.appendChild(li);
  localStorage.setItem("list", JSON.stringify(todoData));
  input.value = "";
}

// Events
form.onsubmit = (event) => {
  event.preventDefault();
  addTodo(input.value);
};
