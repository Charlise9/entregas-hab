"use strict";

import { randomNumber as rn } from "/js/helpers.js";

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
    /* header.classList.add("alarm"); */
    header.style.color = "red";
    header.style.borderColor = "red";
    greeting.textContent = "ALARMA!!!";
    clearInterval(interval);
  } else {
    clock.textContent = `${hours}:${minutes}:${seconds}`;
    greeting.textContent = getGreeting(now.getHours());
    /* body.textContent = backgroundPhoto(now.getHours()); */

    const color = `rgb(${rn(255)},${rn(255)},${rn(255)})`;
    header.style.color = color;
    header.style.borderColor = color;
  }
}

function getGreeting(hour) {
  if (hour <= 6 || hour >= 22) return "Buenas noches";
  if (hour <= 12) return "Buenos días";
  return "buenas tardes";
}

function backgroundPhoto(hour) {
  if (hour <= 6 || hour >= 22) {
    body.classList.add("night");
  } else if (hour <= 12) {
    body.classList.add("morning");
  } else {
    body.classList.add("afternoon");
  }
}

writeClock();
const interval = setInterval(writeClock, 1000);
/* console.log(body.classList); */
