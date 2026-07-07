import {
  FaBriefcase,
  FaBook,
  FaHeartbeat,
  FaLaptopCode,
  FaUserFriends,
  FaPlus,
} from "react-icons/fa";

const categories = [
  {
    id: 1,
    name: "Work",
    tasks: 12,
    icon: <FaBriefcase />,
    color: "bg-blue-500",
  },
  {
    id: 2,
    name: "Study",
    tasks: 8,
    icon: <FaBook />,
    color: "bg-emerald-500",
  },
  {
    id: 3,
    name: "Development",
    tasks: 15,
    icon: <FaLaptopCode />,
    color: "bg-purple-500",
  },
  {
    id: 4,
    name: "Health",
    tasks: 5,
    icon: <FaHeartbeat />,
    color: "bg-red-500",
  },
  {
    id: 5,
    name: "Personal",
    tasks: 9,
    icon: <FaUserFriends />,
    color: "bg-yellow-500",
  },
];

function Categories() {
  return (
    <div>

      {/* Header */}

      <div className="flex justify-between items-center">

        <div>

          <h1 className="text-3xl font-bold">
            Categories
          </h1>

          <p className="text-gray-500 mt-2">
            Organize your tasks into categories
          </p>

        </div>

        <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 rounded-xl flex items-center gap-2">

          <FaPlus />

          Add Category

        </button>

      </div>

      {/* Categories */}

      <div className="grid grid-cols-3 gap-6 mt-8">

        {categories.map((category) => (

          <div
            key={category.id}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
          >

            <div
              className={`${category.color} w-14 h-14 rounded-xl flex items-center justify-center text-white text-2xl`}
            >
              {category.icon}
            </div>

            <h2 className="text-xl font-bold mt-5">
              {category.name}
            </h2>

            <p className="text-gray-500 mt-2">
              {category.tasks} Tasks
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Categories;