import { describe, it, expect, beforeEach } from "vitest";
import * as store from "../store.js";
import { todoRouter } from "../routers/todo.js";

beforeEach(() => {
  store.clear();
});

describe("todoRouter", () => {
  it("exports a router object", () => {
    expect(todoRouter).toBeDefined();
  });
});
