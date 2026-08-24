import { z } from "zod";

// TODO: Define createTodoSchema — title must be a non-empty string, max 100 chars
export const createTodoSchema = z.object({
  title: z.string().min(1).max(100),
});

// TODO: Define toggleTodoSchema — id must be a string
export const toggleTodoSchema = z.object({
  id: z.string(),
});

// TODO: Define deleteTodoSchema — id must be a string
export const deleteTodoSchema = z.object({
  id: z.string(),
});
