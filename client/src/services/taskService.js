import axios from 'axios';

const API = 'http://localhost:5000/api/tasks';

export const getTasks = () => axios.get(API);
export const createTask = (task) => axios.post(API, task);
export const toggleTask = (id) => axios.patch(`${API}/${id}`);
export const deleteTask = (id) => axios.delete(`${API}/${id}`);
