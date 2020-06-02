"use strict";

class TodoList {
  constructor(form, list, keyName) {
    this.keyName = keyName;

    this.todos = [];

    const storedTodos = JSON.parse(window.localStorage.getItem(this.keyName));

    if (storedTodos) {
      this.todos = storedTodos;
    }
  }

  addTodo(text) {
    if (text.length === 0) throw new Error("El texto del todo está vacío");

    const newTodo = {
      text: text,
      done: false,
    };

    this.todos.unshift(newTodo);

    this.sync();
  }

  deleteAllTodos() {
    this.todos = [];

    this.sync();
  }

  toggleTodoStatus(index) {
    const todo = this.todos[index];

    todo.done = !todo.done;

    this.sync();
  }

  cleanTodoList() {
    const cleanList = this.todos.filter((todo) => !todo.done);

    this.todos = cleanList;

    this.sync();
  }

  sync() {
    window.localStorage.setItem(this.keyName, JSON.stringify(this.todos));
  }
}

// Selecciono los elementos
const form = document.querySelector("form#add-todo");
const list = document.querySelector("ul#todos");

//Instancia de la clase!
const myTodos = new TodoList(form, list, "stored-todos");
