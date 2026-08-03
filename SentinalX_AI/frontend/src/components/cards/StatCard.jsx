function StatCard({
  title,
  value,
  status,
  statusColor = "text-green-600",
}) {
  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all duration-300">

      <p className="text-slate-500 text-sm font-medium">
        {title}
      </p>

      <h2 className="text-4xl font-bold text-slate-800 mt-4">
        {value}
      </h2>

      <p className={`mt-3 text-sm font-medium ${statusColor}`}>
        {status}
      </p>

    </div>
  );
}

export default StatCard;