import { useState } from "react";
import {
  FaUserCircle,
  FaCamera,
  FaSave,
  FaTimes,
  FaShieldAlt,
  FaBell,
  FaPalette,
  FaGlobe,
  FaDatabase,
  FaTrash,
  FaMoon,
  FaSun,
} from "react-icons/fa";

function Settings() {
  const [darkMode, setDarkMode] = useState(false);

  const [user, setUser] = useState({
    firstName: "Khush",
    lastName: "Patel",
    username: "khushpatel",
    email: "khush@example.com",
    phone: "+91 9876543210",
    bio: "Cloud & DevOps Enthusiast",
    location: "Gujarat, India",
  });

  return (
    <div className="p-8 space-y-8">

      {/* Header */}

      <div className="bg-white rounded-3xl shadow-lg p-8 flex justify-between items-center">

        <div>

          <h1 className="text-4xl font-bold">
            Settings
          </h1>

          <p className="text-gray-500 mt-2">
            Manage your account and application preferences.
          </p>

        </div>

        <div className="flex gap-4">

          <button className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 px-6 py-3 rounded-xl">

            <FaTimes />

            Cancel

          </button>

          <button className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl">

            <FaSave />

            Save Changes

          </button>

        </div>

      </div>

      {/* Account */}

      <div className="bg-white rounded-3xl shadow-lg p-8">

        <div className="flex items-center gap-3 mb-8">

          <FaUserCircle className="text-3xl text-emerald-600" />

          <h2 className="text-2xl font-bold">
            Account Information
          </h2>

        </div>

        <div className="flex gap-10">

          {/* Avatar */}

          <div className="flex flex-col items-center">

            <FaUserCircle className="text-[140px] text-gray-400" />

            <button className="mt-4 bg-emerald-600 text-white px-5 py-2 rounded-xl flex items-center gap-2">

              <FaCamera />

              Change Photo

            </button>

          </div>

          {/* Form */}

          <div className="grid grid-cols-2 gap-6 flex-1">

            <div>

              <label className="font-semibold">
                First Name
              </label>

              <input
                value={user.firstName}
                onChange={(e) =>
                  setUser({
                    ...user,
                    firstName: e.target.value,
                  })
                }
                className="w-full border rounded-xl mt-2 p-3"
              />

            </div>

            <div>

              <label className="font-semibold">
                Last Name
              </label>

              <input
                value={user.lastName}
                onChange={(e) =>
                  setUser({
                    ...user,
                    lastName: e.target.value,
                  })
                }
                className="w-full border rounded-xl mt-2 p-3"
              />

            </div>

            <div>

              <label className="font-semibold">
                Username
              </label>

              <input
                value={user.username}
                onChange={(e) =>
                  setUser({
                    ...user,
                    username: e.target.value,
                  })
                }
                className="w-full border rounded-xl mt-2 p-3"
              />

            </div>

            <div>

              <label className="font-semibold">
                Email
              </label>

              <input
                value={user.email}
                onChange={(e) =>
                  setUser({
                    ...user,
                    email: e.target.value,
                  })
                }
                className="w-full border rounded-xl mt-2 p-3"
              />

            </div>

            <div>

              <label className="font-semibold">
                Phone
              </label>

              <input
                value={user.phone}
                onChange={(e) =>
                  setUser({
                    ...user,
                    phone: e.target.value,
                  })
                }
                className="w-full border rounded-xl mt-2 p-3"
              />

            </div>

            <div>

              <label className="font-semibold">
                Location
              </label>

              <input
                value={user.location}
                onChange={(e) =>
                  setUser({
                    ...user,
                    location: e.target.value,
                  })
                }
                className="w-full border rounded-xl mt-2 p-3"
              />

            </div>

            <div className="col-span-2">

              <label className="font-semibold">
                Bio
              </label>

              <textarea
                rows="4"
                value={user.bio}
                onChange={(e) =>
                  setUser({
                    ...user,
                    bio: e.target.value,
                  })
                }
                className="w-full border rounded-xl mt-2 p-3"
              />

            </div>

          </div>

        </div>

      </div>
          {/* Security */}

      <div className="bg-white rounded-3xl shadow-lg p-8">

        <div className="flex items-center gap-3 mb-8">

          <FaShieldAlt className="text-3xl text-red-500" />

          <h2 className="text-2xl font-bold">
            Security
          </h2>

        </div>

        <div className="grid grid-cols-2 gap-8">

          {/* Change Password */}

          <div className="border rounded-2xl p-6">

            <h3 className="text-lg font-semibold mb-5">
              Change Password
            </h3>

            <div className="space-y-4">

              <input
                type="password"
                placeholder="Current Password"
                className="w-full border rounded-xl p-3"
              />

              <input
                type="password"
                placeholder="New Password"
                className="w-full border rounded-xl p-3"
              />

              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full border rounded-xl p-3"
              />

              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl">

                Update Password

              </button>

            </div>

          </div>

          {/* Two Factor */}

          <div className="border rounded-2xl p-6">

            <h3 className="text-lg font-semibold mb-5">

              Two-Factor Authentication

            </h3>

            <p className="text-gray-500 mb-6">

              Add an extra layer of security to your account.

            </p>

            <div className="flex justify-between items-center mb-6">

              <span>Enable 2FA</span>

              <label className="relative inline-flex items-center cursor-pointer">

                <input type="checkbox" className="sr-only peer" />

                <div className="w-14 h-7 bg-gray-300 rounded-full peer peer-checked:bg-emerald-600 after:content-[''] after:absolute after:left-1 after:top-1 after:bg-white after:h-5 after:w-5 after:rounded-full after:transition-all peer-checked:after:translate-x-7"></div>

              </label>

            </div>

            <button className="border border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white px-5 py-3 rounded-xl transition">

              Configure Authentication

            </button>

          </div>

        </div>

        {/* Active Sessions */}

        <div className="mt-10">

          <h3 className="text-xl font-semibold mb-5">

            Active Sessions

          </h3>

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead>

                <tr className="border-b">

                  <th className="text-left py-4">Device</th>

                  <th className="text-left">Browser</th>

                  <th className="text-left">Location</th>

                  <th className="text-left">Status</th>

                  <th className="text-left">Action</th>

                </tr>

              </thead>

              <tbody>

                <tr className="border-b hover:bg-slate-50">

                  <td className="py-4">Windows Laptop</td>

                  <td>Chrome</td>

                  <td>Ahmedabad</td>

                  <td>

                    <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">

                      Current Device

                    </span>

                  </td>

                  <td>

                    <button className="text-red-500">

                      Logout

                    </button>

                  </td>

                </tr>

                <tr className="hover:bg-slate-50">

                  <td className="py-4">Android Phone</td>

                  <td>Chrome Mobile</td>

                  <td>Gandhidham</td>

                  <td>

                    <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">

                      Active

                    </span>

                  </td>

                  <td>

                    <button className="text-red-500">

                      Logout

                    </button>

                  </td>

                </tr>

              </tbody>

            </table>

          </div>

        </div>

      </div>
            {/* Notifications */}

      <div className="bg-white rounded-3xl shadow-lg p-8">

        <div className="flex items-center gap-3 mb-8">

          <FaBell className="text-3xl text-yellow-500" />

          <h2 className="text-2xl font-bold">
            Notification Preferences
          </h2>

        </div>

        <div className="space-y-6">

          {/* Email */}

          <div className="flex justify-between items-center border rounded-2xl p-5">

            <div>

              <h3 className="font-semibold">
                Email Notifications
              </h3>

              <p className="text-sm text-gray-500">
                Receive important updates by email.
              </p>

            </div>

            <label className="relative inline-flex items-center cursor-pointer">

              <input type="checkbox" defaultChecked className="sr-only peer" />

              <div className="w-14 h-7 bg-gray-300 rounded-full peer-checked:bg-emerald-600 after:absolute after:left-1 after:top-1 after:bg-white after:h-5 after:w-5 after:rounded-full after:transition-all peer-checked:after:translate-x-7"></div>

            </label>

          </div>

          {/* Push */}

          <div className="flex justify-between items-center border rounded-2xl p-5">

            <div>

              <h3 className="font-semibold">
                Push Notifications
              </h3>

              <p className="text-sm text-gray-500">
                Receive push notifications on your device.
              </p>

            </div>

            <label className="relative inline-flex items-center cursor-pointer">

              <input type="checkbox" defaultChecked className="sr-only peer" />

              <div className="w-14 h-7 bg-gray-300 rounded-full peer-checked:bg-emerald-600 after:absolute after:left-1 after:top-1 after:bg-white after:h-5 after:w-5 after:rounded-full after:transition-all peer-checked:after:translate-x-7"></div>

            </label>

          </div>

          {/* Desktop */}

          <div className="flex justify-between items-center border rounded-2xl p-5">

            <div>

              <h3 className="font-semibold">
                Desktop Notifications
              </h3>

              <p className="text-sm text-gray-500">
                Show notifications while using TaskFlow.
              </p>

            </div>

            <label className="relative inline-flex items-center cursor-pointer">

              <input type="checkbox" className="sr-only peer" />

              <div className="w-14 h-7 bg-gray-300 rounded-full peer-checked:bg-emerald-600 after:absolute after:left-1 after:top-1 after:bg-white after:h-5 after:w-5 after:rounded-full after:transition-all peer-checked:after:translate-x-7"></div>

            </label>

          </div>

          {/* Weekly */}

          <div className="flex justify-between items-center border rounded-2xl p-5">

            <div>

              <h3 className="font-semibold">
                Weekly Productivity Report
              </h3>

              <p className="text-sm text-gray-500">
                Receive weekly performance reports.
              </p>

            </div>

            <label className="relative inline-flex items-center cursor-pointer">

              <input type="checkbox" defaultChecked className="sr-only peer" />

              <div className="w-14 h-7 bg-gray-300 rounded-full peer-checked:bg-emerald-600 after:absolute after:left-1 after:top-1 after:bg-white after:h-5 after:w-5 after:rounded-full after:transition-all peer-checked:after:translate-x-7"></div>

            </label>

          </div>

        </div>

      </div>

      {/* Appearance */}

      <div className="bg-white rounded-3xl shadow-lg p-8">

        <div className="flex items-center gap-3 mb-8">

          <FaPalette className="text-3xl text-purple-600" />

          <h2 className="text-2xl font-bold">
            Appearance
          </h2>

        </div>

        {/* Theme */}

        <h3 className="font-semibold mb-5">

          Theme

        </h3>

        <div className="grid grid-cols-3 gap-5">

          <button className="border-2 border-emerald-600 rounded-2xl p-6 hover:shadow-lg">

            <FaSun className="text-4xl text-yellow-500 mx-auto mb-3" />

            <h4 className="font-semibold">
              Light
            </h4>

          </button>

          <button className="border rounded-2xl p-6 hover:shadow-lg">

            <FaMoon className="text-4xl text-gray-700 mx-auto mb-3" />

            <h4 className="font-semibold">
              Dark
            </h4>

          </button>

          <button className="border rounded-2xl p-6 hover:shadow-lg">

            💻

            <h4 className="font-semibold mt-3">
              System
            </h4>

          </button>

        </div>

        {/* Accent Color */}

        <h3 className="font-semibold mt-10 mb-5">

          Accent Color

        </h3>

        <div className="flex gap-5">

          <div className="w-10 h-10 rounded-full bg-emerald-500 cursor-pointer hover:scale-110 transition"></div>

          <div className="w-10 h-10 rounded-full bg-blue-500 cursor-pointer hover:scale-110 transition"></div>

          <div className="w-10 h-10 rounded-full bg-purple-500 cursor-pointer hover:scale-110 transition"></div>

          <div className="w-10 h-10 rounded-full bg-red-500 cursor-pointer hover:scale-110 transition"></div>

          <div className="w-10 h-10 rounded-full bg-orange-500 cursor-pointer hover:scale-110 transition"></div>

          <div className="w-10 h-10 rounded-full bg-pink-500 cursor-pointer hover:scale-110 transition"></div>

        </div>

      </div>
            {/* Storage & Backup */}

      <div className="bg-white rounded-3xl shadow-lg p-8">

        <div className="flex items-center gap-3 mb-8">

          <FaDatabase className="text-3xl text-blue-600" />

          <h2 className="text-2xl font-bold">
            Storage & Backup
          </h2>

        </div>

        <div className="grid grid-cols-2 gap-6">

          <div className="border rounded-2xl p-6 hover:shadow-lg transition">

            <h3 className="text-lg font-semibold mb-3">
              Export Data
            </h3>

            <p className="text-gray-500 mb-6">
              Download all your tasks and projects as a backup.
            </p>

            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 rounded-xl">

              Export Backup

            </button>

          </div>

          <div className="border rounded-2xl p-6 hover:shadow-lg transition">

            <h3 className="text-lg font-semibold mb-3">
              Import Data
            </h3>

            <p className="text-gray-500 mb-6">
              Restore tasks from a previous backup file.
            </p>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl">

              Import Backup

            </button>

          </div>

        </div>

      </div>

      {/* Storage Usage */}

      <div className="bg-white rounded-3xl shadow-lg p-8">

        <h2 className="text-2xl font-bold mb-8">
          Storage Usage
        </h2>

        <div className="flex justify-between mb-3">

          <span className="font-medium">
            Cloud Storage
          </span>

          <span className="font-semibold">
            2.3 GB / 10 GB
          </span>

        </div>

        <div className="w-full bg-gray-200 rounded-full h-4">

          <div
            className="bg-emerald-600 h-4 rounded-full"
            style={{ width: "23%" }}
          ></div>

        </div>

        <div className="grid grid-cols-3 gap-6 mt-8">

          <div className="bg-slate-100 rounded-xl p-5 text-center">

            <h3 className="text-3xl font-bold text-emerald-600">
              124
            </h3>

            <p className="text-gray-500 mt-2">
              Tasks
            </p>

          </div>

          <div className="bg-slate-100 rounded-xl p-5 text-center">

            <h3 className="text-3xl font-bold text-blue-600">
              15
            </h3>

            <p className="text-gray-500 mt-2">
              Projects
            </p>

          </div>

          <div className="bg-slate-100 rounded-xl p-5 text-center">

            <h3 className="text-3xl font-bold text-purple-600">
              8
            </h3>

            <p className="text-gray-500 mt-2">
              Categories
            </p>

          </div>

        </div>

      </div>

      {/* Danger Zone */}

      <div className="bg-red-50 border-2 border-red-300 rounded-3xl shadow-lg p-8">

        <h2 className="text-2xl font-bold text-red-600 mb-3">
          🚨 Danger Zone
        </h2>

        <p className="text-gray-600 mb-8">
          These actions are irreversible. Please proceed carefully.
        </p>

        <div className="space-y-5">

          <div className="flex justify-between items-center border rounded-2xl bg-white p-6">

            <div>

              <h3 className="font-semibold">
                Logout from All Devices
              </h3>

              <p className="text-gray-500 text-sm">
                End every active session on all devices.
              </p>

            </div>

            <button className="px-5 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white">

              Logout All

            </button>

          </div>

          <div className="flex justify-between items-center border rounded-2xl bg-white p-6">

            <div>

              <h3 className="font-semibold">
                Reset Application
              </h3>

              <p className="text-gray-500 text-sm">
                Remove all local settings and restore defaults.
              </p>

            </div>

            <button className="px-5 py-3 rounded-xl bg-yellow-500 hover:bg-yellow-600 text-white">

              Reset

            </button>

          </div>

          <div className="flex justify-between items-center border rounded-2xl bg-white p-6">

            <div>

              <h3 className="font-semibold text-red-600">
                Delete Account
              </h3>

              <p className="text-gray-500 text-sm">
                Permanently delete your account and all stored data.
              </p>

            </div>

            <button className="px-5 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white">

              Delete Account

            </button>

          </div>

        </div>

      </div>
      
    </div>

  );
}

export default Settings;