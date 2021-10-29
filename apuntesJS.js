//ejemplo funcion 1:

function sayThanks(name) {
  console.log(
    "Thank you for your purchase " + name + "! We appreciate your business."
  );
}

sayThanks("Cole"); // Thank you for your purchase Cole! We appreciate your business.

function calcularArea(width, height) {
  let area = width * height;
  return area;
}
calcularArea(5, 7);

//ejemplo funcion 2:

let area = calcularArea(7, 9);

function calcularArea(width, height) {
  return width * height;
}
console.log(area);

//funcion flecha:

const calcularArea = (widht, height) => {
  return widht * height;
};

// la funcion flecha permite que no haya que poner parentesis si solo hay un parametro!

//array asociativo:

let pc = {
  nombre: "MayuMac",
  procesador: "IntelCore",
  ram: "16GB",
  espacio: "1TB",
};
document.write(pc["espacio"]); // 1TB

let frase = "el nombre de mi pc es: ${nombre}" + "tiene una ram de: ${ram}";

document.write(frase);

////

function makeShoppingList(item1 = "milk", item2 = "bread", item3 = "eggs") {
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}

//// ARRAY ELEMENTS CALL

const famousSayings = [
  "Fortune favors the brave.",
  "A joke is a very serious thing.",
  "Where there is love there is life.",
];

let listItem = famousSayings[0];

console.log(listItem);

//or

console.log(famousSayings[2]);

////
/*The switch Statement

SWITCH (day_of_week) {
  case 1:
  
  case 2:
  
  case 3:
  
  case 4:
  
  case 5:
  
  document.write("working days");
  
  break;
  
  case 6:
  
  document.write("today is saturday");
  
  break;
  
  document.write ("Today is Sunday");
  
  break;
  
  }


*/ ////

function monitorCount(rows, columns) {
  return rows * columns;
}

const numOfMonitors = monitorCount(5, 4);

console.log(numOfMonitors);

////HELPERS:

function monitorCount(rows, columns) {
  return rows * columns;
}

function costOfMonitors(rows, columns) {
  return monitorCount(rows, columns) * 200;
}

const totalCost = costOfMonitors(5, 4);

console.log(totalCost);
