import express from "express";
import dotenv from "dotenv";
import taskRouter from "./router/taskRouter.js";
import loginRouter from "./router/loginRouter.js";
import { connectDb } from "./config/connection.js";
import cookieParser from 'cookie-parser';
import cors from 'cors';

dotenv.config();
const app = express();
app.use(cors());
connectDb();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(cookieParser());
app.use("/data", loginRouter);
app.use("/data", taskRouter); 

app.listen(PORT, () => {
    console.log(`Server is running on https://to-do-list-00q9.onrender.com:${PORT}`);
});
