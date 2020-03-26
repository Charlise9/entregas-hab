"use strict";

function palindrome(string) {
  let a = string
    .split(" ")
    .join("")
    .toLocaleLowerCase();
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== a[a.length - 1 - i]) {
      return "No es un palíndromo";
    }
  }
  return "Es un palíndromo";
}

console.log(palindrome("Arriba la birra"));
