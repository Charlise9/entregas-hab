/* Programa que:

node miniaturizer.js --input-dir=<directori_origen> --output-dir=<directorio_destino>

    - leer las imágenes del directorio, sólo las jpg y png (hecho)
    - crear una miniatura de 400x400 pixeles
    - ponerle una marca de agua
    - crear directorio_destino si no existe
    - guardar las miniaturas en directorio_destino */

"use strict";

const fs = require("fs").promises;
const path = require("path");
const sharp = require("sharp");

async function selectPics(dir) {
  try {
    // Comprobar que el directorio existe
    let directoryContents;

    try {
      directoryContents = await fs.readdir(dir);
      //console.log("El directorio contiene:", directoryContents);
    } catch (error) {
      throw new Error("El directorio no existe o no puedo leer su contenido");
    }

    // Que sólo muestre los jpg y png
    /* console.log(path.extname(directoryContents[0])); */

    for (let i = 0; i < directoryContents.length; i++) {
      if (
        path.extname(directoryContents[i]) === ".jpg" ||
        path.extname(directoryContents[i]) === ".png"
      ) {
        return directoryContents[i];
        /* console.log(directoryContents[i]); */
      }
    }
  } catch (error) {
    console.error(error.message);
  }
}

async function miniaturizer() {
  /* const inputDir = process.argv.slice(2);
  const outputDir = process.argv.slice(3);
  const pathNameInput = path.join(__dirname, inputDir);
  const pathNameOutput = path.join(__dirname, outputDir);
  const fileData = await selectPics(pathNameInput);
  const directoryExists = await fs.exists(pathNameOutput);
 */
  /* if (!directoryExists) {
    console.log("El directorio no existe por tanto lo creo");
    await fs.mkdir(pathNameOutput);
  } */

  // For con el sharp
  /* for (const pic of fileData) {
    const image = sharp(pic);
    image.resize(400, 400, {
      fit: "contain",
    });

    await image.toFile("./mini-pic.jpg");
  } */
  const inputDir = process.argv.slice(2);
  const pathNameInput = path.join(__dirname, inputDir);
  const fileData = await selectPics(pathNameInput);

  const newDir = "./mini-pics";

  try {
    await fs.access(newDir);
    console.log(`El directorio ${newDir} ya existe`);
  } catch (error) {
    await fs.mkdir(newDir);
    console.log(`El directorio ${newDir} fue creado`);
  }
}

miniaturizer();

// En la consola estoy escribiendo "node miniaturizer.js ./original-pics ./mini-pics"
