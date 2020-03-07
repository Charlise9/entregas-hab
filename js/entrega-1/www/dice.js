"use strict";

console.log("Hola David, este es el simulador de dados de Carlos");

const dice = function() {
  return Math.ceil(Math.random() * 6);
};

let tiradas = 1;
let puntosAcumulados = 0;

while (puntosAcumulados < 50) {
  let tiradaDado = dice();
  puntosAcumulados = puntosAcumulados + tiradaDado;
  if (puntosAcumulados < 50) {
    console.log(
      `Tirada ${tiradas++}: ha salido un ${tiradaDado}.Tienes un total de ${puntosAcumulados} puntos`
    );
  } else {
    console.log(
      `¡Enhorabuena, ha salido un ${tiradaDado}! ¡Has ganado con un total de ${puntosAcumulados} puntos!`
    );
  }
}
