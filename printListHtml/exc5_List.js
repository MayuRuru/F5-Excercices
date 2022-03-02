const listaCompra = ["manzanas", "patatas", "huevos", "cafe"];

function escribirListaDOM() {
  let aquiEscribe = document.getElementById("miLista");
  for (i = 0; i < listaCompra.length; i++) {
    aquiEscribe.innerHTML += "<li>" + listaCompra[i] + "</li>";
  }
}

escribirListaDOM();

/*
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
*/
