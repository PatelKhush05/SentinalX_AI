import {
  FaExclamationTriangle,
  FaMemory,
  FaHdd,
  FaMicrochip,
  FaShieldAlt,
} from "react-icons/fa";

const alerts = [
  {
    icon: <FaMemory />,
    title: "Memory Usage",
    prediction: "82% within 35 minutes",
    level: "High",
    color: "bg-red-100 text-red-700",
  },
  {
    icon: <FaHdd />,
    title: "Disk Usage",
    prediction: "90% within 2 days",
    level: "Medium",
    color: "bg-yellow-100 text-yellow-700",
  },
  {
    icon: <FaMicrochip />,
    title: "CPU Spike",
    prediction: "Expected during peak traffic",
    level: "Medium",
    color: "bg-orange-100 text-orange-700",
  },
  {
    icon: <FaShieldAlt />,
    title: "SSL Certificate",
    prediction: "Expires in 12 days",
    level: "Low",
    color: "bg-blue-100 text-blue-700",
  },
];

function PredictiveAlerts() {
  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 h-full">

      <div className="flex items-center gap-3 mb-6">

        <FaExclamationTriangle className="text-orange-500 text-2xl" />

        <h2 className="text-2xl font-bold text-slate-800">
          Predictive Alerts
        </h2>

      </div>

      <div className="space-y-4">

        {alerts.map((alert, index) => (

          <div
            key={index}
            className="border rounded-2xl p-4 hover:shadow-md transition"
          >

            <div className="flex justify-between items-center">

              <div className="flex items-center gap-3">

                <div className="text-xl">
                  {alert.icon}
                </div>

                <div>

                  <h3 className="font-semibold text-slate-800">
                    {alert.title}
                  </h3>

                  <p className="text-sm text-slate-500">
                    {alert.prediction}
                  </p>

                </div>

              </div>

              <span className={`px-3 py-1 rounded-full text-sm font-medium ${alert.color}`}>
                {alert.level}
              </span>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default PredictiveAlerts;