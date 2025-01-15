import Task from "../model/taskSchema.js";
import { getTotalCount } from "../aggregation/taskCount.js";
import { getTask } from "../aggregation/getTask.js";

export const getTaskById = async (req, res) => {
    try {
        const { id, limit } = req.params;
        const tasks = await Task.aggregate(getTask(id, limit));
        const totalCount = await Task.aggregate(getTotalCount(id));
        res.json({tasks,totalCount: totalCount.length > 0 ? totalCount[0].taskCount : 0});          
    } catch (err) {
        console.error("Error fetching tasks", err);
    }
}

export const addTaskToList = async (req, res) => {
    try {
        const { subject, comment, status, createUser, createTimestamp } = req.body;
        const updateTimestamp = new Date();
        const newTask = new Task({ subject, comment, createUser, status, createTimestamp, updateTimestamp });
        await newTask.save();
        res.status(200).json(newTask);
    } catch (err) {
        console.error("Error adding data:", err);
        res.status(500).json({ error: "Error adding data" });
    }
}

export const deleteTaskFromList = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Task.findByIdAndDelete(id);
        result ? res.status(200).json({ message: "Data deleted successfully" }) : res.status(404).json({ message: "Task not found" });
    } catch (err) {
        console.error("Error deleting data:", err);
        res.status(500).json({ error: "Error deleting data" });
    }
}

export const updateTaskInList = async (req, res) => {
    try {
        const { id } = req.params;
        const { subject, comment, status } = req.body;
        const updateTimestamp = new Date();
        const updatedTask = await Task.findByIdAndUpdate(
            id,
            { subject, comment, status, updateTimestamp },
            { new: true }
        );
        updatedTask ? res.status(200).json(updatedTask) : res.status(404).json({ message: "Data not found" });
    } catch (err) {
        console.error("Error updating data:", err);
        res.status(500).json({ error: "Error updating data" });
    }
}

export const patchTaskInList = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        const updatedTask = await Task.findByIdAndUpdate( id, { status } );
        updatedTask ? res.status(200).json(updatedTask) : res.status(404).json({ message: "Task not found" });
    } catch (err) {
        console.error("Error updating data:", err);
        res.status(500).json({ error: "Error updating data" });
    }
};
