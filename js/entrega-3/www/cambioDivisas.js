"use strict";

async function currencyExchange(quantity) {
  const ratesData = await fetch(
    "https://api.exchangerate-api.com/v4/latest/EUR"
  ).then((response) => {
    return response.json();
  });
  console.log(
    `${quantity}€ son ${
      Math.round(quantity * ratesData.rates.USD * 100) / 100
    }$.`
  );
  console.log(
    `${Math.round(quantity * ratesData.rates.USD * 100) / 100}$ son ${
      Math.round(quantity * ratesData.rates.JPY * 100) / 100
    }¥.`
  );
}

currencyExchange(prompt("Euros(€) a convertir en Dólares($) y Yenes(¥)"));
