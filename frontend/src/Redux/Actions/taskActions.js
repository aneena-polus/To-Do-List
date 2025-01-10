import { ActionTypes } from "../Constants/taskContants.js"

export const setTasks = (tasks) => ({
    type: ActionTypes.FETCH_TASKS,
    payload: tasks,
});

export const addTaskInList = (task) => ({
    type: ActionTypes.ADD_TASK,
    payload: task,
});

export const updateTaskInList = (updatedTask) => ({
    type: ActionTypes.UPDATE_TASK,
    payload: updatedTask,
});

export const deleteTaskfromList = (taskId) => ({
    type: ActionTypes.DELETE_TASK,
    payload: taskId,
});
