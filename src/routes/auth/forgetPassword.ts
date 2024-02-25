import { Hono } from "hono";

const register = new Hono();

register.post("/api/auth/register",(c)=>{
    return c.text("hello");
});
