import { Hono } from "hono";
import { signup } from "../controllers/auth.controller";
import { ENV } from "../../env";


const authRoute = new Hono<ENV>();

authRoute.post('/signup',signup);

export {authRoute};