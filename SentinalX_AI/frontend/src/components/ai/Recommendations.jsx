import {
  FaCheckCircle,
  FaDocker,
  FaDatabase,
  FaServer,
  FaChartLine,
} from "react-icons/fa";

const recommendations = [
  {
    icon: <FaDatabase />,
    title: "Optimize PostgreSQL",
    impact: "+15% Performance",
    color: "text-blue-600",
  },
  {
    icon: <FaServer />,
    title: "Increase Backend Workers",
    impact: "Lower Response Time",
    color: "text-green-600",
  },
  {
    icon: <FaDocker />,
    title: "Clean Docker Images",
    impact: "Recover 4.2 GB",
    color: "text-purple-600",
  },
  {
    icon: <FaChartLine />,
    title: "Enable Prometheus",
    impact: "Improve Monitoring",
    color: "text-orange-500",
  },
];

function Recommendations() {
  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 h-full">

      <div className="flex items-center gap-3 mb-6">

        <FaCheckCircle className="text-green-600 text-2xl" />

        <h2 className="text-2xl font-bold text-slate-800">
          AI Recommendations
        </h2>

      </div>

      <div className="space-y-4">

        {recommendations.map((item, index) => (

          <div
            key={index}
            className="border rounded-2xl p-4 hover:shadow-md transition"
          >

            <div className="flex items-center gap-3">

              <div className={`text-2xl ${item.color}`}>
                {item.icon}
              </div>

              <div>

                <h3 className="font-semibold text-slate-800">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-500">
                  Expected Impact: {item.impact}
                </p>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Recommendations;