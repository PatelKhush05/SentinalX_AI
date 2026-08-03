function SummaryCard({ title, icon, items, buttonText }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 hover:shadow-md transition">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">{icon}</span>
        <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
      </div>

      <div className="space-y-3">
        {items.map((item, index) => (
          <div key={index} className="border-b border-slate-100 pb-2 last:border-0">
            <p className="text-sm font-medium text-slate-700">{item.title}</p>
            <p className="text-xs text-slate-500">{item.subtitle}</p>
          </div>
        ))}
      </div>

      <button className="mt-5 text-blue-600 hover:text-blue-700 font-medium text-sm">
        {buttonText} →
      </button>
    </div>
  );
}

export default SummaryCard;