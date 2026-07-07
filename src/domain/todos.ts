import type * as store from "../store.js";

// Use proper type inference from the store module instead of 'any'
type DB = typeof store;

export function listTodos({ db }: { db: DB }) {
  // Call the store's built-in method directly, avoiding complex auto-discovery
  return db.getAll();
}

export function createTodo({ db, input }: { db: DB; input: { title: string } }) {
  // Delegate to the store's add method
  return db.add(input.title);
}

export function toggleTodo({ db, input }: { db: DB; input: { id: string } }) {
  // Let the store handle its own data mutations safely
  return db.toggle(input.id);
}

export function deleteTodo({ db, input }: { db: DB; input: { id: string } }) {
  // Remove the record and return the success flag
  const success = db.remove(input.id);
  return { success };
}
