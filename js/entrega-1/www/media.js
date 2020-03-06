"use strict";

console.log("Hola David, este es el ejercicio de cálculo de medias de Carlos");

let teamMaria = [62, 34, 55];
let teamPaula = [35, 60, 59];
let teamRebeca = [40, 39, 63];

function media(team) {
  return (team[0] + team[1] + team[2]) / team.length;
}

console.log(
  `La media de puntos del Equipo María es ${Math.round(media(teamMaria))}`
);

console.log(
  `La media de puntos del Equipo Paula es ${Math.round(media(teamPaula))}`
);

console.log(
  `La media de puntos del Equipo Rebeca es ${Math.round(media(teamRebeca))}`
);

if (
  media(teamMaria) > media(teamPaula) &&
  media(teamMaria) > media(teamRebeca)
) {
  console.log(
    `La media más alta es la del equipo de María con ${Math.round(
      media(teamMaria)
    )}`
  );
} else if (
  media(teamPaula) > media(teamMaria) &&
  media(teamMaria) > media(teamRebeca)
) {
  console.log(
    `La media más alta es la del equipo de Paula con ${Math.round(
      media(teamPaula)
    )}`
  );
} else {
  console.log(
    `La media más alta es la del equipo de Rebeca con ${Math.round(
      media(teamRebeca)
    )}`
  );
}

/**switch (team) {
  case media(teamMaria) > media(teamPaula) &&
    media(teamMaria) > media(teamRebeca):
    console.log(
      `La media más alta es la del equipo de María con ${Math.round(
        media(teamMaria)
      )} `
    );
    break;
  default:
    console.log(
      `La media más alta es la del equipo de Rebeca con ${Math.round(
        media(teamRebeca)
      )} `
    );
}
*/
