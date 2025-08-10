import { Context } from "hono";
import { setCookie } from "hono/cookie";
import { getPrisma } from "../lib/prisma";


export const signup = async (c: Context): Promise<Response> => {

    const body = await c.req.json();
    //const prisma = getPrisma(c.env);

    // setCookie(c,"accessToken","uhkuuvukvyv",)

    return c.text('Hello MadharChodo')
}

