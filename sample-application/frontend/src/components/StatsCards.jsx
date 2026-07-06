function StatsCards() {
  return (
    <div className="grid grid-cols-4 gap-5 mb-6">

      <div className="bg-white rounded-xl shadow p-6">
        Total Tasks
      </div>

      <div className="bg-white rounded-xl shadow p-6">
        Pending
      </div>

      <div className="bg-white rounded-xl shadow p-6">
        Completed
      </div>

      <div className="bg-white rounded-xl shadow p-6">
        High Priority
      </div>

    </div>
  );
}

export default StatsCards;