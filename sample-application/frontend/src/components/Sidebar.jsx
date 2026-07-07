import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaTasks,
  FaCalendarAlt,
  FaFolderOpen,
  FaChartBar,
  FaTags,
  FaUser,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

const menuItems = [
  {
    name: "Dashboard",
    icon: <FaHome />,
    path: "/dashboard",
  },
  {
    name: "My Tasks",
    icon: <FaTasks />,
    path: "/tasks",
  },
  {
    name: "Calendar",
    icon: <FaCalendarAlt />,
    path: "/calendar",
  },
  {
    name: "Projects",
    icon: <FaFolderOpen />,
    path: "/projects",
  },
  {
    name: "Analytics",
    icon: <FaChartBar />,
    path: "/analytics",
  },
  {
    name: "Categories",
    icon: <FaTags />,
    path: "/categories",
  },
  {
    name: "Profile",
    icon: <FaUser />,
    path: "/profile",
  },
  {
    name: "Settings",
    icon: <FaCog />,
    path: "/settings",
  },
];

function Sidebar() {
  return (
    <div className="w-64 min-h-screen bg-white shadow-xl flex flex-col justify-between">

      {/* Logo */}

      <div>

        <div className="p-6 border-b">

          <div className="flex items-center gap-3">

            <div className="w-12 h-12 rounded-xl bg-emerald-600 flex items-center justify-center text-white text-2xl">

              📋

            </div>

            <div>

              <h1 className="text-2xl font-bold text-emerald-600">
                TaskFlow
              </h1>

              <p className="text-xs text-gray-500">
                Smart Task Management
              </p>

            </div>

          </div>

        </div>

        {/* Navigation */}

        <nav className="mt-6 px-4 space-y-2">

          {menuItems.map((item) => (

            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-4 px-5 py-3 rounded-xl font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-emerald-600 text-white shadow-lg"
                    : "text-gray-700 hover:bg-emerald-50 hover:text-emerald-600"
                }`
              }
            >

              <span className="text-lg">
                {item.icon}
              </span>

              <span>
                {item.name}
              </span>

            </NavLink>

          ))}

        </nav>

      </div>

      {/* Logout */}

      <div className="p-4 border-t">

        <button className="w-full flex items-center gap-4 px-5 py-3 rounded-xl text-red-500 hover:bg-red-50 hover:text-red-600 transition-all duration-300">

          <FaSignOutAlt className="text-lg" />

          <span className="font-medium">
            Logout
          </span>

        </button>

      </div>

    </div>
  );
}

export default Sidebar;