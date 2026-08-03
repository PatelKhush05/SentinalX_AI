import {
  FaCheckCircle,
  FaExclamationTriangle,
  FaArrowUp,
  FaLightbulb,
} from "react-icons/fa";

function AISummary() {
  return (
    <div className="bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden">

      {/* Header */}
      <div className="flex items-center justify-between px-8 py-5 border-b border-slate-200">

        <div className="flex items-center gap-3">

          <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-2xl">
            🤖
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-800">
              AI Infrastructure Summary
            </h2>

            <p className="text-slate-500 text-sm">
              AI generated infrastructure analysis
            </p>
          </div>

        </div>

        <span className="px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold">
          LIVE ANALYSIS
        </span>

      </div>

      {/* Body */}
      <div className="p-8 space-y-8">

        {/* Overall Health */}
        <div className="rounded-2xl bg-green-50 border border-green-200 p-5">

          <div className="flex items-center gap-3">

            <FaCheckCircle className="text-green-600 text-xl" />

            <h3 className="text-lg font-bold text-green-700">
              Overall Infrastructure Status
            </h3>

          </div>

          <p className="mt-3 text-slate-700 leading-7">
            Infrastructure is operating normally with an AI Health Score of
            <span className="font-bold text-green-700"> 94/100</span>.
            No critical incidents require immediate attention.
          </p>

        </div>

        {/* Service Analysis */}
        <div>

          <h3 className="text-lg font-bold text-slate-800 mb-5">
            Service Analysis
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <div className="flex justify-between items-center p-4 rounded-xl border border-slate-200">
              <span className="font-medium">Backend API</span>

              <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">
                Healthy
              </span>
            </div>

            <div className="flex justify-between items-center p-4 rounded-xl border border-slate-200">
              <span className="font-medium">PostgreSQL</span>

              <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">
                Stable
              </span>
            </div>

            <div className="flex justify-between items-center p-4 rounded-xl border border-slate-200">
              <span className="font-medium flex items-center gap-2">
                <FaArrowUp className="text-yellow-500" />
                Memory Trend
              </span>

              <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-sm font-medium">
                Rising
              </span>
            </div>

            <div className="flex justify-between items-center p-4 rounded-xl border border-slate-200">
              <span className="font-medium">Prometheus</span>

              <span className="px-3 py-1 rounded-full bg-red-100 text-red-700 text-sm font-medium">
                Offline
              </span>
            </div>

          </div>

        </div>

        {/* Recommendation */}

        <div className="rounded-2xl bg-blue-50 border border-blue-200 p-6">

          <div className="flex items-center gap-3">

            <FaLightbulb className="text-blue-600 text-xl" />

            <h3 className="text-lg font-bold text-blue-700">
              AI Recommendation
            </h3>

          </div>

          <p className="mt-3 text-slate-700 leading-7">
            Enable Prometheus monitoring to improve infrastructure visibility.
            If memory usage exceeds 80%, consider increasing backend worker
            instances to maintain optimal application performance.
          </p>

        </div>

      </div>

    </div>
  );
}

export default AISummary;