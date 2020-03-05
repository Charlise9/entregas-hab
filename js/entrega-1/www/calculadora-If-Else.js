"use strict";

console.log("Hola David, esta es la calculadora else if de Carlos");

const number1 = 5;

const number2 = 3;

let option = +prompt("Teclea un número del 1 al 5");

if (option === 1) {
  console.log(`Has elegido sumar y el resultado es ${number1 + number2}`);
} else if (option === 2) {
  console.log(`Has elegido restar y el resultado es ${number1 - number2}`);
} else if (option === 3) {
  console.log(`Has elegido multiplicar y el resultado es ${number1 * number2}`);
} else if (option === 4) {
  console.log(`Has elegido dividir y el resultado es ${number1 / number2}`);
} else if (option === 5) {
  console.log(
    `Has elegido elevar el primer número al segundo y el resultado es ${number1 **
      number2}`
  );
} else {
  console.log("No se ha selecionado un tipo de operación correcta");
}
