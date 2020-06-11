// un programa de node que te diga si esta es la primera vez que se ejecuta,
// y si no es la primera vez que se ejecuta te diga cuánto pasó desde la última vez que
// se ejecutó

"use strict";

const fs = require("fs").promises;
const path = require("path");
const { formatDistanceToNow } = require("date-fns");
const { es } = require("date-fns/locale");

const date = new Date();

const lastUsedDate = {
  useDate: date,
};

async function program(data, pathname) {
  try {
    const jsonContent = await fs.readFile(pathname);

    const usedDate = JSON.parse(jsonContent.toString()).useDate;

    const humanDistance = formatDistanceToNow(new Date(usedDate), {
      locale: es,
    });
    console.log(
      `Ha pasado ${humanDistance} desde la última vez que se usó el programa`
    );
  } catch (error) {
    const dataString = JSON.stringify(data, null, 2);

    await fs.writeFile(pathname, dataString);

    console.error("Esta es la primera vez que se ejecuta este programa");
  } finally {
    const dataString = JSON.stringify(data, null, 2);
    await fs.writeFile(pathname, dataString);
  }
}

program(lastUsedDate, path.join(__dirname, "date.json"));
