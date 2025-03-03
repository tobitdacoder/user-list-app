import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/tasks/'; // Django API endpoint

export const getTasks = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const addTask = async (task) => {
    const response = await axios.post(API_URL, task);
    return response.data;
};

export const updateTask = async (id, updatedTask) => {
    const response = await axios.put(`${API_URL}${id}/`, updatedTask);
    return response.data;
};

export const deleteTask = async (id) => {
    await axios.delete(`${API_URL}${id}/`);
};
