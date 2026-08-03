import {
  FaExclamationTriangle,
  FaInfoCircle,
  FaCheckCircle,
} from "react-icons/fa";

const alerts = [
  {
    title: "Prometheus Offline",
    message: "Metrics collection service is currently unavailable.",
    type: "critical",
  },
  {
    title: "Grafana Offline",
    message: "Visualization dashboard is not responding.",
    type: "warning",
  },
  {
    title: "Backend API Healthy",
    message: "Backend service is running normally.",
    type: "success",
  },
];

function AlertsPanel() {
  const getStyle = (type) => {
    switch (type) {
      case "critical":
        return {
          bg: "bg-red-50",
          border: "border-red-200",
          icon: <FaExclamationTriangle className="text-red-600" />,
          title: "text-red-700",
        };

      case "warning":
        return {
          bg: "bg-yellow-50",
          border: "border-yellow-200",
          icon: <FaInfoCircle className="text-yellow-600" />,
          title: "text-yellow-700",
        };

      default:
        return {
          bg: "bg-green-50",
          border: "border-green-200",
          icon: <FaCheckCircle className="text-green-600" />,
          title: "text-green-700",
        };
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">

      <h2 className="text-2xl font-bold text-slate-800 mb-6">
        Active Alerts
      </h2>

      <div className="space-y-4">

        {alerts.map((alert, index) => {
          const style = getStyle(alert.type);

          return (
            <div
              key={index}
              className={`${style.bg} ${style.border} border rounded-xl p-4 flex gap-4 items-start`}
            >
              <div className="text-xl mt-1">
                {style.icon}
              </div>

              <div>
                <h3 className={`font-semibold ${style.title}`}>
                  {alert.title}
                </h3>

                <p className="text-slate-600 text-sm mt-1">
                  {alert.message}
                </p>
              </div>
            </div>
          );
        })}

      </div>
    </div>
  );
}

export default AlertsPanel;