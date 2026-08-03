function BuildStatusBadge({ status }) {
  const styles = {
    Success: "bg-green-100 text-green-700",
    Failed: "bg-red-100 text-red-700",
    Running: "bg-yellow-100 text-yellow-700",
    Pending: "bg-slate-100 text-slate-600",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-sm font-medium ${
        styles[status] || styles.Pending
      }`}
    >
      {status}
    </span>
  );
}

export default BuildStatusBadge;