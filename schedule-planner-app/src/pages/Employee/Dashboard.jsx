import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { FaSignOutAlt, FaHome, FaBook, FaUser, FaBars, FaTimes,FaClipboardList  } from "react-icons/fa";

const Dashboard = () => {
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed md:relative top-0 left-0 w-64 h-full bg-white shadow-xl p-4 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        {/* Close Button (Mobile) */}
        <button
          className="md:hidden absolute top-4 right-4 text-gray-600"
          onClick={() => setIsSidebarOpen(false)}
        >
          <FaTimes size={24} />
        </button>

        <h5 className="text-xl font-semibold text-gray-900 mb-4">Dashboard</h5>
        <nav className="flex flex-col gap-2">
          <button className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition">
            <FaHome className="mr-3 text-blue-900" />
            Home
          </button>
          <button className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition">
            <FaClipboardList  className="mr-3 text-blue-900" />
            Request Shift
          </button>
          <button className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition">
            <FaUser className="mr-3 text-blue-900" />
            Profile
          </button>
          <button
            onClick={handleLogout}
            className="flex items-center p-3 rounded-lg text-red-600 hover:bg-red-50 transition"
          >
            <FaSignOutAlt className="mr-3" />
            Logout
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Hamburger Menu Button (Mobile) */}
        <button
          className="md:hidden mb-4 text-gray-600"
          onClick={() => setIsSidebarOpen(true)}
        >
          <FaBars size={24} />
        </button>

        <h2 className="text-2xl font-semibold">Welcome, {user?.name || "User"}!</h2>
        
      </div>
    </div>
  );
};

export default Dashboard;
