//Desarrollar una función que escriba en la consola del navegador cada item de una lista de la compra

let listaCompra = ["manzanas", "patatas", "huevos", "cafe"];

function escribirconsola() {
  for (i = 0; i < listaCompra.length; i++) {
    console.log(listaCompra[i]);
  }
}

escribirconsola();
