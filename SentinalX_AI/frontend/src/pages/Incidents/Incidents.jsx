import { useState } from "react";

import PageHeader from "../../components/common/PageHeader";
import StatCard from "../../components/cards/StatCard";
import IncidentTable from "../../components/incidents/IncidentTable";
import IncidentDetails from "../../components/incidents/IncidentDetails";
import IncidentActivity from "../../components/incidents/IncidentActivity";

import { incidents } from "../../data/incidentData";
function Incidents() {

  const [selectedIncident, setSelectedIncident] = useState(
    incidents[0]
  );

  return (
    <div className="space-y-8">

      {/* Header */}

      <PageHeader
        title="Incident Management"
        subtitle="Track, investigate, and resolve infrastructure incidents."
      />

      {/* Incident Overview */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

        <StatCard
          title="Total Incidents"
          value="12"
          status="All Incidents"
          statusColor="text-blue-600"
        />

        <StatCard
          title="Critical"
          value="2"
          status="Immediate Action"
          statusColor="text-red-600"
        />

        <StatCard
          title="Resolved"
          value="9"
          status="Today"
          statusColor="text-green-600"
        />

        <StatCard
          title="Open"
          value="3"
          status="Under Investigation"
          statusColor="text-yellow-600"
        />

      </div>
 
  {/* Active Incidents */}
<IncidentTable
  incidents={incidents}
  selectedIncident={selectedIncident}
  onSelectIncident={setSelectedIncident}
/>

{/* Incident Details */}
<IncidentDetails incident={selectedIncident} />

{/* Incident Activity */}
<IncidentActivity />
</div>
  );
}

export default Incidents;