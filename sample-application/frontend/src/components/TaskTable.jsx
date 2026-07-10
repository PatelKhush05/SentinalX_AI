import {
  FaEdit,
  FaTrash,
  FaPlus,
} from "react-icons/fa";

import { useTasks } from "../context/TaskContext";

function TaskTable({
  onNewTask,
  onEditTask,
  onDeleteTask,
}) {

  const {
  tasks,
  toggleTaskStatus,
} = useTasks();

  return (
    <div className="bg-white rounded-2xl shadow p-6 mt-6">

      {/* Header */}

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-2xl font-bold">
          Recent Tasks
        </h2>

        <button
          onClick={onNewTask}
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-xl flex items-center gap-2 transition"
        >

          <FaPlus />

          New Task

        </button>

      </div>

      {/* Table */}

      <table className="w-full">

        <thead>

          <tr className="text-left border-b">

  <th className="py-3 w-12"></th>

  <th>Task</th>

  <th>Priority</th>

  <th>Status</th>

  <th>Due Date</th>

  <th>Actions</th>

</tr>

        </thead>

        <tbody>

          {tasks.map((task) => (

            <tr
              key={task.id}
              className="border-b hover:bg-slate-50"
            >
<td className="py-4">

  <input
    type="checkbox"
    checked={task.status === "Completed"}
    onChange={() => toggleTaskStatus(task.id)}
    className="w-5 h-5 accent-emerald-600 cursor-pointer"
  />

</td>
              <td
  className={`py-4 font-medium ${
    task.status === "Completed"
      ? "line-through text-gray-400"
      : ""
  }`}
>

  {task.title}

</td>

              <td>{task.priority}</td>

              <td>{task.status}</td>

              <td>{task.dueDate || "No Due Date"}</td>

              <td>

                <div className="flex gap-4">

                 <button
  onClick={() => onEditTask(task)}
  className="text-blue-600 hover:text-blue-800"
>

  <FaEdit />

</button>

                <button
  onClick={() => onDeleteTask(task.id)}
  className="text-red-600 hover:text-red-800"
>

  <FaTrash />

</button>

                </div>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default TaskTable;