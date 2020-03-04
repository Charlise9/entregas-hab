"use strict";

console.log("Hello World!");

const number1 = 4;

const number2 = 7;

let option = 4;

if (option === 0) {
  console.log(number1 + number2);
} else if (option === 1) {
  console.log(number1 - number2);
} else if (option === 2) {
  console.log(number1 * number2);
} else if (option === 3) {
  console.log(number1 / number2);
} else if (option === 4) {
  console.log(number1 ** number2);
} else {
  console.log("No se ha selecionado un tipo de operación correcta");
}
