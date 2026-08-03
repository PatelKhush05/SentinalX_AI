function ServiceHealth({ services }) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6">

      <h2 className="text-2xl font-bold text-slate-800">
        Backend Services
      </h2>

      <p className="text-slate-500 mt-1 mb-6">
        Current status of infrastructure services.
      </p>

      <div className="space-y-5">

        {services.map((service) => (

          <div
            key={service.name}
            className="flex items-center justify-between border-b border-slate-100 pb-4 last:border-none"
          >

            <div className="flex items-center gap-3">

              <span
                className={`w-3 h-3 rounded-full ${service.color}`}
              ></span>

              <div>

                <h3 className="font-semibold text-slate-800">
                  {service.name}
                </h3>

                <p className="text-sm text-slate-500">
                  {service.description}
                </p>

              </div>

            </div>

            <span className="text-sm font-medium text-green-600">
              {service.status}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}

export default ServiceHealth;