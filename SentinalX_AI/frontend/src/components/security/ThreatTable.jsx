import { threats } from "../../data/securityData";

function ThreatTable() {
  const severityStyle = (severity) => {
    switch (severity) {
      case "High":
        return "bg-red-100 text-red-700";

      case "Medium":
        return "bg-yellow-100 text-yellow-700";

      default:
        return "bg-green-100 text-green-700";
    }
  };

  const statusStyle = (status) => {
    switch (status) {
      case "Blocked":
        return "bg-red-100 text-red-700";

      case "Investigating":
        return "bg-blue-100 text-blue-700";

      default:
        return "bg-green-100 text-green-700";
    }
  };

  return (
    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6">

      <h2 className="text-2xl font-bold text-slate-800 mb-6">
        Threat Detection
      </h2>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b border-slate-200">

              <th className="text-left pb-4">Threat</th>

              <th className="text-left pb-4">Severity</th>

              <th className="text-left pb-4">Status</th>

              <th className="text-left pb-4">Source</th>

            </tr>

          </thead>

          <tbody>

            {threats.map((item) => (

              <tr
                key={item.id}
                className="border-b border-slate-100 hover:bg-slate-50"
              >

                <td className="py-4 font-medium">
                  {item.threat}
                </td>

                <td>

                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${severityStyle(item.severity)}`}>
                    {item.severity}
                  </span>

                </td>

                <td>

                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusStyle(item.status)}`}>
                    {item.status}
                  </span>

                </td>

                <td>{item.source}</td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default ThreatTable;