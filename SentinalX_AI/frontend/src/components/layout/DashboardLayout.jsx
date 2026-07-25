import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <div className="h-screen bg-slate-100 p-5">

      <div className="flex gap-5 h-full">

        <Sidebar />

        <div className="flex-1 flex flex-col gap-5">

          <Topbar />

          <main className="flex-1 bg-white rounded-3xl shadow-sm p-8 overflow-auto">
            <Outlet />
          </main>

        </div>

      </div>

    </div>
  );
}

export default DashboardLayout;