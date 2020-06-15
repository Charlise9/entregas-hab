const fs = require("fs").promises;
const path = require("path");
const os = require("os");
const { formatDistanceToNow } = require("date-fns");
const { es } = require("date-fns/locale");
const chalk = require("chalk");

const todoFile = path.join(os.homedir(), ".tasks.json");

// Lee la lista de todos y devuelve el contenido
async function readTodoList() {
  try {
    let todos;

    try {
      const todoListContent = await fs.readFile(todoFile);
      todos = JSON.parse(todoListContent.toString());
    } catch (error) {
      todos = { todos: [] };
      await fs.writeFile(todoFile, JSON.stringify({ todos: [] }));
    }

    // todos es un objeto de js
    return todos;
  } catch (error) {
    console.error(error);
  }
}

// Guarda la lista de todos
async function saveTodos(todoList) {
  try {
    await fs.writeFile(todoFile, JSON.stringify({ todos: todoList }));
  } catch (error) {
    console.error(error.message);
  }
}

async function addTodo({ text, priority }) {
  console.log(
    `Has añadido ${chalk.blue(
      `${text}`
    )} a la lista, con prioridad: ${chalk.blue(`${priority}`)}`
  );
  // Abrir la lista actual de todos
  const { todos } = await readTodoList();

  // Añadir el todo que recibe al principio
  todos.unshift({
    text,
    done: false,
    priority,
    date: Date.now(),
  });

  await saveTodos(todos);
  // Guardar la lista actualizada
}

async function markAsDone(index) {
  // Abrir la lista actual de todos
  const { todos } = await readTodoList();

  // Comprobar que el index puesto existe
  if (index > todos.length) {
    console.error("Has seleccionado una tarea que no existe");
    return;
  }

  // Buscar el todo con el index que recibe
  const task = todos[index - 1];
  // Modificar el objeto del todo como done: true
  task.done = true;
  console.log(
    `Acabas de marcar ${chalk.blue(`${task.text}`)}  como ${chalk.green(
      "HECHO"
    )}`
  );

  try {
    // Guardar la lista actualizada
    await saveTodos(todos);
  } catch (error) {
    throw new Error(error);
  }
}

async function markAsUndone(index) {
  // Abrir la lista actual de todos
  const { todos } = await readTodoList();

  // Comprobar que el index puesto existe
  if (index > todos.length) {
    console.error("Has seleccionado una tarea que no existe");
    return;
  }

  // Buscar el todo con el index que recibe
  const task = todos[index - 1];
  // Modificar el objeto del todo como done: false
  task.done = false;
  console.log(
    `Acabas de marcar ${chalk.blue(`${task.text}`)}  como ${chalk.red(
      "PENDIENTE"
    )}`
  );

  try {
    // Guardar la lista actualizada
    await saveTodos(todos);
  } catch (error) {
    throw new Error(error);
  }
}

// Función para ordenar por prioridad y poner chalk
function printTasks(tasks, arePriority) {
  const color = arePriority ? "red" : "blue";
  for (const task of tasks) {
    console.log(chalk[color].bold(task.text));
    console.log(chalk[color](task.date));
    console.log(task.done ? chalk.green("HECHO") : chalk.yellow("PENDIENTE"));
    console.log("");
  }
}

async function listTodos() {
  try {
    // Abrir la lista actual de todos
    const { todos } = await readTodoList();

    if (todos.length === 0) {
      console.log("La lista está vacía, añade una tarea por favor");
    } else {
      // Ordenar los todos por priority
      const priorityTasks = [];
      const nonPriorityTasks = [];

      // hacer un bucle para poner la fecha y separar por prioridad
      for (const task of todos) {
        // Fecha
        task.date = `Tarea añadida hace ${formatDistanceToNow(task.date, {
          locale: es,
        })}`;

        // Separar por prioridad
        if (task.priority === true) {
          priorityTasks.push(task);
        } else {
          nonPriorityTasks.push(task);
        }
      }
      console.log("LISTA DE TAREAS");
      console.log(`En ${chalk.red.bold("rojo")} las de prioridad alta`);
      console.log("");

      printTasks(priorityTasks, true);
      printTasks(nonPriorityTasks, false);
    }
  } catch (error) {
    console.error(error);
  }
}

async function cleanTodos() {
  // Abrir la lista actual de todos
  const { todos } = await readTodoList();

  // Filtrar los que siguen sin estar hechos y guardarlos
  const noDone = todos.filter((task) => {
    return task.done !== true;
  });

  if (noDone.length === todos.length) {
    console.log("No hay tareas que borrar, aún tienes todo pendiente VAGO!!!!");
    return;
  }
  try {
    await saveTodos(noDone);
  } catch (error) {
    throw new Error(error);
  } finally {
    console.log("Las tareas han sido borradas");
  }
}

module.exports = {
  addTodo,
  markAsDone,
  markAsUndone,
  listTodos,
  cleanTodos,
};
