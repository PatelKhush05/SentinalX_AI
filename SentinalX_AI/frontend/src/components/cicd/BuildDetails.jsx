import BuildStatusBadge from "./BuildStatusBadge";

function BuildDetails() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">

      <h2 className="text-2xl font-bold text-slate-800 mb-6">
        Latest Build Details
      </h2>

      <div className="grid grid-cols-2 gap-6">

        <div>
          <p className="text-sm text-slate-500">Build Number</p>
          <p className="font-semibold text-slate-800">#105</p>
        </div>

        <div>
          <p className="text-sm text-slate-500">Status</p>
          <BuildStatusBadge status="Success" />
        </div>

        <div>
          <p className="text-sm text-slate-500">Repository</p>
          <p className="font-semibold text-slate-800">
            SentinalX_AI
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">Branch</p>
          <p className="font-semibold text-slate-800">
            main
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">Commit</p>
          <p className="font-semibold text-slate-800">
            Added Monitoring Dashboard
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">Author</p>
          <p className="font-semibold text-slate-800">
            Khush Patel
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">Duration</p>
          <p className="font-semibold text-slate-800">
            2m 14s
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">Triggered By</p>
          <p className="font-semibold text-slate-800">
            GitHub Webhook
          </p>
        </div>

      </div>

    </div>
  );
}

export default BuildDetails;