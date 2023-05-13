import { z } from "zod";
import { createTRPCRouter,protectedProcedure } from "../trpc";

export const userRouter = createTRPCRouter({
    getUserStats:protectedProcedure
    .input(z.object({name:z.string()}))
    .query(async ({ ctx,input }) => {
        const { name } = input;
        const user  = await ctx.prisma.user.findOne({
            where:{
                name,
            },
            include: {
                foodStats: true,
              },
        });
        return user.foodStats;
    })
})