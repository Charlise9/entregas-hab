"use strict";

function binaryConverter(string) {
  let decimal = 0;
  let multipliyer = 1;
  for (let i = 0; i < string.length; i++) {
    let currentNumber = +string[string.length - 1 - i];
    if (currentNumber === 1) {
      decimal = decimal + multipliyer;
    }
    multipliyer = multipliyer * 2;
  }
  console.log(decimal);
}

console.log(binaryConverter("101"));
