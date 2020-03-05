"use strict";

console.log("Hola David, esta es la calculadora Switch de Carlos");

let numberA = 5;
let numberB = 3;

let option = +prompt("Teclea un número del 1 al 5");

switch (option) {
  case 1:
    console.log(
      `Has elegido sumar ${numberA} y ${numberB}: el resultado es ${numberA +
        numberB}`
    );
    break;
  case 2:
    console.log(
      `Has elegido restar ${numberA} y ${numberB}: el resultado es ${numberA -
        numberB}`
    );
    break;
  case 3:
    console.log(
      `Has elegido multiplicar ${numberA} por ${numberB}: el resultado es ${numberA *
        numberB}`
    );
    break;
  case 4:
    console.log(
      `Has elegido dividir ${numberA} por ${numberB}: el resultado es ${numberA /
        numberB}`
    );
    break;
  case 5:
    console.log(
      `Has elegido elevar ${numberA} a ${numberB}: el resultado es ${numberA **
        numberB}`
    );
    break;
  default:
    console.log("No se ha selecionado un tipo de operación correcta");
}
