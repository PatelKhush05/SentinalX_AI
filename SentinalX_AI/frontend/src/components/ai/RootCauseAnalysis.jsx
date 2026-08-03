import {
  FaBrain,
  FaBug,
  FaServer,
  FaDatabase,
  FaBolt,
  FaLightbulb,
} from "react-icons/fa";

function RootCauseAnalysis() {
  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">

      {/* Header */}

      <div className="flex justify-between items-center px-8 py-5 border-b">

        <div className="flex items-center gap-3">

          <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center">

            <FaBrain className="text-indigo-600 text-xl" />

          </div>

          <div>

            <h2 className="text-2xl font-bold text-slate-800">
              AI Root Cause Analysis
            </h2>

            <p className="text-sm text-slate-500">
              Intelligent incident diagnosis
            </p>

          </div>

        </div>

        <span className="px-4 py-2 rounded-full bg-green-100 text-green-700 font-semibold">
          92% Confidence
        </span>

      </div>

      {/* Body */}

      <div className="p-8 space-y-8">

        {/* Problem */}

        <div className="rounded-2xl bg-red-50 border border-red-200 p-5">

          <div className="flex items-center gap-3">

            <FaBug className="text-red-600 text-xl" />

            <h3 className="text-lg font-bold text-red-700">
              Problem Detected
            </h3>

          </div>

          <p className="mt-3 text-slate-700 text-lg">
            Backend API response time has exceeded the configured threshold.
          </p>

        </div>

        {/* Possible Causes */}

        <div>

          <h3 className="text-xl font-bold text-slate-800 mb-5">
            Possible Causes
          </h3>

          <div className="space-y-4">

            <div className="flex items-center gap-4 border rounded-xl p-4">

              <FaServer className="text-orange-500" />

              <span>CPU utilization is higher than normal.</span>

            </div>

            <div className="flex items-center gap-4 border rounded-xl p-4">

              <FaDatabase className="text-blue-600" />

              <span>PostgreSQL latency has increased.</span>

            </div>

            <div className="flex items-center gap-4 border rounded-xl p-4">

              <FaBolt className="text-yellow-500" />

              <span>Large number of incoming API requests.</span>

            </div>

          </div>

        </div>

        {/* Recommendation */}

        <div className="rounded-2xl bg-purple-50 border border-purple-200 p-6">

          <div className="flex items-center gap-3">

            <FaLightbulb className="text-purple-600 text-xl" />

            <h3 className="text-xl font-bold text-purple-700">
              AI Recommendation
            </h3>

          </div>

          <ul className="mt-4 space-y-3 text-slate-700">

            <li>✔ Restart the Backend API container.</li>

            <li>✔ Optimize PostgreSQL queries.</li>

            <li>✔ Monitor CPU utilization for the next 30 minutes.</li>

          </ul>

          <button className="mt-6 px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition">

            Run Diagnosis Again

          </button>

        </div>

      </div>

    </div>
  );
}

export default RootCauseAnalysis;