"use strict";

console.log("Hola David, este es el simulador de dados de Carlos");

const dice = function() {
  return Math.ceil(Math.random() * 6);
};

let rounds = 1;
let accumulatedPoints = 0;

while (accumulatedPoints < 50) {
  let diceThrow = dice();
  accumulatedPoints = accumulatedPoints + diceThrow;
  if (accumulatedPoints < 50) {
    console.log(
      `Tirada ${rounds++}: ha salido un ${diceThrow}.Tienes un total de ${accumulatedPoints} puntos`
    );
  } else {
    console.log(
      `¡Enhorabuena, ha salido un ${diceThrow}! ¡Has ganado con un total de ${accumulatedPoints} puntos!`
    );
  }
}
