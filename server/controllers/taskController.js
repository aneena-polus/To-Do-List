import Task from "../model/taskSchema.js";

export const getTaskById = async (req, res) => {
    try {
        const { id } = req.params;
        const tasks = await Task.find({ createUser: id });
        res.json(tasks);
    } catch (err) {
        console.error("Error fetching tasks:", err);
    }
}

export const addTaskToList = async (req, res) => {
    try {
        const { subject, comment, createUser, createTimestamp } = req.body;
        const newTask = new Task({ subject, comment, createUser, createTimestamp });
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
        if (result) {
            res.status(200).json({ message: "Data deleted successfully" });
        } else {
            res.status(404).json({ message: "Task not found" });
        }
    } catch (err) {
        console.error("Error deleting data:", err);
        res.status(500).json({ error: "Error deleting data" });
    }
}

export const updateTaskInList = async (req, res) => {
    try {
        const { id } = req.params;
        const { subject, comment } = req.body;
        const updatedTask = await Task.findByIdAndUpdate(
            id,
            { subject, comment },
            { new: true }
        );
        if (updatedTask) {
            res.status(200).json(updatedTask);
        } else {
            res.status(404).json({ message: "Data not found" });
        }
    } catch (err) {
        console.error("Error updating data:", err);
        res.status(500).json({ error: "Error updating data" });
    }
}
