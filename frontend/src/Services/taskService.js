import axios from 'axios';

export const getTasks = () => {
    return axios.get(`/api/${JSON.parse(localStorage.getItem('userData'))._id}`);
};

export const addTask = (taskData) => {
    return axios.post('/api', taskData);
};

export const updateTask = (taskId, taskData) => {
    return axios.put(`/api/${taskId}`, taskData);
};

export const deleteTasks = (taskId) => {
    return axios.delete(`/api/${taskId}`);
};
