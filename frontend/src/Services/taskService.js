import axios from 'axios';

export const getTasks = (selectedLimit) => {
    return axios.get(`/api/getTask/${JSON.parse(localStorage.getItem('userData'))._id}/${selectedLimit}`);
};

export const addTask = (taskData) => {
    return axios.post('/api/createTask', taskData);
};

export const updateTask = (taskId, taskData) => {
    return axios.put(`/api/updatetask/${taskId}`, taskData);
};

export const updateStatus = (taskId, status) => {
    return axios.patch(`/api/updateStatus/${taskId}`, {status});
};

export const deleteTasks = (taskId) => {
    return axios.delete(`/api/deleteTask/${taskId}`);
};
