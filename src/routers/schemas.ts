import { z } from "zod";

export const createTodoSchema = z.object({
  title: z.string().min(1, "Title is required").max(100, "Title too long"),
});

export const toggleTodoSchema = z.object({
  id: z.string(),
});

export const deleteTodoSchema = z.object({
  id: z.string(),
});
