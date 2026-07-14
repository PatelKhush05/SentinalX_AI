import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock, FaEye } from "react-icons/fa";
import { register } from "../services/authService";

function SignUp() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();

    setError("");

    if (!username || !email || !password || !confirmPassword) {
      setError("Please fill all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);

      await register(email, password);

      // Save email so Verify page doesn't ask again
      localStorage.setItem("signupEmail", email);

      navigate("/VerifyAccount");

    } catch (err) {
      setError(err.message || "Signup failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10">

        <div className="text-center">
          <h1 className="text-4xl font-bold text-emerald-600">
            TaskFlow
          </h1>

          <p className="text-gray-500 mt-2">
            Smart Task Management System
          </p>
        </div>

        <div className="mt-10">
          <h2 className="text-3xl font-bold text-gray-800">
            Create Account
          </h2>

          <p className="text-gray-500 mt-2">
            Start managing your tasks today
          </p>
        </div>

        <form
          className="mt-8 space-y-5"
          onSubmit={handleSignUp}
        >

          <div>
            <label className="block mb-2 font-medium">
              Username
            </label>

            <div className="flex items-center border rounded-xl px-4 py-3">
              <FaUser className="text-gray-400" />

              <input
                type="text"
                placeholder="Choose a username"
                className="ml-3 w-full outline-none"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Email Address
            </label>

            <div className="flex items-center border rounded-xl px-4 py-3">
              <FaEnvelope className="text-gray-400" />

              <input
                type="email"
                placeholder="Enter your email"
                className="ml-3 w-full outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Password
            </label>

            <div className="flex items-center border rounded-xl px-4 py-3">
              <FaLock className="text-gray-400" />

              <input
                type="password"
                placeholder="Create password"
                className="ml-3 w-full outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <FaEye className="text-gray-400 cursor-pointer" />
            </div>
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Confirm Password
            </label>

            <div className="flex items-center border rounded-xl px-4 py-3">
              <FaLock className="text-gray-400" />

              <input
                type="password"
                placeholder="Confirm password"
                className="ml-3 w-full outline-none"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />

              <FaEye className="text-gray-400 cursor-pointer" />
            </div>
          </div>

          {error && (
            <p className="text-red-500 text-sm">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-400 text-white py-3 rounded-xl font-semibold transition"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>

        </form>

        <p className="text-center mt-8 text-gray-600">

          Already have an account?

          <button
            type="button"
            className="ml-2 text-emerald-600 hover:underline font-semibold"
            onClick={() => navigate("/")}
          >
            Sign In
          </button>

        </p>

      </div>

    </div>
  );
}

export default SignUp;