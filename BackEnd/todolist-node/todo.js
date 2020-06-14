"use strict";

const minimist = require("minimist");
const chalk = require("chalk");
const {
  addTodo,
  markAsDone,
  markAsUndone,
  listTodos,
  cleanTodos,
} = require("./lib/actions");

async function todoList() {
  const args = minimist(process.argv.slice(2));

  const { _, priority, list, done, undone, clean } = args;

  if (list) {
    // Listar todoList
    await listTodos();
    console.log("listo todos los todos");
    process.exit();
  }

  if (done) {
    // Marcar el todo número "done" como hecho
    await markAsDone(done);
    /* console.log(`Marco el todo ${done} como HECHO`); */
    process.exit();
  }

  if (undone) {
    // Marcar el todo número "undone" como no hecho
    await markAsUndone(undone);
    console.log(`Marco el todo ${undone} como PENDIENTE`);
    process.exit();
  }

  if (clean) {
    // Borro de la lista todos hechos
    await cleanTodos();
    console.log(`Borro los todos ya hechos`);
    process.exit();
  }

  const newTodo = _.join(" ");

  if (newTodo.length > 0) {
    // Añadir newTodo a la lista
    await addTodo({
      text: newTodo,
      priority: !!priority /* ? true : false */, // esto sería como poner priority: !!priority;
    });

    process.exit();
  } else {
    console.log("Nada que hacer");
  }
}

todoList();
