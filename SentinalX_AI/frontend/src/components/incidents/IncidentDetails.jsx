function IncidentDetails({ incident }) {
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
      case "Investigating":
        return "bg-blue-100 text-blue-700";

      case "Resolved":
        return "bg-green-100 text-green-700";

      default:
        return "bg-yellow-100 text-yellow-700";
    }
  };

  if (!incident) {
    return (
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6">
        <h2 className="text-2xl font-bold text-slate-800">
          Incident Details
        </h2>

        <p className="mt-6 text-slate-500">
          Select an incident to view its details.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 self-start">

      <h2 className="text-2xl font-bold text-slate-800 mb-6">
        Incident Details
      </h2>

      <div className="space-y-5">

        <div>
          <p className="text-sm text-slate-500">Incident ID</p>
          <p className="font-semibold text-slate-800">
            {incident.id}
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">Severity</p>

          <span
            className={`inline-block mt-1 px-3 py-1 rounded-full text-sm font-medium ${severityStyle(
              incident.severity
            )}`}
          >
            {incident.severity}
          </span>

        </div>

        <div>
          <p className="text-sm text-slate-500">Status</p>

          <span
            className={`inline-block mt-1 px-3 py-1 rounded-full text-sm font-medium ${statusStyle(
              incident.status
            )}`}
          >
            {incident.status}
          </span>

        </div>

        <div>
          <p className="text-sm text-slate-500">Affected Service</p>

          <p className="font-semibold text-slate-800">
            {incident.service}
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">Assigned To</p>

          <p className="font-semibold text-slate-800">
            {incident.assignedTo}
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">Created</p>

          <p className="font-semibold text-slate-800">
            {incident.created}
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">Description</p>

          <p className="text-slate-700 mt-2 leading-7">
            {incident.description}
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">Resolution</p>

          <p className="text-slate-700 mt-2 leading-7">
            {incident.resolution}
          </p>
        </div>

      </div>

    </div>
  );
}

export default IncidentDetails;