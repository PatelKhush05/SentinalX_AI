function HealthCard({ services }) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6">

      <h3 className="text-xl font-bold text-slate-800">
        Application Health
      </h3>

      <p className="text-slate-500 mt-1 mb-6">
        Core services powering the Task Management application.
      </p>

      <div className="space-y-4">
        {services.map((service) => (
          <div
            key={service.name}
            className="flex items-center justify-between border-b border-slate-100 pb-3 last:border-none"
          >
            <div className="flex items-center gap-3">
              <span className={`w-3 h-3 rounded-full ${service.color}`}></span>

              <span className="font-medium text-slate-800">
                {service.name}
              </span>
            </div>

            <div className="flex items-center gap-8 text-sm">
              <span className="text-green-600 font-medium">
                {service.status}
              </span>

              <span className="text-slate-500">
                {service.uptime}
              </span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default HealthCard;