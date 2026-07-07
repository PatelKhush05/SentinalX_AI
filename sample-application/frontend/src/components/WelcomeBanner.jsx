import { FaCalendarAlt, FaBullseye } from "react-icons/fa";

function WelcomeBanner() {

  const today = new Date();

  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl shadow-lg p-8 text-white">

      <h1 className="text-3xl font-bold">
        Welcome Back, Khush Patel 👋
      </h1>

      <p className="mt-2 text-emerald-100">
        Stay organized and achieve your goals today.
      </p>

      <div className="flex justify-between items-center mt-8">

        <div className="flex items-center gap-3">

          <FaCalendarAlt className="text-xl" />

          <span>{formattedDate}</span>

        </div>

        <div className="flex items-center gap-3">

          <FaBullseye className="text-xl" />

          <span>5 Tasks Today</span>

        </div>

      </div>

    </div>
  );
}

export default WelcomeBanner;