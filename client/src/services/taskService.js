import axios from 'axios';

const API = import.meta.env.VITE_API_URL;

export const getTasks = () => axios.get(API);
export const createTask = (task) => axios.post(API, task);
export const toggleTask = (id) => axios.patch(`${API}/${id}`);
export const deleteTask = (id) => axios.delete(`${API}/${id}`);
