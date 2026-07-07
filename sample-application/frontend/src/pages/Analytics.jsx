import {
  FaTasks,
  FaCheckCircle,
  FaClock,
  FaChartLine,
} from "react-icons/fa";

const stats = [
  {
    title: "Total Tasks",
    value: 124,
    icon: <FaTasks />,
    color: "bg-blue-500",
  },
  {
    title: "Completed",
    value: 96,
    icon: <FaCheckCircle />,
    color: "bg-green-500",
  },
  {
    title: "Pending",
    value: 28,
    icon: <FaClock />,
    color: "bg-yellow-500",
  },
  {
    title: "Productivity",
    value: "82%",
    icon: <FaChartLine />,
    color: "bg-purple-500",
  },
];

function Analytics() {
  return (
    <div>

      {/* Header */}

      <h1 className="text-3xl font-bold">
        Analytics
      </h1>

      <p className="text-gray-500 mt-2">
        Track your productivity and task performance
      </p>

      {/* Cards */}

      <div className="grid grid-cols-4 gap-6 mt-8">

        {stats.map((item) => (

          <div
            key={item.title}
            className="bg-white rounded-2xl shadow-lg p-6"
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

              <div className={`${item.color} p-4 rounded-xl text-white text-2xl`}>

                {item.icon}

              </div>

            </div>

          </div>

        ))}

      </div>

      {/* Weekly Progress */}

      <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">

        <h2 className="text-xl font-bold mb-6">
          Weekly Productivity
        </h2>

        <div className="space-y-5">

          {[
            { day: "Monday", value: 80 },
            { day: "Tuesday", value: 60 },
            { day: "Wednesday", value: 95 },
            { day: "Thursday", value: 70 },
            { day: "Friday", value: 88 },
          ].map((day) => (

            <div key={day.day}>

              <div className="flex justify-between mb-2">

                <span>{day.day}</span>

                <span>{day.value}%</span>

              </div>

              <div className="bg-gray-200 rounded-full h-3">

                <div
                  className="bg-emerald-600 h-3 rounded-full"
                  style={{ width: `${day.value}%` }}
                ></div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default Analytics;