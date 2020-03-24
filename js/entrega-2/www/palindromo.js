"use strict";

let a = ["Arriba", "la", "birra"];

let b = a.join("");
let c = b.toLocaleLowerCase();

let x = for (let i = 0; i < c.length; i++) {
  console.log(c[i]);
};

let y = for (let i = c.length - 1; i >= 0; i--) {
  console.log(c[i]);
};

