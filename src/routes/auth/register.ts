import { Hono } from "hono";

const register = new Hono();

register.post("/api/auth/register", (c) => {
  return c.text("hello");
});

const app = new Hono();
app.route("/register", register);
