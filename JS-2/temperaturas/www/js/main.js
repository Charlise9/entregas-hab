"use strict";

const temperatures = [
  {
    city: "A coruña",
    min: 7,
    max: 23,
  },
  {
    city: "Ferrol",
    min: 15,
    max: 32,
  },
  {
    city: "Lugo",
    min: 10,
    max: 31,
  },
  {
    city: "Ourense",
    min: 18,
    max: 35,
  },
  {
    city: "Pontevedra",
    min: 18,
    max: 29,
  },
  {
    city: "Antártida",
    min: -50,
    max: -10,
  },
];

const section = document.querySelector("section#temp");

const table = document.createElement("table");

const caption = document.createElement("caption");
caption.textContent = "Parte Meteorológico";

table.append(caption);

const thead = document.createElement("thead");

thead.innerHTML = `<th>Ciudad</th> <th>Mínima</th> <th>Máxima</th>`;

table.append(thead);

for (const temp of temperatures) {
  const tr = document.createElement("tr");

  const cityCol = document.createElement("td");
  cityCol.textContent = temp.city;

  const minCol = document.createElement("td");
  minCol.textContent = temp.min;
  minCol.classList.add(getClassName(temp.min));

  const maxCol = document.createElement("td");
  maxCol.textContent = temp.max;
  maxCol.classList.add(getClassName(temp.max));

  tr.append(cityCol);
  tr.append(minCol);
  tr.append(maxCol);

  table.append(tr);
}

section.append(table);

function getClassName(temp) {
  if (temp < 0) return "icy";
  if (temp < 10) return "fresh";
  if (temp < 20) return "warm";
  if (temp < 30) return "hot";
  return "veryhot";
}
