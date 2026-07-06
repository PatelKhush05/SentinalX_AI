import { Outlet } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import RightPanel from "../components/RightPanel";

function DashboardLayout() {
  return (
    <div className="min-h-screen bg-slate-100 flex">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Section */}
      <div className="flex-1 flex">

        {/* Center */}
        <div className="flex-1 flex flex-col">

          <Navbar />

          <main className="flex-1 p-8">
            <Outlet />
          </main>

        </div>

        {/* Right Panel */}
        <div className="w-80 bg-white border-l">
          <RightPanel />
        </div>

      </div>

    </div>
  );
}

export default DashboardLayout;