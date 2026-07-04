import { Link } from "react-router-dom";

function ForgotPassword() {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10">

        <h1 className="text-3xl font-bold text-emerald-600 text-center">
          TaskFlow
        </h1>

        <h2 className="text-2xl font-bold mt-8">
          Reset Password
        </h2>

        <p className="text-gray-500 mt-2">
          Enter your registered email address.
        </p>

        <form className="mt-8 space-y-6">

          <div>
            <label className="block mb-2 font-medium">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border rounded-xl px-4 py-3 outline-none"
            />
          </div>

          <button
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl"
          >
            Send Reset Link
          </button>

        </form>

        <p className="text-center mt-8">
          <Link
            to="/"
            className="text-emerald-600 hover:underline"
          >
            Back to Sign In
          </Link>
        </p>

      </div>
    </div>
  );
}

export default ForgotPassword;