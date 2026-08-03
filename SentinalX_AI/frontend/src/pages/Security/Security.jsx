import PageHeader from "../../components/common/PageHeader";
import StatCard from "../../components/cards/StatCard";
import ThreatTable from "../../components/security/ThreatTable";

function Security() {
  return (
    <div className="space-y-8">

      {/* Header */}
      <PageHeader
        title="Security Center"
        subtitle="Monitor security health, detect threats, and protect your infrastructure."
      />

      {/* Security Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

        <StatCard
          title="Security Score"
          value="96/100"
          status="Excellent"
          statusColor="text-green-600"
        />

        <StatCard
          title="Active Threats"
          value="2"
          status="Needs Attention"
          statusColor="text-red-600"
        />

        <StatCard
          title="Vulnerabilities"
          value="5"
          status="Low Risk"
          statusColor="text-yellow-600"
        />

        <StatCard
          title="Last Scan"
          value="15 min"
          status="Completed"
          statusColor="text-blue-600"
        />

      </div>
<ThreatTable />
    </div>
  );
}

export default Security;