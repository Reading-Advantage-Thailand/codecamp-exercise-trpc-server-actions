import type * as store from "../store.js";

type DB = typeof store;

export function listTodos({ db }: { db: DB }) {
  // TODO: Return all todos from the store
  return db.getAll();
}

export function createTodo({ db, input }: { db: DB; input: { title: string } }) {
  // TODO: Add a new todo using db.add() and return it
  return db.add(input.title);
}

export function toggleTodo({ db, input }: { db: DB; input: { id: string } }) {
  // TODO: Get the todo by ID, flip its completed status, return it
  // Throw an error if the todo is not found
  // แก้ไขบรรทัดที่ 18 เป็นแบบนี้แทน:
const todo = db.getAll().find(t => t.id === input.id);
  if (!todo) {
    throw new Error("Todo not found");
  }
  todo.completed = !todo.completed;
  return todo;
}

export function deleteTodo({ db, input }: { db: DB; input: { id: string } }) {
  // TODO: Remove the todo by ID, return { success: true/false }
  const success = db.remove(input.id);
  return { success };
}
