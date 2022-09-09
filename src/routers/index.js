import express from "express";
const app = express();
import bookRouter from "./booksRouter.js";
import userRouter from "./userRouter.js";

app.use("/api", [bookRouter, userRouter]);

export default app;
