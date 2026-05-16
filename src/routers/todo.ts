import { router, publicProcedure } from "../trpc.js";
import { createTodoSchema, toggleTodoSchema, deleteTodoSchema } from "./schemas.js";
import { listTodos, createTodo, toggleTodo, deleteTodo } from "../domain/todos.js";

export const todoRouter = router({
  list: publicProcedure.query(({ ctx }) => listTodos({ db: ctx.db })),
  create: publicProcedure
    .input(createTodoSchema)
    .mutation(({ ctx, input }) => createTodo({ db: ctx.db, input })),
  toggle: publicProcedure
    .input(toggleTodoSchema)
    .mutation(({ ctx, input }) => toggleTodo({ db: ctx.db, input })),
  delete: publicProcedure
    .input(deleteTodoSchema)
    .mutation(({ ctx, input }) => deleteTodo({ db: ctx.db, input })),
});
