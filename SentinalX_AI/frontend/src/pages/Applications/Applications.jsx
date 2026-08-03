import { useState } from "react";
import { FaPlus, FaSearch } from "react-icons/fa";
import ApplicationCard from "../../components/cards/ApplicationCard";
import ComingSoonModal from "../../components/common/ComingSoonModal";
import PageHeader from "../../components/common/PageHeader";

function Applications() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="space-y-8">

      {/* Page Header */}

      <div>

       <PageHeader
    title="Applications"
    subtitle="Manage and monitor all registered applications."
/>

      </div>

      {/* Toolbar */}

      <div className="flex flex-col lg:flex-row gap-4 justify-between">

        <div className="relative w-full lg:w-96">

          <FaSearch className="absolute left-4 top-4 text-slate-400" />

          <input
            type="text"
            placeholder="Search applications..."
            className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none"
          />

        </div>

        <button
  onClick={() => setShowModal(true)}
  className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700 transition"
>

          <FaPlus />

          Add Application

        </button>

      </div>

      {/* Application List */}

      <ApplicationCard
        id="task-management"
        name="Task Management System"
        status="Running"
        environment="Development"
        backend="Healthy"
        database="Healthy"
        uptime="99.98%"
        deployment="2 hours ago"
      />
<ComingSoonModal
  open={showModal}
  onClose={() => setShowModal(false)}
  title="Feature Under Development"
  features={[
    "Register Applications",
    "Configure Environment",
    "Connect Prometheus",
    "Configure Health Checks",
    "Enable Auto Discovery",
  ]}
/>
    </div>
  );
}

export default Applications;