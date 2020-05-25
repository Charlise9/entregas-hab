"use strict";

console.log("Hola David, esta es la calculadora Switch de Carlos");

const numberA = prompt("Elige el primer número de la operación");
const numberB = prompt("Elije el segundo número de la operación");

const option = prompt("Teclea un tipo de operación matemática");

switch (option) {
  case "+":
    console.log(
      `Has elegido sumar ${numberA} más ${numberB}: el resultado es ${numberA +
        numberB}`
    );
    break;
  case "-":
    console.log(
      `Has elegido restar ${numberA} menos ${numberB}: el resultado es ${numberA -
        numberB}`
    );
    break;
  case "*":
    console.log(
      `Has elegido multiplicar ${numberA} por ${numberB}: el resultado es ${numberA *
        numberB}`
    );
    break;
  case "/":
    console.log(
      `Has elegido dividir ${numberA} entre ${numberB}: el resultado es ${numberA /
        numberB}`
    );
    break;
  case "**":
    console.log(
      `Has elegido elevar ${numberA} a ${numberB}: el resultado es ${numberA **
        numberB}`
    );
    break;
  default:
    console.log("No se ha selecionado un tipo de operación correcta");
}
