import { useState } from "react";

function AddTaskModal({
  onClose,
  onSave,
  initialData = null,
})  {

const [task, setTask] = useState(
  initialData || {
    title: "",
    priority: "Medium",
    category: "Study",
    dueDate: "",
    description: "",
  }
);

  const handleChange = (e) => {

    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });

  };

  const handleSave = () => {

    // Basic Validation
    if (task.title.trim() === "") {
      alert("Please enter a task title.");
      return;
    }

    onSave(task);

  };

  return (

    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

      <div className="bg-white rounded-3xl w-[650px] p-8 shadow-2xl">

        {/* Heading */}

       <h2 className="text-3xl font-bold mb-8">

  {initialData ? "Edit Task" : "Create New Task"}

</h2>

        {/* Title */}

        <div className="mb-5">

          <label className="block font-semibold mb-2">

            Task Title

          </label>

          <input
            type="text"
            name="title"
            value={task.title}
            onChange={handleChange}
            placeholder="Enter task title..."
            className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-emerald-500"
          />

        </div>

        {/* Priority & Category */}

        <div className="grid grid-cols-2 gap-5 mb-5">

          <div>

            <label className="block font-semibold mb-2">

              Priority

            </label>

            <select
              name="priority"
              value={task.priority}
              onChange={handleChange}
              className="w-full border rounded-xl p-3"
            >

              <option>Low</option>
              <option>Medium</option>
              <option>High</option>

            </select>

          </div>

          <div>

            <label className="block font-semibold mb-2">

              Category

            </label>

            <select
              name="category"
              value={task.category}
              onChange={handleChange}
              className="w-full border rounded-xl p-3"
            >

              <option>Study</option>
              <option>Work</option>
              <option>Personal</option>

            </select>

          </div>

        </div>

        {/* Due Date */}

        <div className="mb-5">

          <label className="block font-semibold mb-2">

            Due Date

          </label>

          <input
            type="date"
            name="dueDate"
            value={task.dueDate}
            onChange={handleChange}
            className="w-full border rounded-xl p-3"
          />

        </div>

        {/* Description */}

        <div>

          <label className="block font-semibold mb-2">

            Description

          </label>

          <textarea
            rows="4"
            name="description"
            value={task.description}
            onChange={handleChange}
            placeholder="Task description..."
            className="w-full border rounded-xl p-3"
          />

        </div>

        {/* Buttons */}

        <div className="flex justify-end gap-4 mt-8">

          <button
            onClick={onClose}
            className="bg-gray-200 hover:bg-gray-300 px-6 py-3 rounded-xl"
          >

            Cancel

          </button>

          <button
            onClick={handleSave}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl"
          >

          {initialData ? "Update Task" : "Save Task"}

          </button>

        </div>

      </div>

    </div>

  );

}

export default AddTaskModal;