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

          <h1 className="text-3xl font-bold text-emerald-600">
            TaskFlow
          </h1>

          <p className="text-gray-500 text-sm mt-1">
            Smart Task Management
          </p>

        </div>

        {/* Menu */}

        <nav className="mt-6 px-4 space-y-2">

          {menuItems.map((item) => (

        <NavLink
           key={item.name}
           to={item.path}
           className={({ isActive }) =>
           `w-full flex items-center gap-3 px-4 py-3 rounded-xl transition text-left ${
           isActive
           ? "bg-emerald-600 text-white"
           : "text-gray-700 hover:bg-slate-100"
     }`
  }
>
  {item.icon}
  {item.name}
</NavLink>
 
  ))}

</nav>
      </div>

      {/* Logout */}

      <div className="p-4 border-t">

        
<button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-100 transition cursor-pointer">
          <FaSignOutAlt />

          Logout

        </button>

      </div>

    </div>
  );
}

export default Sidebar;