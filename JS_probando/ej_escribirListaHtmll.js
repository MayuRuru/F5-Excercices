//escribir una lista que se imprima en pantalla

/*
let listaToDo = ["dormir", "comer", "bailar"];
let elemento = document.getElementById(""lista"");

function writeItems() {
  for (let i = 0; i < listaToDo.length; i++) {
    elemento.innerHTML += "<li>" + listaToDo[i] + "</li>";
  }
}
writeItems();

function addItemToList(item) {
  listaToDo.push(item);
  elemento.innerHTML = "";
  writeItems();
}

*/

//// escribir de otra manera
let listaToDo = ["dormir", "comer", "bailar"];

function addItemToList(cosaNueva) {
  listaToDo.push(cosaNueva);
  writeItems("lista", listaToDo);
}

function writeItems(idaBuscar, list) {
  let elementoLista = document.getElementById(idaBuscar);
  
  elementoLista.innerHTML = "";
  for (const item of list) {
    elementoLista.innerHTML += `<li>${item}</li>`;
  }
}

writeItems("lista", listaToDo);
