// server/routes/taskRoutes.js
import express from 'express';
import { getTasks, createTask, toggleTask, deleteTask } from '../controllers/taskController.js';

const router = express.Router();

router.get('/', getTasks);
router.post('/', createTask);
router.patch('/:id', toggleTask);
router.delete('/:id', deleteTask);

export default router;
