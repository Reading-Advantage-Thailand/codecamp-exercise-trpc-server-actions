export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
}

let nextId = 1;
const todos: Map<string, Todo> = new Map();

export function getAll(): Todo[] {
  return Array.from(todos.values());
}

export function getById(id: string): Todo | undefined {
  return todos.get(id);
}

export function add(title: string): Todo {
  const id = String(nextId++);
  const todo: Todo = { id, title, completed: false, createdAt: new Date() };
  todos.set(id, todo);
  return todo;
}

export function update(id: string, data: Partial<Pick<Todo, "title" | "completed">>): Todo | null {
  const todo = todos.get(id);
  if (!todo) return null;
  Object.assign(todo, data);
  return todo;
}

export function remove(id: string): boolean {
  return todos.delete(id);
}

export function clear(): void {
  todos.clear();
  nextId = 1;
}
