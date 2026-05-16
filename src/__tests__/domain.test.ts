import { describe, it, expect, beforeEach } from "vitest";
import * as store from "../store.js";
import { listTodos, createTodo, toggleTodo, deleteTodo } from "../domain/todos.js";

beforeEach(() => {
  store.clear();
});

describe("listTodos", () => {
  it("returns an empty array when no todos exist", () => {
    const result = listTodos({ db: store });
    expect(result).toEqual([]);
  });

  it("returns all todos", () => {
    store.add("Task 1");
    store.add("Task 2");
    const result = listTodos({ db: store });
    expect(result).toHaveLength(2);
  });
});

describe("createTodo", () => {
  it("creates and returns a new todo", () => {
    const result = createTodo({ db: store, input: { title: "New Task" } });
    expect(result.title).toBe("New Task");
    expect(result.completed).toBe(false);
    expect(result.id).toBeDefined();
  });
});

describe("toggleTodo", () => {
  it("toggles the completed status", () => {
    const todo = store.add("Task 1");
    expect(todo.completed).toBe(false);
    const result = toggleTodo({ db: store, input: { id: todo.id } });
    expect(result.completed).toBe(true);
  });

  it("throws for non-existent todo", () => {
    expect(() => toggleTodo({ db: store, input: { id: "999" } })).toThrow();
  });
});

describe("deleteTodo", () => {
  it("deletes and returns success", () => {
    const todo = store.add("Task 1");
    const result = deleteTodo({ db: store, input: { id: todo.id } });
    expect(result.success).toBe(true);
    expect(store.getAll()).toHaveLength(0);
  });

  it("returns false for non-existent todo", () => {
    const result = deleteTodo({ db: store, input: { id: "999" } });
    expect(result.success).toBe(false);
  });
});
