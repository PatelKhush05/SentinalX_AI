import { FaCalendarAlt, FaClock } from "react-icons/fa";

const events = [
  {
    id: 1,
    title: "React Practice",
    time: "09:00 AM",
  },
  {
    id: 2,
    title: "Team Meeting",
    time: "12:00 PM",
  },
  {
    id: 3,
    title: "AWS Revision",
    time: "04:00 PM",
  },
];

function Calendar() {
  return (
    <div>

      {/* Header */}

      <h1 className="text-3xl font-bold">
        Calendar
      </h1>

      <p className="text-gray-500 mt-2">
        Manage your schedule and events
      </p>

      <div className="grid grid-cols-3 gap-6 mt-8">

        {/* Calendar */}

        <div className="col-span-2 bg-white rounded-2xl shadow p-6">

          <div className="flex items-center gap-2 mb-6">

            <FaCalendarAlt className="text-emerald-600" />

            <h2 className="text-xl font-bold">
              July 2026
            </h2>

          </div>

          <div className="grid grid-cols-7 gap-4 text-center">

            {["Su","Mo","Tu","We","Th","Fr","Sa"].map(day=>(
              <div
                key={day}
                className="font-bold text-gray-500"
              >
                {day}
              </div>
            ))}

            {Array.from({length:31},(_,i)=>(
              <div
                key={i}
                className={`p-3 rounded-lg cursor-pointer transition ${
                  i===6
                  ? "bg-emerald-600 text-white"
                  : "hover:bg-emerald-100"
                }`}
              >
                {i+1}
              </div>
            ))}

          </div>

        </div>

        {/* Schedule */}

        <div className="bg-white rounded-2xl shadow p-6">

          <h2 className="text-xl font-bold mb-6">
            Today's Schedule
          </h2>

          <div className="space-y-5">

            {events.map((event)=>(

              <div
                key={event.id}
                className="border rounded-xl p-4 hover:shadow-md transition"
              >

                <div className="flex items-center gap-2 text-emerald-600">

                  <FaClock />

                  <span>{event.time}</span>

                </div>

                <h3 className="font-semibold mt-2">
                  {event.title}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}

export default Calendar;