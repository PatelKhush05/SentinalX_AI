import { pipelineRuns } from "../../data/pipelineData";

function PipelineTable() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">

      <h2 className="text-2xl font-bold text-slate-800 mb-6">
        Recent Pipeline Runs
      </h2>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>
            <tr className="border-b border-slate-200 text-left">

              <th className="pb-4">Build</th>
              <th className="pb-4">Branch</th>
              <th className="pb-4">Status</th>
              <th className="pb-4">Duration</th>
              <th className="pb-4">Trigger</th>
              <th className="pb-4">Time</th>

            </tr>
          </thead>

          <tbody>

            {pipelineRuns.map((run) => (

              <tr
                key={run.id}
                className="border-b border-slate-100 hover:bg-slate-50"
              >

                <td className="py-4 font-medium">{run.id}</td>

                <td>{run.branch}</td>

                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      run.status === "Success"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {run.status}
                  </span>
                </td>

                <td>{run.duration}</td>

                <td>{run.trigger}</td>

                <td>{run.time}</td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default PipelineTable;