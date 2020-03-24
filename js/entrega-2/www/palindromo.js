"use strict";

let a = ["Arriba", "la", "birra"];

let b = a.join("");
let c = b.toLocaleLowerCase();

function contarDesdeElPrincipio() {
  for (let i = 0; i < c.length; i++) {
    console.log(c[i]);
  }
}

function contarDesdeElFinal() {
  for (let i = c.length - 1; i >= 0; i--) {
    console.log(c[i]);
  }
}

let x = contarDesdeElPrincipio();
let y = contarDesdeElFinal();
