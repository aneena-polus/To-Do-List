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
    status: {
        type: String,
        required: false
    },
    createUser: {
        type: String,
        required: true
    },
    createTimestamp: {
        type: Date,
        required: true
    },
    updateTimestamp: {
        type: Date,
        required: false
    }
});

const Task = mongoose.model("Task", taskSchema);

export default Task;