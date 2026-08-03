function PipelineNode({ icon, title, status }) {
  const statusStyles = {
    Success: {
      badge: "bg-green-100 text-green-700",
      icon: "bg-green-100 text-green-600",
    },
    Running: {
      badge: "bg-yellow-100 text-yellow-700",
      icon: "bg-yellow-100 text-yellow-600",
    },
    Failed: {
      badge: "bg-red-100 text-red-700",
      icon: "bg-red-100 text-red-600",
    },
    Pending: {
      badge: "bg-slate-100 text-slate-600",
      icon: "bg-slate-100 text-slate-500",
    },
  };

  const current =
    statusStyles[status] || statusStyles.Pending;

  return (
    <div className="flex flex-col items-center">

      <div
        className={`w-20 h-20 rounded-full flex items-center justify-center text-3xl ${current.icon}`}
      >
        {icon}
      </div>

      <h3 className="mt-4 font-semibold text-slate-800">
        {title}
      </h3>

      <span
        className={`mt-2 px-3 py-1 rounded-full text-sm font-medium ${current.badge}`}
      >
        {status}
      </span>

    </div>
  );
}

export default PipelineNode;