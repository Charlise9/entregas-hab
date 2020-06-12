/* Programa que:

node miniaturizer.js --input-dir=./images --output-dir=./miniatures --size=400 --watermark=hackaboss.png

    - leer las imágenes del directorio, sólo las jpg y png (hecho)
    - crear una miniatura de 400x400 pixeles
    - ponerle una marca de agua
    - crear directorio_destino si no existe
    - guardar las miniaturas en directorio_destino */

"use strict";

const fs = require("fs").promises;
const path = require("path");
const sharp = require("sharp");
const minimist = require("minimist");
const uuid = require("uuid");

async function miniaturizer({ inputDir, outputDir, size = 400, watermark }) {
  const inputDirectory = path.join(__dirname, inputDir);
  const outputDirectory = path.join(__dirname, outputDir);
  const waterMarkImage = path.join(__dirname, watermark);

  try {
    //comprobar que existe inputDir y si no dar un error y salir
    try {
      const inputDirectoryInfo = await fs.stat(inputDirectory);
      if (!inputDirectoryInfo.isDirectory()) {
        throw new Error();
      }
    } catch (error) {
      throw new Error(
        "El directorio de imágenes no existe o no es un directorio"
      );
    }

    // comprobar que existe outputDirectory y si no crearlo

    try {
      await fs.mkdir(outputDirectory);
    } catch (error) {
      console.log("El directorio de destino ya existe");
    }

    // leer el contenido de inputDir
    const inputDirectoryContents = await fs.readdir(inputDirectory);

    // filtrar las imágenes que no tengan formatos soportados (sólo png y jp(e)g)
    const validImageExtensions = [".png", ".jpg", ".jpeg"];

    const validImages = inputDirectoryContents.filter((file) => {
      return validImageExtensions.includes(path.extname(file));
    });

    for (const image of validImages) {
      console.log(`Procesando imagen: ${image}`);

      //cargar las imágenes en sharp
      const processedImage = sharp(path.join(inputDirectory, image));

      //cambiar el tamaño
      processedImage.resize(size);

      //poner marca de agua si está definido watermark
      if (watermark) {
        processedImage.composite([
          {
            input: waterMarkImage,
            gravity: "southeast",
          },
        ]);
      }
      //guardar en directorio destino
      await processedImage.toFile(
        path.join(outputDirectory, `mini_${uuid.v1()}_${image}`)
      );
    }
  } catch (error) {
    console.error(error.message);
  }
}

// Procesar argumentos
const args = minimist(process.argv.slice(2));

// El directorio origen y el destino son obligatorios si no están salgo del programa
if (!args["input-dir"] || !args["output-dir"]) {
  console.error("Los parámetros --input-dir y --output-dir son obligatorios");
  process.exit();
}

// Meto los argumentos en variables más fáciles de manejar
const inputDir = args["input-dir"];
const outputDir = args["output-dir"];
const size = args.size;
const watermark = args.watermark;

miniaturizer({
  inputDir,
  outputDir,
  watermark,
  size,
});
