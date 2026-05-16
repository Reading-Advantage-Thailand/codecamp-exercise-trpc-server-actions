import { initTRPC } from "@trpc/server";

export interface Context {
  db: typeof import("./store.js");
}

const t = initTRPC.context<Context>().create();

export const router = t.router;
export const publicProcedure = t.procedure;
