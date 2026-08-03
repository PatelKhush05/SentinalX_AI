import {
  FaGithub,
  FaCodeBranch,
  FaDocker,
  FaCheckCircle,
} from "react-icons/fa";

import { SiJenkins } from "react-icons/si";

import PipelineNode from "./PipelineNode";

const stages = [
  {
    title: "GitHub",
    icon: <FaGithub />,
    status: "Success",
  },
  {
    title: "Webhook",
    icon: <FaCodeBranch />,
    status: "Success",
  },
  {
    title: "Jenkins",
    icon: <SiJenkins />,
    status: "Success",
  },
  {
    title: "Docker",
    icon: <FaDocker />,
    status: "Success",
  },
  {
    title: "Deploy",
    icon: <FaCheckCircle />,
    status: "Success",
  },
];

function PipelineFlow() {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8">

      <h2 className="text-2xl font-bold text-slate-800 mb-8">
        Pipeline Flow
      </h2>

      <div className="flex items-center justify-between">

        {stages.map((stage, index) => (
          <div
            key={stage.title}
            className="flex items-center flex-1"
          >

            <PipelineNode
              icon={stage.icon}
              title={stage.title}
              status={stage.status}
            />

            {index !== stages.length - 1 && (
              <div className="flex-1 h-1 bg-green-300 rounded-full mx-4"></div>
            )}

          </div>
        ))}

      </div>

    </div>
  );
}

export default PipelineFlow;