"use strict";

function longestWord(string) {
  let phrase = string.split(" ");
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

console.log(longestWord("Hoy es un día estupendo y fantástico"));
