"use strict";

// node calculadora.js suma 10 20
// node calculadora.js resta 100 33
// node calculadora.js multiplica 100 33
// node calculadora.js divide 100 33

// LANG=es node calculadora suma 10 20
// LANG=en node calculadora suma 10 20

// El resultado de multiplicar X e Y es: Z
// The result of adding X and Y is: Z

const { suma, resta, multiplica, divide } = require("./lib/operations");
const operation_translations = require("./lib/translations.js");

const valid_operations = ["suma", "resta", "multiplica", "divide"];
const valid_languages = ["es", "en"];

// Detecto lenguage

// Aquí estamos creando una variable de entorno LANG a través del comando env
let language = process.env.LANG || "es";

// Aquí ponemos como idioma predeterminado el "es"
if (!valid_languages.includes(language)) {
  language = "es";
}

// Gestiono argumentos y hago que con argv no me muestre los dos primeros valores
const [operation, valueA, valueB] = process.argv.slice(2);

// Compruebo que existan los argumentos que necesito
if (!operation || !valueA || !valueB) {
  console.log("Faltan argumentos");
  process.exit();
}

// Detecto operation
if (!valid_operations.includes(operation)) {
  console.log(
    "La operación no es válida, tiene que ser: suma, resta, multiplica o divide"
  );

  process.exit();
}

// Compruebo que los valores son numéricos

const vA = Number(valueA);
const vB = Number(valueB);

if (isNaN(vA) || isNaN(vB)) {
  console.log("Los valores no son numéricos");
  process.exit();
}

// Hago los cálculos

let result;

switch (operation) {
  case "suma":
    result = suma(vA, vB);
    break;
  case "resta":
    result = resta(vA, vB);
    break;
  case "multiplica":
    result = multiplica(vA, vB);
    break;
  case "divide":
    result = divide(vA, vB);
    break;
}

if (language === "es") {
  console.log(
    `El resultado de ${operation_translations[operation][language]} ${vA} y ${vB} es ${result}`
  );
} else if (language === "en") {
  console.log(
    `The result of ${operation_translations[operation][language]} ${vA} and ${vB} is ${result}`
  );
}
