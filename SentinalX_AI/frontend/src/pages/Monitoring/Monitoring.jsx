import PageHeader from "../../components/common/PageHeader";
import StatCard from "../../components/cards/StatCard";
import ServiceHealth from "../../components/monitoring/ServiceHealth";
import ChartCard from "../../components/charts/ChartCard";
import CpuChart from "../../components/charts/CpuChart";
import MemoryChart from "../../components/charts/MemoryChart";
import SystemLogs from "../../components/monitoring/SystemLogs";
import AlertsPanel from "../../components/monitoring/AlertsPanel";

function Monitoring() {
  return (
    <div className="space-y-8">

      {/* Header */}
      <PageHeader
        title="Infrastructure Monitoring"
        subtitle="Monitor system resources, service health, and infrastructure performance."
      />

      {/* Resource Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

        <StatCard
          title="CPU Usage"
          value="28%"
          status="Normal"
          statusColor="text-green-600"
        />

        <StatCard
          title="Memory Usage"
          value="6.8 GB"
          status="Stable"
          statusColor="text-blue-600"
        />

        <StatCard
          title="Disk Usage"
          value="54%"
          status="Healthy"
          statusColor="text-green-600"
        />

        <StatCard
          title="Network"
          value="126 Mbps"
          status="Connected"
          statusColor="text-green-600"
        />

      </div>

      {/* Backend Services */}

      <ServiceHealth
        services={[
          {
            name: "Backend API",
            description: "FastAPI Application",
            status: "Healthy",
            color: "bg-green-500",
          },
          {
            name: "PostgreSQL",
            description: "Database Server",
            status: "Connected",
            color: "bg-green-500",
          },
          {
            name: "Docker Engine",
            description: "Container Runtime",
            status: "Running",
            color: "bg-green-500",
          },
          {
            name: "Prometheus",
            description: "Metrics Collector",
            status: "Offline",
            color: "bg-red-500",
          },
          {
            name: "Grafana",
            description: "Visualization Dashboard",
            status: "Offline",
            color: "bg-red-500",
          },
        ]}
      />

      {/* Resource Charts */}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        <ChartCard title="CPU Usage">
          <CpuChart />
        </ChartCard>

        <ChartCard title="Memory Usage">
          <MemoryChart />
        </ChartCard>

      </div>
      {/* System Logs */}
<SystemLogs />
{/* Alerts pannel*/}
<AlertsPanel />
    </div>
  );
}

export default Monitoring;