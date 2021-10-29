//Desarrollar una función que escriba un Título h1 en el documento HTML

function escribirH1(tituloNuevo) {
  aquiEscribe.innerHTML = `<h1>${tituloNuevo}</h1>`;
}

let aquiEscribe = document.getElementById("mysection");

escribirH1("Soy una crack");
