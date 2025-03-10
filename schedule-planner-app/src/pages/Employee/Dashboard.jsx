import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { FaSignOutAlt, FaHome, FaUser } from "react-icons/fa";

const Dashboard = () => {
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-600 text-white p-6 space-y-6">
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <nav>
          <ul className="space-y-4">
            <li className="flex items-center space-x-2">
              <FaHome />
              <a href="/homepage" className="hover:underline">Home</a>
            </li>
            <li className="flex items-center space-x-2">
              <FaUser />
              <a href="/profile" className="hover:underline">Profile</a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <h2 className="text-lg font-semibold">Welcome, {user?.email}</h2>
          <button
            onClick={handleLogout}
            className="flex items-center bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            <FaSignOutAlt className="mr-2" /> Logout
          </button>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          <h3 className="text-2xl font-semibold">Dashboard Overview</h3>
          <p className="mt-2 text-gray-600">This is your dashboard where you can manage your tasks and settings.</p>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
