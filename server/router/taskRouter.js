import express from "express";
import { getTaskById, addTaskToList, deleteTaskFromList, updateTaskInList, patchTaskInList } from "../controllers/taskController.js";
import { authorization } from "../middleware/authentication.js";

const router = express();
router.use(authorization);

router.get("/getTask/:id/:limit?", getTaskById);          
router.post("/createTask/", addTaskToList);           
router.delete("/deleteTask/:id", deleteTaskFromList); 
router.put("/updatetask/:id", updateTaskInList);      
router.patch("/updateStatus/:id", patchTaskInList);      

export default router;
