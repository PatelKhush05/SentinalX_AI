import {
  FaEdit,
  FaTrash,
  FaPlus,
} from "react-icons/fa";

const tasks = [
  {
    id: 1,
    title: "React Assignment",
    priority: "High",
    status: "Pending",
    dueDate: "10 Jul 2026",
  },
  {
    id: 2,
    title: "DevOps Notes",
    priority: "Medium",
    status: "Completed",
    dueDate: "08 Jul 2026",
  },
  {
    id: 3,
    title: "Database Project",
    priority: "High",
    status: "Pending",
    dueDate: "15 Jul 2026",
  },
  {
    id: 4,
    title: "UI Design",
    priority: "Low",
    status: "Completed",
    dueDate: "05 Jul 2026",
  },
];

function TaskTable() {
  return (
    <div className="bg-white rounded-2xl shadow p-6 mt-6">

      {/* Header */}

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-2xl font-bold">
          Recent Tasks
        </h2>

        <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-xl flex items-center gap-2">

          <FaPlus />

          New Task

        </button>

      </div>

      {/* Table */}

      <table className="w-full">

        <thead>

          <tr className="text-left border-b">

            <th className="py-3">Task</th>

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

              <td className="py-4 font-medium">
                {task.title}
              </td>

              <td>{task.priority}</td>

              <td>{task.status}</td>

              <td>{task.dueDate}</td>

              <td>

                <div className="flex gap-4">

                  <button className="text-blue-600 hover:text-blue-800">

                    <FaEdit />

                  </button>

                  <button className="text-red-600 hover:text-red-800">

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