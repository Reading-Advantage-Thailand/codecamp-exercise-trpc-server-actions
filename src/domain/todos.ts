import type * as store from "../store.js";

type DB = typeof store;

export function listTodos({ db }: { db: DB }) {
  return db.getAll();
}

export function createTodo({ db, input }: { db: DB; input: { title: string } }) {
  return db.add(input.title);
}

export function toggleTodo({ db, input }: { db: DB; input: { id: string } }) {
  const todo = db.getById(input.id);
  if (!todo) throw new Error("Todo not found");
  return db.update(input.id, { completed: !todo.completed })!;
}

export function deleteTodo({ db, input }: { db: DB; input: { id: string } }) {
  const success = db.remove(input.id);
  return { success };
}
