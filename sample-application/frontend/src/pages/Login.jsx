import { FaUser, FaLock, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10">

        {/* Logo */}

        <div className="text-center">

          <div className="text-6xl mb-3">✅</div>

          <h1 className="text-4xl font-bold text-emerald-600">
            TaskFlow
          </h1>

          <p className="text-gray-500 mt-2">
            Smart Task Management System
          </p>

          <p className="text-gray-400 text-sm mt-2">
            Organize • Track • Complete
          </p>

        </div>

        {/* Welcome */}

        <div className="mt-10">

          <h2 className="text-3xl font-bold text-gray-800">
            Welcome Back 👋
          </h2>

          <p className="text-gray-500 mt-2">
            Sign in to continue
          </p>

        </div>

        {/* Form */}

        <form
          className="mt-8 space-y-6"
          onSubmit={(e) => e.preventDefault()}
        >

          {/* Username */}

          <div>

            <label className="block mb-2 font-medium text-gray-700">
              Username / Email
            </label>

            <div className="flex items-center border rounded-xl px-4 py-3">

              <FaUser className="text-gray-400" />

              <input
                type="text"
                placeholder="Enter username or email"
                className="w-full ml-3 outline-none"
              />

            </div>

          </div>

          {/* Password */}

          <div>

            <label className="block mb-2 font-medium text-gray-700">
              Password
            </label>

            <div className="flex items-center border rounded-xl px-4 py-3">

              <FaLock className="text-gray-400" />

              <input
                type="password"
                placeholder="Enter password"
                className="w-full ml-3 outline-none"
              />

              <FaEye className="text-gray-500 cursor-pointer" />

            </div>

          </div>

          {/* Remember */}

          <div className="flex justify-between items-center text-sm">

            <label className="flex items-center gap-2 text-gray-600">

              <input type="checkbox" />

              Remember Me

            </label>

            <Link
              to="/ForgotPassword"
              className="text-emerald-600 hover:underline"
            >
              Forgot Password?
            </Link>

          </div>

          {/* Button */}

          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-semibold transition duration-300"
          >
            Sign In
          </button>

        </form>

        {/* Divider */}

        <div className="flex items-center my-8">

          <div className="flex-1 border-t"></div>

          <span className="px-4 text-gray-400">
            OR
          </span>

          <div className="flex-1 border-t"></div>

        </div>

        {/* Sign Up */}

        <p className="text-center text-gray-600">

          Don't have an account?

          <Link
            to="/SignUp"
            className="ml-2 text-emerald-600 font-semibold hover:underline"
          >
            Sign Up
          </Link>

        </p>

        {/* Footer */}

        <p className="mt-8 text-center text-gray-400 text-sm">
          © 2026 TaskFlow
        </p>

      </div>

    </div>
  );
}

export default Login;