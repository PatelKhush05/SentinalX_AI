import { FaRobot, FaPaperPlane, FaServer, FaBug, FaProjectDiagram, FaDatabase } from "react-icons/fa";

function AIAssistant() {
  return (
    <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 rounded-3xl shadow-xl overflow-hidden">

      {/* Header */}

      <div className="flex justify-between items-center px-8 py-6 border-b border-white/20">

        <div className="flex items-center gap-4">

          <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">

            <FaRobot className="text-white text-3xl" />

          </div>

          <div>

            <h2 className="text-3xl font-bold text-white">
              Cloud SentinalX AI Assistant
            </h2>

            <p className="text-indigo-100">
              Ask AI about infrastructure, monitoring, security and deployments.
            </p>

          </div>

        </div>

        <span className="px-4 py-2 rounded-full bg-green-500 text-white font-semibold">
          AI ONLINE
        </span>

      </div>

      {/* Body */}

      <div className="p-8">

        <input
          type="text"
          placeholder="Ask anything about your infrastructure..."
          className="w-full rounded-2xl border-none px-6 py-5 text-lg outline-none bg-white shadow"
        />

        {/* Quick Actions */}

        <div className="flex flex-wrap gap-4 mt-6">

          <button className="px-5 py-3 rounded-xl bg-white/15 hover:bg-white/25 transition text-white flex items-center gap-2">

            <FaServer />

            Analyze Backend

          </button>

          <button className="px-5 py-3 rounded-xl bg-white/15 hover:bg-white/25 transition text-white flex items-center gap-2">

            <FaBug />

            Explain Incident

          </button>

          <button className="px-5 py-3 rounded-xl bg-white/15 hover:bg-white/25 transition text-white flex items-center gap-2">

            <FaProjectDiagram />

            Review Pipeline

          </button>

          <button className="px-5 py-3 rounded-xl bg-white/15 hover:bg-white/25 transition text-white flex items-center gap-2">

            <FaDatabase />

            Optimize Database

          </button>

        </div>

        {/* Analyze Button */}

        <div className="flex justify-end mt-8">

          <button className="px-8 py-4 rounded-2xl bg-white text-indigo-700 font-bold flex items-center gap-3 hover:scale-105 transition">

            Analyze with AI

            <FaPaperPlane />

          </button>

        </div>

      </div>

    </div>
  );
}

export default AIAssistant;