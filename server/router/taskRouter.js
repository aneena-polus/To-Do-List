import express from "express";
import { getTaskById, addTaskToList, deleteTaskFromList, updateTaskInList } from "../controllers/taskController.js";

const router = express();

router.get("/:id", getTaskById);          
router.post("/", addTaskToList);           
router.delete("/:id", deleteTaskFromList); 
router.put("/:id", updateTaskInList);      

export default router;
