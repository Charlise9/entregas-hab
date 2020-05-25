"use strict";

function letterCount(str) {
  let phrase = str.split(" ");
  let longest = 0;
  let word = null;
  for (let i = 0; i < phrase.length; i++) {
    if (longest < phrase[i].length) {
      longest = phrase[i].length;
      word = phrase[i];
    }
  }
  return word;
}

console.log(letterCount("Hoy es un día estupendo y fantástico"));
