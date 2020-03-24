"use strict";

/* let binaryNumber = "157";

for (let i = binaryNumber.length - 1; i >= 0; i--) {
  console.log(binaryNumber[i]);
}
 */

function binaryConverter(string) {
  let decimal = +0;
  let bits = +1;
  for (let i = 0; i < string.length; i++) {
    let currNum = +string[string.length - i - 1];
    if (currNum === 1) {
      decimal += bits;
    }
    bits *= 2;
  }
  console.log(decimal);
}
