import PageHeader from "../../components/common/PageHeader";
import StatCard from "../../components/cards/StatCard";
import PipelineFlow from "../../components/cicd/PipelineFlow";
import PipelineTable from "../../components/cicd/PipelineTable";
import BuildDetails from "../../components/cicd/BuildDetails";

function CICD() {
  return (
    <div className="space-y-8">

      <PageHeader
        title="CI/CD Pipeline"
        subtitle="Monitor build pipelines, deployments and release history."
      />

      {/* Pipeline Statistics */}

      <div className="grid grid-cols-4 gap-6">

        <StatCard
          title="Last Build"
          value="Success"
          status="Build #105"
          statusColor="text-green-600"
        />

        <StatCard
          title="Success Rate"
          value="98%"
          status="Last 30 Days"
          statusColor="text-green-600"
        />

        <StatCard
          title="Avg Duration"
          value="2m 14s"
          status="Stable"
          statusColor="text-blue-600"
        />

        <StatCard
          title="Branch"
          value="main"
          status="Production"
          statusColor="text-purple-600"
        />

      </div>

      {/* Pipeline Flow */}
      <PipelineFlow />
      {/* Recent Pipeline Runs */}
      <PipelineTable />
      {/* Latest Build Details */}
<BuildDetails />
    </div>
  );
}

export default CICD;