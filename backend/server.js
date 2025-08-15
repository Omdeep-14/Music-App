import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRouter from "./routes/authRouter.js";
import userRouter from "./routes/userRouter.js";
import connectDb from "./config/db.js";
import path from "path";
import session from "express-session";
import cookieParser from "cookie-parser";

const app = express();
app.use(cors());
dotenv.config();
app.use(express.json());

const PORT = process.env.PORT;

app.use("/avatars", express.static(path.join(process.cwd(), "public/avatars")));
app.use(cors());

app.use("/app/auth", authRouter);
app.use("/app/user/profile", userRouter);

const startServer = async () => {
  try {
    await connectDb();
    app.listen(PORT, () => console.log(`App started on port ${PORT}`));
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();

export default app;
