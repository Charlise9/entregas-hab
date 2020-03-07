"use strict";

let teamMaria = [62, 34, 55];
let teamPaula = [35, 60, 59];
let teamRebeca = [40, 39, 63];

let totalMaria = 0;
let totalPaula = 0;
let totalRebeca = 0;

for (let index = 0; index < teamMaria.length; index++) {
  totalMaria = totalMaria + teamMaria[index];
  totalPaula = totalPaula + teamPaula[index];
  totalRebeca = totalRebeca + teamRebeca[index];
  //console.log(totalMaria);
}
console.log(
  `El equipo de María tiene una media de puntos de ${totalMaria /
    teamMaria.length}.`
);
console.log(
  `El equipo de Paula tiene una media de puntos de ${totalPaula /
    teamPaula.length}.`
);
console.log(
  `El equipo de Rebeca tiene una media de puntos de ${totalRebeca /
    teamRebeca.length}.`
);
console.log(
  Math.max(
    totalMaria / teamMaria.length,
    totalPaula / teamPaula.length,
    totalRebeca / teamRebeca.length
  )
);
