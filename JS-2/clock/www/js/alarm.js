"use strict";

// Selecciono los elementos que voy a cambiar
const clock = document.querySelector("#hora");
const greeting = document.querySelector("#saludo");
const header = document.querySelector("header");
const body = document.querySelector("body");

// Añade el formato decimal a los números
function format(number) {
  if (number >= 10) return number;
  return "0" + number;
}

// Escribe la hora
function writeClock() {
  const now = new Date();

  /* now.setHours(20);
  now.setMinutes(28); */

  const hours = format(now.getHours());
  const minutes = format(now.getMinutes());
  const seconds = format(now.getSeconds());

  if (
    hours === +header.getAttribute("data-hour") &&
    minutes === +header.getAttribute("data-minute") &&
    seconds === +header.getAttribute("data-second")
  ) {
    clock.textContent = `${hours}:${minutes}:${seconds}`;
    header.classList.add("alarm");
    clearInterval(interval);
  } else {
    clock.textContent = `${hours}:${minutes}:${seconds}`;
  }
}

writeClock();
const interval = setInterval(writeClock, 1000);
