"use strict";

const form = document.querySelector("form");
const list = document.querySelector("ul#tweets");

const addTweet = (text) => {
  const li = document.createElement("li");

  const p = document.createElement("p");
  p.textContent = text;

  const footer = document.createElement("footer");

  const time = document.createElement("time");
  const now = new Date();
  time.textContent = `${now.getDate()}/${now.getMonth()}/${now.getFullYear()}`;

  const button = document.createElement("button");
  button.classList.add("action");
  button.textContent = "Borrar";

  footer.append(time);
  footer.append(button);

  li.append(p);
  li.append(footer);

  list.prepend(li);
};

const handleFormSubmit = (event) => {
  event.preventDefault();

  const input = form.querySelector("input#tweet");

  const text = input.value;

  if (text.length === 0 || text.length > 250) {
    alert("Sosio, escribe algo que no se pase de 250 caracteres");
  } else {
    addTweet(text);
    input.value = "";
  }
};

const handleListClick = (event) => {
  const target = event.target;

  if (target.matches("ul button.action")) {
    target.closest("li").remove();
  }
};

form.addEventListener("submit", handleFormSubmit);

document.body.addEventListener("click", handleListClick);
