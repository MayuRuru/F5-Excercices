//CRUD todoList (Crear Read Update Delete)

const todoList = ["poner internet", "estudiar", "bailar"];

//1r paso - Crear Read:

function print(element, list) {
  //imprime lista en un lugar
  let llamaLugarHtml = document.getElementById("lista");
  for (const item of list) {
    llamaLugarHtml.innerHTML += `<li>${item}</li>`;
  }
}

//2do paso - Update:

function addTodo() {
  //anyadir al array nuevo todo
  todoList.push(newTodo);
  document.getElementById("lista").innerHTML += `<li>${newTodo.value}</li>`;
}

//3r paso - Delete:

function deleteItem() {
  document.getElementById("lista").value = "";
}
