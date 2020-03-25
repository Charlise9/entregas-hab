"use strict";

let a = ["Arriba", "la", "birra"];

let b = a.join("");
let c = b.toLocaleLowerCase();

function palindrome() {
  for (let i = 0; i < c.length; i++) {
    if (c[i] !== c[c.length - i - 1]) {
      return "No es un palíndromo";
    }
  }
  return "Es un palíndromo";
}
