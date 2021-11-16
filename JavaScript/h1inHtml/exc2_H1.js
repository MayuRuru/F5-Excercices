//Desarrollar una función que escriba un Título h1 en el documento HTML

function escribirH1(tituloNuevo) {
  let aquiEscribe = document.getElementById("mysection");
  aquiEscribe.innerHTML = `<h1>${tituloNuevo}</h1>`;
}

escribirH1("Soy una crack");
