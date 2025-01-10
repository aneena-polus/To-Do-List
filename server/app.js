import express from "express";
import dotenv from "dotenv";
import taskRouter from "./router/taskRouter.js";
import loginRouter from "./router/loginRouter.js";
import { connectDb } from "./config/connection.js";

dotenv.config();
const app = express();
connectDb();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use("/data", loginRouter); 
app.use("/data", taskRouter); 

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
