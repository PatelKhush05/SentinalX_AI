import {
  FaBell,
  FaCog,
  FaSearch,
  FaChevronDown,
} from "react-icons/fa";

function Topbar() {
  return (
    <header className="bg-white rounded-3xl shadow-sm border border-slate-200 px-8 py-5 flex items-center justify-between">

      {/* Left Section */}
      <div>
        <h1 className="text-3xl font-bold text-slate-800">
          Dashboard
        </h1>

        <p className="text-slate-500 mt-1">
          Welcome back! Here's what's happening with your infrastructure today.
        </p>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-5">

        {/* Search */}
        <div className="flex items-center gap-3 bg-slate-100 rounded-xl px-4 py-3 w-80">
          <FaSearch className="text-slate-400" />

          <input
            type="text"
            placeholder="Search applications, services..."
            className="bg-transparent outline-none w-full text-sm"
          />
        </div>

        {/* Notification */}
        <button className="w-12 h-12 rounded-xl bg-slate-100 hover:bg-blue-100 flex items-center justify-center transition">
          <FaBell className="text-slate-600" />
        </button>

        {/* Settings */}
        <button className="w-12 h-12 rounded-xl bg-slate-100 hover:bg-blue-100 flex items-center justify-center transition">
          <FaCog className="text-slate-600" />
        </button>

        {/* User */}
        <button className="flex items-center gap-3 px-4 py-2 rounded-xl hover:bg-slate-100 transition">

          <div className="w-11 h-11 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
            KP
          </div>

          <div className="text-left">
            <p className="font-semibold text-slate-800">
              Khush Patel
            </p>

            <p className="text-xs text-slate-500">
              Administrator
            </p>
          </div>

          <FaChevronDown className="text-slate-500" />

        </button>

      </div>

    </header>
  );
}

export default Topbar;