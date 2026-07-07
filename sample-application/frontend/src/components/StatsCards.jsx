import {
  FaTasks,
  FaClock,
  FaCheckCircle,
  FaFire,
} from "react-icons/fa";

const stats = [
  {
    title: "Total Tasks",
    value: 24,
    icon: <FaTasks />,
    color: "bg-blue-500",
  },
  {
    title: "Pending",
    value: 8,
    icon: <FaClock />,
    color: "bg-yellow-500",
  },
  {
    title: "Completed",
    value: 16,
    icon: <FaCheckCircle />,
    color: "bg-green-500",
  },
  {
    title: "High Priority",
    value: 3,
    icon: <FaFire />,
    color: "bg-red-500",
  },
];

function StatsCards() {
  return (
    <div className="grid grid-cols-4 gap-6 mt-6">

      {stats.map((item) => (

        <div
          key={item.title}
          className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition"
        >

          <div className="flex justify-between items-center">

            <div>

              <p className="text-gray-500">
                {item.title}
              </p>

              <h2 className="text-3xl font-bold mt-2">
                {item.value}
              </h2>

            </div>

            <div
              className={`${item.color} text-white p-4 rounded-xl text-2xl`}
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