
function IncidentTable({
  incidents,
  selectedIncident,
  onSelectIncident,
}) {

  const severityStyle = (severity) => {
    switch (severity) {
      case "Critical":
        return "bg-red-100 text-red-700";

      case "Medium":
        return "bg-yellow-100 text-yellow-700";

      default:
        return "bg-green-100 text-green-700";
    }
  };

  const statusStyle = (status) => {
    switch (status) {
      case "Resolved":
        return "bg-green-100 text-green-700";

      case "Investigating":
        return "bg-blue-100 text-blue-700";

      default:
        return "bg-yellow-100 text-yellow-700";
    }
  };

  return (
    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6">

      <h2 className="text-2xl font-bold text-slate-800 mb-6">
        Active Incidents
      </h2>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b border-slate-200">

              <th className="text-left pb-4">Incident ID</th>

              <th className="text-left pb-4">Severity</th>

              <th className="text-left pb-4">Service</th>

              <th className="text-left pb-4">Assigned To</th>

              <th className="text-left pb-4">Status</th>

              <th className="text-left pb-4">Created</th>

            </tr>

          </thead>

      <tbody>

  {incidents.map((incident) => (

    <tr
      key={incident.id}
      onClick={() => onSelectIncident(incident)}
      className={`border-b border-slate-100 cursor-pointer transition-colors ${
        selectedIncident?.id === incident.id
          ? "bg-blue-50"
          : "hover:bg-slate-50"
      }`}
    >

      <td className="py-4 font-semibold">
        {incident.id}
      </td>

      <td>
        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${severityStyle(
            incident.severity
          )}`}
        >
          {incident.severity}
        </span>
      </td>

      <td>{incident.service}</td>

      <td>{incident.assignedTo}</td>

      <td>
        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${statusStyle(
            incident.status
          )}`}
        >
          {incident.status}
        </span>
      </td>

      <td>{incident.created}</td>

    </tr>

  ))}

</tbody>

        </table>

      </div>

    </div>
  );
}

export default IncidentTable;