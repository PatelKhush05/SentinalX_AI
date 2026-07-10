import {
  FaTasks,
  FaClock,
  FaCheckCircle,
  FaFire,
} from "react-icons/fa";

import { useTasks } from "../context/TaskContext";

function StatsCards() {

  const { tasks } = useTasks();

  const totalTasks = tasks.length;

  const pendingTasks = tasks.filter(
    (task) => task.status === "Pending"
  ).length;

  const completedTasks = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const highPriorityTasks = tasks.filter(
    (task) => task.priority === "High"
  ).length;

  const stats = [
    {
      title: "Total Tasks",
      value: totalTasks,
      icon: <FaTasks />,
      color: "bg-blue-500",
    },
    {
      title: "Pending",
      value: pendingTasks,
      icon: <FaClock />,
      color: "bg-yellow-500",
    },
    {
      title: "Completed",
      value: completedTasks,
      icon: <FaCheckCircle />,
      color: "bg-green-500",
    },
    {
      title: "High Priority",
      value: highPriorityTasks,
      icon: <FaFire />,
      color: "bg-red-500",
    },
  ];

  return (

    <div className="grid grid-cols-4 gap-6 mt-6">

      {stats.map((item) => (

        <div
          key={item.title}
          className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 h-40"
        >

          <div className="flex justify-between h-full">

            {/* Left Side */}

            <div className="flex flex-col justify-between">

              <p className="text-gray-500 text-base font-semibold min-h-[48px] leading-6">

                {item.title}

              </p>

              <h2 className="text-4xl font-bold">

                {item.value}

              </h2>

            </div>

            {/* Right Side */}

            <div
              className={`${item.color} w-14 h-14 rounded-2xl flex items-center justify-center text-white text-xl shrink-0`}
            >

              {item.icon}

            </div>

          </div>

        </div>

      ))}

    </div>

  );
}

export default StatsCards;