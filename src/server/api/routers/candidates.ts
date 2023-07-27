import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const candidatesRouter = createTRPCRouter({
  getAll: publicProcedure
    .input(z.object({ text: z.string().optional() }))
    .query(async ({ input }) => {
      await fetch("https://app.hirechain.xyz/api/tech-test");

      return {
        data: [],
      };
    }),
});
