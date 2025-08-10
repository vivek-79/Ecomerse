import { PrismaClient } from "../generated/prisma";
import { ENV } from "../../env";
import { withAccelerate } from "@prisma/extension-accelerate";








export const getPrisma = (env:ENV['Bindings'])=>{

    return new PrismaClient({
        datasourceUrl:env.DATABASE_URL,
    }).$extends(withAccelerate())
};