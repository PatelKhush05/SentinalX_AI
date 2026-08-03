import { Link } from "react-router-dom";
import {
  FaServer,
  FaDatabase,
  FaClock,
  FaRocket,
} from "react-icons/fa";

function ApplicationCard({
  id,
  name,
  status,
  environment,
  backend,
  database,
  uptime,
  deployment,
}) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 hover:shadow-md transition-all duration-300">

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">
            📦 {name}
          </h2>

          <p className="text-slate-500 mt-1">
            {environment} Environment
          </p>
        </div>

        <span
          className={`px-4 py-2 rounded-full text-sm font-medium ${
            status === "Running"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {status}
        </span>
      </div>

      {/* Information */}
      <div className="grid grid-cols-2 gap-6">

        <div className="flex items-center gap-3">
          <FaServer className="text-blue-600 text-xl" />

          <div>
            <p className="text-sm text-slate-500">Backend API</p>
            <p className="font-semibold">{backend}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <FaDatabase className="text-green-600 text-xl" />

          <div>
            <p className="text-sm text-slate-500">Database</p>
            <p className="font-semibold">{database}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <FaClock className="text-orange-500 text-xl" />

          <div>
            <p className="text-sm text-slate-500">Uptime</p>
            <p className="font-semibold">{uptime}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <FaRocket className="text-purple-600 text-xl" />

          <div>
            <p className="text-sm text-slate-500">
              Last Deployment
            </p>

            <p className="font-semibold">{deployment}</p>
          </div>
        </div>

      </div>

      {/* Footer */}
      <div className="mt-8 flex justify-end">

        <button className="text-blue-600 font-medium hover:underline">
            View Details →
       </button>

      </div>
    </div>
  );
}

export default ApplicationCard;