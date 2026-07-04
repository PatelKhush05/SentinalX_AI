import { FaUser, FaEnvelope, FaLock, FaEye } from "react-icons/fa";

function SignUp() {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10">

        {/* Header */}

        <div className="text-center">

          <h1 className="text-4xl font-bold text-emerald-600">
            TaskFlow
          </h1>

          <p className="text-gray-500 mt-2">
            Smart Task Management System
          </p>

        </div>

        {/* Title */}

        <div className="mt-10">

          <h2 className="text-3xl font-bold text-gray-800">
            Create Account
          </h2>

          <p className="text-gray-500 mt-2">
            Start managing your tasks today
          </p>

        </div>

        {/* Form */}

        <form className="mt-8 space-y-5">

          {/* Username */}

          <div>

            <label className="block mb-2 font-medium">
              Username
            </label>

            <div className="flex items-center border rounded-xl px-4 py-3">

              <FaUser className="text-gray-400"/>

              <input
                type="text"
                placeholder="Choose a username"
                className="ml-3 w-full outline-none"
              />

            </div>

          </div>

          {/* Email */}

          <div>

            <label className="block mb-2 font-medium">
              Email Address
            </label>

            <div className="flex items-center border rounded-xl px-4 py-3">

              <FaEnvelope className="text-gray-400"/>

              <input
                type="email"
                placeholder="Enter your email"
                className="ml-3 w-full outline-none"
              />

            </div>

          </div>

          {/* Password */}

          <div>

            <label className="block mb-2 font-medium">
              Password
            </label>

            <div className="flex items-center border rounded-xl px-4 py-3">

              <FaLock className="text-gray-400"/>

              <input
                type="password"
                placeholder="Create password"
                className="ml-3 w-full outline-none"
              />

              <FaEye className="text-gray-400 cursor-pointer"/>

            </div>

          </div>

          {/* Confirm Password */}

          <div>

            <label className="block mb-2 font-medium">
              Confirm Password
            </label>

            <div className="flex items-center border rounded-xl px-4 py-3">

              <FaLock className="text-gray-400"/>

              <input
                type="password"
                placeholder="Confirm password"
                className="ml-3 w-full outline-none"
              />

              <FaEye className="text-gray-400 cursor-pointer"/>

            </div>

          </div>

          {/* Button */}

          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-semibold transition"
          >
            Create Account
          </button>

        </form>

        {/* Footer */}

        <p className="text-center mt-8 text-gray-600">

          Already have an account?

          <button
            type="button"
            className="ml-2 text-emerald-600 hover:underline font-semibold"
          >
            Sign In
          </button>

        </p>

      </div>

    </div>
  );
}

export default SignUp;