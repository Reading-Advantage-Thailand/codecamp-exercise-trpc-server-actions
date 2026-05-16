import type * as store from "../store.js";

type DB = typeof store;

export function listTodos({ db }: { db: DB }) {
  // TODO: Return all todos from the store
  throw new Error("Not implemented");
}

export function createTodo({ db, input }: { db: DB; input: { title: string } }) {
  // TODO: Add a new todo using db.add() and return it
  throw new Error("Not implemented");
}

export function toggleTodo({ db, input }: { db: DB; input: { id: string } }) {
  // TODO: Get the todo by ID, flip its completed status, return it
  // Throw an error if the todo is not found
  throw new Error("Not implemented");
}

export function deleteTodo({ db, input }: { db: DB; input: { id: string } }) {
  // TODO: Remove the todo by ID, return { success: true/false }
  throw new Error("Not implemented");
}
