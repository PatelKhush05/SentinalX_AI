import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { verifyAccount } from "../services/authService";

function VerifyAccount() {

  const navigate = useNavigate();

  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const email = localStorage.getItem("signupEmail");

  const handleVerify = async (e) => {

    e.preventDefault();

    setError("");

    if (!code) {
      setError("Please enter verification code.");
      return;
    }

    try {

      setLoading(true);

      await verifyAccount(email, code);

      alert("Account verified successfully!");

      localStorage.removeItem("signupEmail");

      navigate("/");

    } catch (err) {

      setError(err.message || "Verification failed.");

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10">

        <div className="text-center">

          <h1 className="text-4xl font-bold text-emerald-600">
            Verify Account
          </h1>

          <p className="text-gray-500 mt-3">
            Enter the verification code sent to
          </p>

          <p className="font-semibold mt-1">
            {email}
          </p>

        </div>

        <form
          className="mt-8 space-y-5"
          onSubmit={handleVerify}
        >

          <input
            type="text"
            placeholder="Enter OTP"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-emerald-500"
          />

          {error && (

            <p className="text-red-500 text-sm">
              {error}
            </p>

          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-400 text-white py-3 rounded-xl font-semibold"
          >

            {loading ? "Verifying..." : "Verify Account"}

          </button>

        </form>

      </div>

    </div>

  );

}

export default VerifyAccount;