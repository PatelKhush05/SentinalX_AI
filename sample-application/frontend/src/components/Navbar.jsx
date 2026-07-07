import {
  FaSearch,
  FaBell,
  FaPlus,
  FaUserCircle,
  FaChevronDown,
} from "react-icons/fa";

function Navbar() {
  return (
    <div className="bg-white rounded-2xl shadow-sm px-8 py-4 flex items-center justify-between">

      {/* Search Bar */}
      <div className="relative w-80">

        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

        <input
          type="text"
          placeholder="Search tasks..."
          className="w-full border border-gray-300 rounded-xl py-3 pl-11 pr-4 outline-none focus:ring-2 focus:ring-emerald-500"
        />

      </div>

      {/* Right Section */}
      <div className="flex items-center gap-5">

        {/* Notification */}
        <button className="relative text-gray-500 hover:text-emerald-600 transition">

          <FaBell className="text-2xl" />

          {/* Notification Dot */}
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>

        </button>

        {/* Add Task */}
        <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-xl flex items-center gap-2 font-medium transition shadow">

          <FaPlus />

          <span>Add</span>

        </button>

        {/* Profile */}
        <button className="flex items-center gap-3 hover:bg-slate-100 px-3 py-2 rounded-xl transition">

          <FaUserCircle className="text-4xl text-gray-500" />

          <div className="text-left">

            <h3 className="font-semibold text-gray-800">
              Khush
            </h3>

            <p className="text-xs text-gray-500">
              Admin
            </p>

          </div>

          <FaChevronDown className="text-gray-500 text-sm" />

        </button>

      </div>

    </div>
  );
}

export default Navbar;