import axios from 'axios';

export const getTasks = (selectedLimit) => {
    return axios.get(`https://to-do-list-00q9.onrender.com/data/getTask/${JSON.parse(localStorage.getItem('userData'))._id}/${selectedLimit}`);
};

export const addTask = (taskData) => {
    return axios.post('https://to-do-list-00q9.onrender.com/data/createTask', taskData);
};

export const updateTask = (taskId, taskData) => {
    return axios.put(`https://to-do-list-00q9.onrender.com/data/updatetask/${taskId}`, taskData);
};

export const updateStatus = (taskId, status) => {
    return axios.patch(`https://to-do-list-00q9.onrender.com/data/updateStatus/${taskId}`, {status});
};

export const deleteTasks = (taskId) => {
    return axios.delete(`https://to-do-list-00q9.onrender.com/data/deleteTask/${taskId}`);
};
