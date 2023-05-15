import { z } from "zod";
import { createTRPCRouter,protectedProcedure } from "../trpc";

export const userRouter = createTRPCRouter({
    getUserStats:protectedProcedure
    .input(z.object({name:z.string()}))
    .query(async ({ ctx,input }) => {
        const { name } = input;
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
        const user  = await ctx.prisma.user.findOne({
            where:{
                name,
            },
            include: {
                foodStats: true,
                foods:true,
            },
        });
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
        return user?.foodStats;
    }),
    createUserFoods:protectedProcedure
    .input(z.object({
        name: z.string().nonempty(),
  carbs: z.number().int().positive(),
  fats: z.number().int().positive(),
  protein: z.number().int().positive(),
  userId: z.string().nonempty(),
    }))
    .mutation(async ({ctx,input}) => {
        try{
            const { name, carbs, fats, protein, userId } = input;
            const user = await ctx.prisma.userFood.create({
            data: {
                name,
                carbs,
                fats,
                protein,
                user: { connect: { id: userId } },
            }
        })
    }catch(err){
        console.log(err)
    }

    })
})