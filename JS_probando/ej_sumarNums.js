///como sumar solo numeros en un array con strings i numeros?

let lista = ["cosa", 3, 5, "trasto", 5];

///esto porque se pone?:

let suma = 0;

// necesitaremos el operador **typeof** que nos devuelve el tipo de dato que es
// y recorrer el array con el loop FOR

for (let i = 0; i < lista.length; i++) {
  if (typeof lista[i] == "number") {
    suma += lista[i];
  }
}
console.log(suma);

//// otra forma

let lista = ["cosa", 3, 5, "trasto", 5];
let suma = 0;

for (let item of list) {
  if (typeof item == "number") {
    suma = suma + item;
  }
}
console.log(suma);

//// item esta 'predeterminado'?
