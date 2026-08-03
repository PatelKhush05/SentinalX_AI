function ChartCard({ title, children }) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6">
      <h2 className="text-xl font-semibold text-slate-800 mb-6">
        {title}
      </h2>

      {children}
    </div>
  );
}

export default ChartCard;