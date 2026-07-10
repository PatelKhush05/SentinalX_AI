import { FaPlus, FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useTasks } from "../context/TaskContext";
import AddTaskModal from "../components/AddTaskModal";

function Tasks() {

  // Modal State
  const [showModal, setShowModal] = useState(false);

  const [selectedTask, setSelectedTask] = useState(null);
  // Tasks State
const {
  tasks,
  addTask,
  editTask,
  deleteTask,
  toggleTaskStatus,
} = useTasks();

  return (
    <div>

      {/* Header */}

      <div className="flex justify-between items-center">

        <div>

          <h1 className="text-3xl font-bold">
            My Tasks
          </h1>

          <p className="text-gray-500 mt-1">
            Manage your daily tasks
          </p>

        </div>

        <button
          onClick={() => {
  setSelectedTask(null);
  setShowModal(true);
}}
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 rounded-xl flex items-center gap-2"
        >

          <FaPlus />

          Add Task

        </button>

      </div>

      {/* Search */}

      <div className="relative mt-8">

        <FaSearch className="absolute left-4 top-4 text-gray-400" />

        <input
          type="text"
          placeholder="Search task..."
          className="w-full border rounded-xl py-3 pl-12 pr-4 outline-none focus:ring-2 focus:ring-emerald-500"
        />

      </div>

      {/* Task Cards */}

      <div className="grid gap-5 mt-8">

     {tasks.map((task) => (

  <div
    key={task.id}
    className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
  >

    <div className="flex justify-between">

      <div>

        <h2 className="text-xl font-bold">

          {task.title}

        </h2>

        <div className="flex gap-3 mt-4">

          <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">

            {task.category || "General"}

          </span>

          <span
            className={`px-3 py-1 rounded-full text-sm ${
              task.priority === "High"
                ? "bg-red-100 text-red-600"
                : task.priority === "Medium"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-green-100 text-green-600"
            }`}
          >

            {task.priority}

          </span>

          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">

            {task.status}

          </span>

        </div>

        <p className="text-gray-500 mt-4">

          {task.description || "No description"}

        </p>

        <p className="text-sm text-gray-400 mt-2">

          📅 {task.dueDate || "No Due Date"}

        </p>

      </div>

      <input
        type="checkbox"
        className="w-6 h-6 accent-emerald-600"
      />

    </div>

  <div className="flex gap-3 mt-6">

  <button
    onClick={() => {
      setSelectedTask(task);
      setShowModal(true);
    }}
    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
  >
    ✏ Edit
  </button>

  <button
    onClick={() => {
      if (window.confirm("Delete this task?")) {
        deleteTask(task.id);
      }
    }}
    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
  >
    🗑 Delete
  </button>

  <button
    onClick={() => toggleTaskStatus(task.id)}
    className={`px-4 py-2 rounded-lg text-white ${
      task.status === "Completed"
        ? "bg-yellow-500 hover:bg-yellow-600"
        : "bg-green-600 hover:bg-green-700"
    }`}
  >
    {task.status === "Completed"
      ? "↩ Mark Pending"
      : "✅ Complete"}
  </button>

</div>

  </div>

))}

      </div>

      {/* Modal */}

      {showModal && (

<AddTaskModal
  initialData={selectedTask}
  onClose={() => {
    setShowModal(false);
    setSelectedTask(null);
  }}
  onSave={(task) => {

    if (selectedTask) {

      editTask({
        ...task,
        id: selectedTask.id,
        status: selectedTask.status,
      });

    } else {

      addTask(task);

    }

    setSelectedTask(null);
    setShowModal(false);

  }}
/>
      )}

    </div>
  );
}

export default Tasks;