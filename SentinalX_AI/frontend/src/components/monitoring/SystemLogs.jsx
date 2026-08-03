const logs = [
  {
    time: "10:15 AM",
    level: "INFO",
    message: "Backend API started successfully.",
  },
  {
    time: "10:18 AM",
    level: "SUCCESS",
    message: "Connected to PostgreSQL database.",
  },
  {
    time: "10:22 AM",
    level: "WARNING",
    message: "Memory usage reached 72%.",
  },
  {
    time: "10:25 AM",
    level: "ERROR",
    message: "Prometheus service is offline.",
  },
];

function SystemLogs() {
  const badgeColor = (level) => {
    switch (level) {
      case "SUCCESS":
        return "bg-green-100 text-green-700";
      case "WARNING":
        return "bg-yellow-100 text-yellow-700";
      case "ERROR":
        return "bg-red-100 text-red-700";
      default:
        return "bg-blue-100 text-blue-700";
    }
  };

  return (
    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6">

      <h2 className="text-2xl font-bold text-slate-800 mb-6">
        System Logs
      </h2>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b border-slate-200">

              <th className="text-left pb-4">Time</th>
              <th className="text-left pb-4">Level</th>
              <th className="text-left pb-4">Message</th>

            </tr>

          </thead>

          <tbody>

            {logs.map((log, index) => (

              <tr
                key={index}
                className="border-b border-slate-100 hover:bg-slate-50"
              >

                <td className="py-4">{log.time}</td>

                <td>

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${badgeColor(
                      log.level
                    )}`}
                  >
                    {log.level}
                  </span>

                </td>

                <td>{log.message}</td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default SystemLogs;