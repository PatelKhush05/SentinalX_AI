function RightPanel() {
  return (
    <div className="bg-white rounded-2xl shadow p-6 h-full">

      <h2 className="text-xl font-bold mb-4">
        Right Panel
      </h2>

      <div className="space-y-4">

        <div className="bg-slate-100 rounded-xl p-4">
          Calendar
        </div>

        <div className="bg-slate-100 rounded-xl p-4">
          Productivity
        </div>

        <div className="bg-slate-100 rounded-xl p-4">
          Notes
        </div>

      </div>

    </div>
  );
}

export default RightPanel;