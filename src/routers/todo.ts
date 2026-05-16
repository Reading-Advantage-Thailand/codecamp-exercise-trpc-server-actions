import { router, publicProcedure } from "../trpc.js";
import { createTodoSchema, toggleTodoSchema, deleteTodoSchema } from "./schemas.js";
import { listTodos, createTodo, toggleTodo, deleteTodo } from "../domain/todos.js";

// TODO: Create a tRPC router with these procedures:
// - list: a query that calls listTodos({ db: ctx.db })
// - create: a mutation with createTodoSchema input that calls createTodo
// - toggle: a mutation with toggleTodoSchema input that calls toggleTodo
// - delete: a mutation with deleteTodoSchema input that calls deleteTodo

export const todoRouter = router({});
