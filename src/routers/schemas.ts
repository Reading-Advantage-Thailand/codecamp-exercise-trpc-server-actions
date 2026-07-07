import { z } from "zod";

// Define createTodoSchema — title must be a non-empty string, max 100 chars
export const createTodoSchema = z.object({
  title: z
    .string()
    .min(1, { message: "Title is required" })
    .max(100, { message: "Title must be 100 characters or fewer" }),
});

// Define toggleTodoSchema — id must be a string
export const toggleTodoSchema = z.object({
  id: z.string().min(1, { message: "Todo ID is required" }),
});

// Define deleteTodoSchema — id must be a string
export const deleteTodoSchema = z.object({
  id: z.string().min(1, { message: "Todo ID is required" }),
});
