import { Clerk } from "@clerk/clerk-sdk-node";
import dotenv from "dotenv";

dotenv.config();

const clerkClient = Clerk({ secretkey: process.env.CLERK_SECRET_KEY });

export default clerkClient;
