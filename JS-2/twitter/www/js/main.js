"use strict";

// SELECTORES
const button = document.querySelector("button.enviar");
const tweet = document.querySelector("textarea#tweet");
const wall = document.querySelector(".wall");

// CREADORES
const ul = document.createElement("ul");

const li = document.createElement("li");

wall.appendChild(ul);

const handleClick = function () {
  li.innerHTML = "hola";
  ul.appendChild(li);
};

button.addEventListener("click", handleClick);
