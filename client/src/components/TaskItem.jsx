export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <div className="flex justify-between items-center bg-white shadow p-3 rounded mb-2">
      <span
        className={`cursor-pointer ${task.completed ? 'line-through text-gray-500' : ''}`}
        onClick={() => onToggle(task._id)}
      >
        {task.title}
      </span>
      <button
        onClick={() => onDelete(task._id)}
        className="text-red-500 hover:text-red-700"
      >
        ✕
      </button>
    </div>
  );
}
