"use strict";

console.log("Hola David, este es el simulador de dados de Carlos");

const dice = function() {
  return Math.ceil(Math.random() * 6);
};

let tiradas = 0;

for (let contador = 0; contador <= 50; contador = contador + dice()) {
  if (contador < 50) {
    console.log(
      `Tirada ${tiradas++}: ha salido un ${dice()}.Tienes un total de ${contador} puntos`
    );
  } else {
    console.log(
      `¡Enhorabuena, ha salido un ${dice()}! ¡Has ganado con un total de ${contador} puntos!`
    );
  }
}
