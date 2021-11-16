//VARIABLES:

const buttonNumber = document.getElementsByName("data-number");

//console.log(buttonNumber);

const buttonOpe = document.getElementsByName("data-ope");

//EQUAL and DELETE are ARRAYS:
const buttonEqual = document.getElementsByName("data-equal")[0];

const buttonDelete = document.getElementsByName("data-delete")[0];

//console.log(buttonDelete);

let result = document.getElementById("result");
//console.log(result);

//variables Funciones:

let opeNow = "";
let opeBefore = "";
let operation = undefined;

//EVENTOS Y METODOS:

buttonNumber.forEach(function (button) {
  button.addEventListener("click", function () {
    addNumber(button.innerText);
    //alert(button.innerText);
  });
});

buttonOpe.forEach(function (button) {
  button.addEventListener("click", function () {
    selectOpera(button.innerText);
    //alert(button.innerText);
  });
});

buttonEqual.addEventListener("click", function () {
  calculate();
  actualizeDisplay();
});

buttonDelete.addEventListener("click", function () {
  clear();
  actualizeDisplay();
});

function selectOpera(op) {
  if (opeNow === "") return;
  if (opeBefore !== "") {
    calculate();
  }
  operation = op.toString();
  opeBefore = opeNow;
  opeNow = "";
}

function calculate() {
  let calculation;
  const previous = parseFloat(opeBefore);
  const actual = parseFloat(opeNow);
  if (isNaN(previous) || isNaN(actual)) return;
  switch (operation) {
    case "+":
      calculation = previous + actual;
      break;
    case "-":
      calculation = previous - actual;
      break;
    case "/":
      calculation = previous / actual;
      break;
    case "x":
      calculation = previous * actual;
      break;
    default:
      return;
  }
  opeNow = calculation;
  opeBefore = "";
  operation = undefined;
}

function addNumber(num) {
  opeNow = opeNow.toString() + num.toString();
  actualizeDisplay();
}

function actualizeDisplay() {
  result.value = opeNow;
}

function clear() {
  opeNow = "";
  opeBefore = "";
  operation = undefined;
}

clear();
