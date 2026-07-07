import { FaPlus, FaSearch } from "react-icons/fa";

const tasks = [
  {
    id: 1,
    title: "React Assignment",
    priority: "High",
    status: "Pending",
  },
  {
    id: 2,
    title: "DevOps Notes",
    priority: "Medium",
    status: "Completed",
  },
  {
    id: 3,
    title: "AWS Revision",
    priority: "High",
    status: "Pending",
  },
  {
    id: 4,
    title: "Database Project",
    priority: "Low",
    status: "In Progress",
  },
];

function Tasks() {
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

        <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 rounded-xl flex items-center gap-2">

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
            className="bg-white rounded-2xl shadow p-6 flex justify-between items-center hover:shadow-lg transition"
          >

            <div>

              <h2 className="font-bold text-lg">
                {task.title}
              </h2>

              <div className="flex gap-3 mt-3">

                <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm">

                  {task.priority}

                </span>

                <span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-sm">

                  {task.status}

                </span>

              </div>

            </div>

            <input
              type="checkbox"
              className="w-6 h-6 accent-emerald-600"
            />

          </div>

        ))}

      </div>

    </div>
  );
}

export default Tasks;