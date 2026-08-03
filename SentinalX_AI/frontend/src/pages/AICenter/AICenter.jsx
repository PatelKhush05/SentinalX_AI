import PageHeader from "../../components/common/PageHeader";
import AIHealthScore from "../../components/ai/AIHealthScore";
import AISummary from "../../components/ai/AISummary";
import RootCauseAnalysis from "../../components/ai/RootCauseAnalysis";
import Recommendations from "../../components/ai/Recommendations";
import PredictiveAlerts from "../../components/ai/PredictiveAlerts";
import AIAssistant from "../../components/ai/AIAssistant";

function AICenter() {
  return (
    <div className="space-y-8">

      <PageHeader
        title="AI Center"
        subtitle="AI-powered insights, predictions, and intelligent infrastructure analysis."
      />

      <AIHealthScore />

      <AISummary />
      
      <RootCauseAnalysis />
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

  <Recommendations />

  <PredictiveAlerts />

</div>
<AIAssistant />
    </div>
  );
}

export default AICenter;