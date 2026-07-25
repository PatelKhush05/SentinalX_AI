import {
  FaHome,
  FaBoxes,
  FaCodeBranch,
  FaChartLine,
  FaExclamationTriangle,
  FaRobot,
  FaShieldAlt,
  FaCog,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const menuItems = [
  { name: "Overview", path: "/", icon: <FaHome /> },
  { name: "Applications", path: "/applications", icon: <FaBoxes /> },
  { name: "CI/CD", path: "/cicd", icon: <FaCodeBranch /> },
  { name: "Monitoring", path: "/monitoring", icon: <FaChartLine /> },
  { name: "Incidents", path: "/incidents", icon: <FaExclamationTriangle /> },
  { name: "Sentinal AI", path: "/ai", icon: <FaRobot /> },
  { name: "Security", path: "/security", icon: <FaShieldAlt /> },
  { name: "Settings", path: "/settings", icon: <FaCog /> },
];

function Sidebar() {
  return (
    <aside className="w-72 bg-slate-900 rounded-3xl shadow-xl flex flex-col overflow-hidden">

      {/* Logo */}
      <div className="px-8 py-8 border-b border-slate-800">
        <h1 className="text-3xl font-bold tracking-wide text-white">
          Sentinal<span className="text-blue-500">X</span>
        </h1>

        <p className="text-slate-400 text-sm mt-1">
          AI Powered DevOps Platform
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">

        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/"}
            className={({ isActive }) =>
              `group flex items-center gap-4 rounded-2xl px-5 py-4 transition-all duration-300 ${
                isActive
                  ? "bg-blue-600 text-white shadow-lg"
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"
              }`
            }
          >
            <span className="text-lg">{item.icon}</span>

            <span className="font-medium tracking-wide">
              {item.name}
            </span>
          </NavLink>
        ))}

      </nav>

      {/* Footer */}
      <div className="border-t border-slate-800 p-5">
        <div className="rounded-2xl bg-slate-800 p-4">
          <p className="text-white font-semibold">System Status</p>
          <p className="text-green-400 text-sm mt-1">
            ● All Services Healthy
          </p>
        </div>
      </div>

    </aside>
  );
}

export default Sidebar;