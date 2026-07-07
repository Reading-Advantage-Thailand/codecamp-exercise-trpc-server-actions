import { router, publicProcedure } from "../trpc.js";
import {
  createTodoSchema,
  toggleTodoSchema,
  deleteTodoSchema,
} from "./schemas.js";
import {
  listTodos,
  createTodo,
  toggleTodo,
  deleteTodo,
} from "../domain/todos.js";

export const todoRouter = router({
  // Query procedure to retrieve all todo items from the in-memory store
  list: publicProcedure.query(({ ctx }) => {
    return listTodos({ db: ctx.db });
  }),

  // Mutation procedure to add a new todo, validated with createTodoSchema
  create: publicProcedure
    .input(createTodoSchema)
    .mutation(({ ctx, input }) => {
      return createTodo({ db: ctx.db, input });
    }),

  // Mutation procedure to toggle a todo's completed status, validated with toggleTodoSchema
  toggle: publicProcedure
    .input(toggleTodoSchema)
    .mutation(({ ctx, input }) => {
      return toggleTodo({ db: ctx.db, input });
    }),

  // Mutation procedure to remove a todo item by its unique ID, validated with deleteTodoSchema
  delete: publicProcedure
    .input(deleteTodoSchema)
    .mutation(({ ctx, input }) => {
      return deleteTodo({ db: ctx.db, input });
    }),
});
