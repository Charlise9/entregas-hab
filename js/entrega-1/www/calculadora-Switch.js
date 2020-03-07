"use strict";

console.log("Hola David, esta es la calculadora Switch de Carlos");

let numberA = 5;
let numberB = 3;

let option = prompt("Teclea un tipo de operación matemática");

switch (option) {
  case "+":
    console.log(
      `Has elegido sumar ${numberA} y ${numberB}: el resultado es ${numberA +
        numberB}`
    );
    break;
  case "-":
    console.log(
      `Has elegido restar ${numberA} y ${numberB}: el resultado es ${numberA -
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
      `Has elegido dividir ${numberA} por ${numberB}: el resultado es ${numberA /
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
