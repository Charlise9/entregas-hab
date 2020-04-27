"use strict";

/*Crear un falso e-commerce. Por un lado tenemos todos los artículos que forman
 el stock de la tienda. Tendremos también un usuario que añade cosas a su carrito,
 que es privado. Los artículos cuando los metemos al carrito los convertimos un tipo de
 dato que guarda las unidades del usuario de dicho artículo. La tienda es la
 encargada de imprimir un ticket por la consola.*/

const itemNames = ["Camisa", "Pantalon", "Calcetines"];
const itemPrices = [13, 27, 100];
//const items = Item.buildItems(itemNames, itemPrices);
//const myUser = new User();

class Item {
  itemType;
  price;

  constructor(itemType, price) {
    this.itemType = itemType;
    this.price = price;
  }
}

const inventary = itemNames.map((name, index) => {
  return new Item(name, itemPrices[index]);
});

class User {
  #carrito = [];

  addItems(item) {
    let foundItem = this.#carrito.find((element) => {
      return element.itemData.itemType === item.itemType;
    });
    if (foundItem) {
      foundItem.ammount++;
    } else {
      this.#carrito.push({ itemData: item, ammount: 1 });
    }
  }

  leerCarrito() {
    return this.#carrito;
  }
}

const myUser = new User();
myUser.addItems(inventary[0]);
myUser.addItems(inventary[0]);
myUser.addItems(inventary[0]);
myUser.addItems(inventary[1]);
myUser.addItems(inventary[2]);
myUser.addItems(inventary[2]);
myUser.addItems(inventary[2]);
myUser.addItems(inventary[2]);
myUser.addItems(inventary[2]);

class Shop {
  carrito;

  constructor(carrito) {
    this.carrito = carrito.leerCarrito();
  }
  getTicket() {
    this.carrito.map((element) => {
      return (element.precioPorElemento =
        element.ammount * element.itemData.price);
    });
    return this.carrito;
  }
  getTotal() {
    const total = this.carrito.reduce((precio, cadaItem) => {
      return precio + cadaItem.precioPorElemento;
    }, 0);
    return console.log(`La factura asciende a ${total} €`);
  }
}

const ticket = new Shop(myUser);

console.log(ticket.getTicket());
ticket.getTotal();
