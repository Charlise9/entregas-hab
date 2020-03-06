"use strict";

console.log("Hola David, este es el simulador de dados de Carlos");

const dice = function() {
  return Math.ceil(Math.random() * 6);
};

let tiradas = 0;

for (let contador = 0; contador <= 50; contador = contador + dice()) {
  console.log(
    `Tirada ${tiradas++}: ha salido un ${dice()}.Tienes un total de ${contador} puntos`
  );
}
