function Overview() {
  return (
    <div className="space-y-8">

      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-slate-800">
          Infrastructure Overview
        </h1>

        <p className="mt-2 text-slate-500 text-lg">
          Monitor your applications, infrastructure health, deployments, and AI insights from one place.
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-4 gap-6">

        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
          <p className="text-slate-500">CPU Usage</p>

          <h2 className="text-4xl font-bold mt-4 text-slate-800">
            28%
          </h2>

          <p className="text-green-600 mt-3">
            ↑ 5% from yesterday
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
          <p className="text-slate-500">Memory</p>

          <h2 className="text-4xl font-bold mt-4 text-slate-800">
            6.8 GB
          </h2>

          <p className="text-blue-600 mt-3">
            Stable
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
          <p className="text-slate-500">Applications</p>

          <h2 className="text-4xl font-bold mt-4 text-slate-800">
            12
          </h2>

          <p className="text-green-600 mt-3">
            All Running
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
          <p className="text-slate-500">Incidents</p>

          <h2 className="text-4xl font-bold mt-4 text-slate-800">
            2
          </h2>

          <p className="text-red-600 mt-3">
            Needs Attention
          </p>
        </div>

      </div>


    </div>
  );
}

export default Overview;