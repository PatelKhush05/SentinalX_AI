import {
  FaUserCircle,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaEdit,
  FaTasks,
  FaCheckCircle,
  FaClock,
} from "react-icons/fa";

function Profile() {
  return (
    <div>

      {/* Header */}

      <div className="flex justify-between items-center">

        <div>

          <h1 className="text-3xl font-bold">
            My Profile
          </h1>

          <p className="text-gray-500 mt-2">
            Manage your personal information
          </p>

        </div>

        <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 rounded-xl flex items-center gap-2">

          <FaEdit />

          Edit Profile

        </button>

      </div>

      {/* Profile Card */}

      <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">

        <div className="flex items-center gap-8">

          <FaUserCircle className="text-8xl text-gray-400" />

          <div>

            <h2 className="text-3xl font-bold">
              Khush Patel
            </h2>

            <p className="text-gray-500 mt-2">
              Frontend Developer
            </p>

            <div className="space-y-3 mt-6">

              <div className="flex items-center gap-3">

                <FaEnvelope className="text-emerald-600" />

                khush@email.com

              </div>

              <div className="flex items-center gap-3">

                <FaPhone className="text-emerald-600" />

                +91 9876543210

              </div>

              <div className="flex items-center gap-3">

                <FaMapMarkerAlt className="text-emerald-600" />

                Gujarat, India

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Statistics */}

      <div className="grid grid-cols-3 gap-6 mt-8">

        <div className="bg-white rounded-2xl shadow-lg p-6">

          <FaTasks className="text-3xl text-blue-500 mb-3" />

          <h2 className="text-3xl font-bold">
            124
          </h2>

          <p className="text-gray-500">
            Total Tasks
          </p>

        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">

          <FaCheckCircle className="text-3xl text-green-500 mb-3" />

          <h2 className="text-3xl font-bold">
            96
          </h2>

          <p className="text-gray-500">
            Completed
          </p>

        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">

          <FaClock className="text-3xl text-yellow-500 mb-3" />

          <h2 className="text-3xl font-bold">
            28
          </h2>

          <p className="text-gray-500">
            Pending
          </p>

        </div>

      </div>

    </div>
  );
}

export default Profile;