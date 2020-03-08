"use strict";

console.log("Hola David, esta es la calculadora else if de Carlos");

const number1 = prompt("Elige el primer número de la operación");
const number2 = prompt("Elije el segundo número de la operación");

const option = prompt("Teclea un tipo de operación matemática");

if (option === "+") {
  console.log(
    `Has elegido sumar ${number1} y ${number2}: el resultado es ${number1 +
      number2}`
  );
} else if (option === "-") {
  console.log(
    `Has elegido restar ${number1} y ${number2}: el resultado es ${number1 -
      number2}`
  );
} else if (option === "*") {
  console.log(
    `Has elegido multiplicar ${number1} por ${number2}: el resultado es ${number1 *
      number2}`
  );
} else if (option === "/") {
  console.log(
    `Has elegido dividir ${number1} por ${number2}: el resultado es ${number1 /
      number2}`
  );
} else if (option === "**") {
  console.log(
    `Has elegido elevar ${number1} a ${number2}: el resultado es ${number1 **
      number2}`
  );
} else {
  console.log("No se ha selecionado un tipo de operación correcta");
}
