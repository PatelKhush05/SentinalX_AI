import {
  FaBug,
  FaUserCheck,
  FaSearch,
  FaTools,
  FaCheckCircle,
} from "react-icons/fa";

const activities = [
  {
    title: "Incident Created",
    description: "Backend API exceeded the response time threshold.",
    time: "10:15 AM",
    icon: <FaBug />,
    color: "bg-red-100 text-red-600",
  },
  {
    title: "Assigned to DevOps Team",
    description: "Incident assigned for investigation.",
    time: "10:17 AM",
    icon: <FaUserCheck />,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Investigation Started",
    description: "Logs and monitoring metrics analyzed.",
    time: "10:20 AM",
    icon: <FaSearch />,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    title: "Fix Applied",
    description: "Backend container restarted successfully.",
    time: "10:28 AM",
    icon: <FaTools />,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Incident Resolved",
    description: "System returned to normal operation.",
    time: "10:34 AM",
    icon: <FaCheckCircle />,
    color: "bg-green-100 text-green-600",
  },
];

function IncidentActivity() {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6">

      <h2 className="text-2xl font-bold text-slate-800 mb-6">
        Incident Activity
      </h2>

      <div className="space-y-6">

        {activities.map((activity, index) => (

          <div key={index} className="flex gap-4">

            <div className="flex flex-col items-center">

              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center text-lg ${activity.color}`}
              >
                {activity.icon}
              </div>

              {index !== activities.length - 1 && (
                <div className="w-1 flex-1 bg-slate-200 mt-2 rounded-full"></div>
              )}

            </div>

            <div className="pb-6">

              <h3 className="font-semibold text-slate-800">
                {activity.title}
              </h3>

              <p className="text-slate-500 text-sm mt-1">
                {activity.description}
              </p>

              <p className="text-xs text-slate-400 mt-2">
                {activity.time}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default IncidentActivity;