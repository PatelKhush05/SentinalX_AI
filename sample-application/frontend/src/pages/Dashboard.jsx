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
  const [selectedTask, setSelectedTask] = useState(null);
const {
  addTask,
  editTask,
  deleteTask,
} = useTasks();

  // Temporary Save Function
const handleSaveTask = (task) => {

  if (selectedTask) {

    editTask({
      ...task,
      id: selectedTask.id,
      status: selectedTask.status,
    });

  } else {

    addTask(task);

  }

  setSelectedTask(null);
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
  onNewTask={() => {
    setSelectedTask(null);
    setShowModal(true);
  }}
  onEditTask={(task) => {
    setSelectedTask(task);
    setShowModal(true);
  }}
  onDeleteTask={(id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (confirmDelete) {
      deleteTask(id);
    }

  }}
/>

        </div>

        {/* Right Panel */}

        <RightPanel />

      </div>

      {/* Add Task Modal */}

      {showModal && (

       <AddTaskModal
  initialData={selectedTask}
  onClose={() => {
    setShowModal(false);
    setSelectedTask(null);
  }}
  onSave={handleSaveTask}
/>

      )}

    </div>

  );

}

export default Dashboard;