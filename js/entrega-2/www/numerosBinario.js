"use strict";

function binaryConverter(string) {
  let decimal = 0;
  let bits = 1;
  for (let i = 0; i < string.length; i++) {
    let currNum = +string[string.length - 1 - i];
    if (currNum === 1) {
      decimal = decimal + bits;
    }
    bits = bits * 2;
  }
  console.log(decimal);
}

console.log(binaryConverter("101"));
