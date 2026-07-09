import { useState } from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import WelcomeBanner from "../components/WelcomeBanner";
import StatsCards from "../components/StatsCards";
import TaskTable from "../components/TaskTable";
import RightPanel from "../components/RightPanel";
import AddTaskModal from "../components/AddTaskModal";
import { useTasks } from "../context/TaskContext";

function Dashboard() {

  // Modal State
  const [showModal, setShowModal] = useState(false);
  const { addTask } = useTasks();

  // Temporary Save Function
const handleAddTask = (task) => {

    addTask(task);

    setShowModal(false);

};



  return (

    <div className="min-h-screen bg-slate-100 flex">

      {/* Sidebar */}

      <Sidebar />

      {/* Main Content */}

      <div className="flex-1 flex">

        <div className="flex-1 p-8">

          <Navbar />

          <WelcomeBanner />

          <StatsCards />

          <TaskTable
            onNewTask={() => setShowModal(true)}
          />

        </div>

        {/* Right Panel */}

        <RightPanel />

      </div>

      {/* Add Task Modal */}

      {showModal && (

        <AddTaskModal
          onClose={() => setShowModal(false)}
          onSave={handleAddTask}
        />

      )}

    </div>

  );

}

export default Dashboard;