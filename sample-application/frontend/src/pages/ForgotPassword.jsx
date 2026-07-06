import { FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

function ForgotPassword() {
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
            Forgot Password
          </h2>

          <p className="text-gray-500 mt-2">
            Enter your registered email address and we'll send you a password reset link.
          </p>

        </div>

        {/* Form */}

        <form className="mt-8 space-y-6">

          <div>

            <label className="block mb-2 font-medium text-gray-700">
              Email Address
            </label>

            <div className="flex items-center border rounded-xl px-4 py-3">

              <FaEnvelope className="text-gray-400" />

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full ml-3 outline-none"
              />

            </div>

          </div>

          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-semibold transition duration-300"
          >
            Send Reset Link
          </button>

        </form>

        {/* Back to Login */}

        <p className="text-center mt-8 text-gray-600">

          Remember your password?

          <Link
            to="/"
            className="ml-2 text-emerald-600 hover:underline font-semibold"
          >
            Sign In
          </Link>

        </p>

      </div>

    </div>
  );
}

export default ForgotPassword;