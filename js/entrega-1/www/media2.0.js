"use strict";

const teamMaria = [62, 34, 55];
const teamPaula = [35, 60, 59];
const teamRebeca = [40, 39, 63];

let totalMaria = 0;
let totalPaula = 0;
let totalRebeca = 0;

for (let index = 0; index < teamMaria.length; index++) {
  totalMaria = totalMaria + teamMaria[index];
  totalPaula = totalPaula + teamPaula[index];
  totalRebeca = totalRebeca + teamRebeca[index];
  //console.log(totalMaria);
}
const averageMaria = totalMaria / teamMaria.length;
const averagePaula = totalPaula / teamPaula.length;
const averageRebeca = totalRebeca / teamRebeca.length;
console.log(`El equipo de María tiene una media de puntos de ${averageMaria}.`);
console.log(`El equipo de Paula tiene una media de puntos de ${averagePaula}.`);
console.log(
  `El equipo de Rebeca tiene una media de puntos de ${averageRebeca}.`
);
console.log(
  `El equipo con la media más alta es el equipo de ${showMaxAverageTeamName()} con una media de ${showMaxAverage()} puntos.`
);

function showMaxAverage() {
  return Math.max(averageMaria, averagePaula, averageRebeca);
}

function showMaxAverageTeamName() {
  if (averageMaria === Math.max(averageMaria, averagePaula, averageRebeca)) {
    return "María";
  } else if (
    averagePaula === Math.max(averageMaria, averagePaula, averageRebeca)
  ) {
    return "Paula";
  } else {
    return "Rebeca";
  }
}
