import { z } from "zod";
import { createTRPCRouter,protectedProcedure } from "../trpc";

export const userRouter = createTRPCRouter({
    getUserStats:protectedProcedure
    .input(z.object({name:z.string()}))
    .query(async ({ ctx,input }) => {
        const { name } = input;
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
        const user  = await ctx.prisma.user.findMany({
            where:{
                name:name,
            },
            include: {
                foodStats: true,
                foods:true,
                eatenFoods:true,
            },
        });
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
        return user;
    }),
    createUserFoods:protectedProcedure
    .input(z.object({
        name: z.string().nonempty(),
  carbs: z.number().int().positive(),
  fats: z.number().int().positive(),
  protein: z.number().int().positive(),
  userId: z.string().nonempty(),
  calories: z.number().int().positive(),
    }))
    .mutation(async ({ctx,input}) => {
        try{
            const { name, carbs, fats, protein, userId,calories } = input;
            const user = await ctx.prisma.userFood.create({
            data: {
                name:name,
                carbs:carbs,
                fats:fats,
                protein:protein,
                calories:calories,
                user: { connect: { id: userId } },
            },
        })
    }catch(err){
        console.log(err)
    }
    }),
    updateUserStats:protectedProcedure
    .input(z.object({
        id:z.string().nonempty(),
        protein:z.number().int(),
        carbs:z.number().int(),
        fats:z.number().int(),
        calories:z.number().int(),
    }))
    .mutation(({ctx,input}) => {
        const {id,protein,carbs,fats,calories} = input;
        return ctx.prisma.foodStats.update({
            where:{
                id:id
            },
            data:{
                protein,
                carbs,
                fats,
                calories
            }
        })
    })

})