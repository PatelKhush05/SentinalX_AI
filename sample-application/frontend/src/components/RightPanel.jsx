import {
  FaCalendarAlt,
  FaBullseye,
  FaStickyNote,
  FaChartLine,
} from "react-icons/fa";

function RightPanel() {
  return (
    <div className="w-80 bg-white shadow-lg p-6 flex flex-col gap-6">

      {/* Today's Schedule */}
      <div>

        <div className="flex items-center gap-2 mb-3">

          <FaCalendarAlt className="text-emerald-600" />

          <h2 className="font-bold text-lg">
            Today's Schedule
          </h2>

        </div>

        <div className="space-y-2 text-sm text-gray-600">

          <p>🕙 Team Meeting - 10:00 AM</p>

          <p>💻 React Practice - 2:00 PM</p>

        </div>

      </div>

      <hr />

      {/* Daily Goal */}

      <div>

        <div className="flex items-center gap-2 mb-3">

          <FaBullseye className="text-red-500" />

          <h2 className="font-bold text-lg">
            Daily Goal
          </h2>

        </div>

        <p className="text-gray-600">
          Complete 5 Tasks
        </p>

        <div className="w-full bg-gray-200 rounded-full h-3 mt-4">

          <div className="bg-emerald-500 h-3 rounded-full w-[70%]"></div>

        </div>

        <p className="text-sm text-gray-500 mt-2">
          70% Completed
        </p>

      </div>

      <hr />

      {/* Quick Notes */}

      <div>

        <div className="flex items-center gap-2 mb-3">

          <FaStickyNote className="text-yellow-500" />

          <h2 className="font-bold text-lg">
            Quick Notes
          </h2>

        </div>

        <p className="text-gray-600 text-sm">
          Don't forget to push today's work to GitHub.
        </p>

      </div>

      <hr />

      {/* Productivity */}

      <div>

        <div className="flex items-center gap-2 mb-3">

          <FaChartLine className="text-blue-500" />

          <h2 className="font-bold text-lg">
            Productivity
          </h2>

        </div>

        <h3 className="text-3xl font-bold text-emerald-600">
          82%
        </h3>

        <p className="text-gray-500 text-sm">
          This Week
        </p>

      </div>

    </div>
  );
}

export default RightPanel;