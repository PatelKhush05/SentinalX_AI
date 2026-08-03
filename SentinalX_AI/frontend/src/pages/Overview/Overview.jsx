import HealthCard from "../../components/cards/HealthCard";
import ChartCard from "../../components/charts/ChartCard";
import CpuChart from "../../components/charts/CpuChart";
import MemoryChart from "../../components/charts/MemoryChart";
import StatCard from "../../components/cards/StatCard";
import SummaryCard from "../../components/cards/SummaryCard";
import PageHeader from "../../components/common/PageHeader";

function Overview() {
  return (
    <div className="space-y-8">

      {/* Header */}
      <div>
      <PageHeader
    title="Infrastructure Overview"
    subtitle="Monitor your applications, infrastructure health, deployments and AI insights."
/>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-4 gap-6">

        <StatCard
          title="CPU Usage"
          value="28%"
          status="↑ 5% from yesterday"
          statusColor="text-green-600"
        />

        <StatCard
          title="Memory Usage"
          value="6.8 GB"
          status="Stable"
          statusColor="text-blue-600"
        />

        <StatCard
          title="Applications"
          value="12"
          status="All Running"
          statusColor="text-green-600"
        />

        <StatCard
          title="Incidents"
          value="2"
          status="Needs Attention"
          statusColor="text-red-600"
        />

      </div>

      {/* Application Health */}

      <HealthCard
        services={[
          {
            name: "Backend API",
            status: "Healthy",
            uptime: "99.98%",
            color: "bg-green-500",
          },
          {
            name: "PostgreSQL",
            status: "Healthy",
            uptime: "99.95%",
            color: "bg-green-500",
          },
        ]}
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

  <ChartCard title="CPU Usage">
    <CpuChart />
  </ChartCard>

  <ChartCard title="Memory Usage">
    <MemoryChart />
  </ChartCard>

</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

  <SummaryCard
    title="Recent Incidents"
    icon="🚨"
    items={[
      { title: "High CPU Usage", subtitle: "2 minutes ago" },
      { title: "Memory Warning", subtitle: "10 minutes ago" },
      { title: "Database Restarted", subtitle: "25 minutes ago" },
    ]}
    buttonText="View All"
  />

  <SummaryCard
    title="Latest Deployment"
    icon="🚀"
    items={[
      { title: "Version v1.2.4", subtitle: "Production" },
      { title: "Status: Success", subtitle: "2 hours ago" },
    ]}
    buttonText="View CI/CD"
  />

  <SummaryCard
    title="AI Recommendation"
    icon="🤖"
    items={[
      {
        title: "CPU usage is increasing",
        subtitle: "Monitor backend service",
      },
    ]}
    buttonText="Open AI Center"
  />

</div>
    </div>
  );
}

export default Overview;