import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRouter from "./routes/authRouter.js";

const app = express();
app.use(cors());
dotenv.config();
app.use(express.json());

const PORT = process.env.PORT;

app.use("/app/auth", authRouter);

app.listen(PORT, () => console.log(`app started on ${PORT}`));

export default app;
