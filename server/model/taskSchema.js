import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    subject: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    createUser: {
        type: String,
        required: true
    },
    createTimestamp: {
        type: Date,
        required: true
    }
});

const Task = mongoose.model("Task", taskSchema);

export default Task;