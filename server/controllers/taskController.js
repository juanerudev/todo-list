// server/controllers/taskController.js
import Task from '../models/Task.js';

export const getTasks = async (req, res) => {
  const tasks = await Task.find().sort({ createdAt: -1 });
  res.json(tasks);
};

export const createTask = async (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: 'Title is required' });

  const task = await Task.create({ title });
  res.status(201).json(task);
};

export const toggleTask = async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task) return res.status(404).json({ error: 'Not found' });

  task.completed = !task.completed;
  await task.save();
  res.json(task);
};

export const deleteTask = async (req, res) => {
  const task = await Task.findByIdAndDelete(req.params.id);
  if (!task) return res.status(404).json({ error: 'Not found' });

  res.json({ message: 'Deleted' });
};
