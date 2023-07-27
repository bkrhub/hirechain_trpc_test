import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const exampleRouter = createTRPCRouter({
  candidates: publicProcedure
    .input(z.object({ text: z.string().optional() }))
    .query(async ({ input }) => {
      await fetch("https://app.hirechain.xyz/api/tech-test");

      return {
        data: [],
      };
    }),
});
