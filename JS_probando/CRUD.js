//CRUD todoList (Crear Read Update Delete)

const todoList = ["poner internet", "estudiar", "bailar"];

print("newTodo", todoList);

function addTodo(newTodo) {
  //anyadir al array nuevo todo
  todoList.push(newTodo);
  print("newTodo", todoList);
}

//1r paso:

function print(element, list) {
  //imprime lista en un lugar
  let llamaLugarHtml = document.getElementById("lista");
  for (const item of list) {
    llamaLugarHtml.innerHTML += `<li>${item} - delete</li>`;
  }
}

//delete??
//update > cambia el boton
