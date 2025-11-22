// src/components/common/Sidebar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { 
  FaUsers, 
  FaCalendarCheck, 
  FaMoneyBillWave, 
  FaChartLine, 
  FaTachometerAlt, 
  FaClipboardList, 
  FaCog, 
  FaSignOutAlt, 
  FaTimes 
} from "react-icons/fa";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: <FaTachometerAlt />, path: "/depdashboard" },
    { id: "Members", label: "Total Members", icon: <FaUsers />, path: "/Members" },
    { id: "attendance", label: "Attendance", icon: <FaCalendarCheck />, path: "/attendance" },
    { id: "leaves", label: "Leave Management", icon: <FaClipboardList />, path: "/leaves" },
    { id: "payroll", label: "Payroll", icon: <FaMoneyBillWave />, path: "/payroll" },
    { id: "performance", label: "Performance", icon: <FaChartLine />, path: "/performance" },
    { id: "settings", label: "Settings", icon: <FaCog />, path: "/settings" },
  ];

  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-header">
        <div className="logo-container">
          <div className="logo-icon">HR</div>
          <h2 className="logo-text">Department Head</h2>
        </div>
        <button className="close-sidebar" onClick={toggleSidebar}>
          <FaTimes />
        </button>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
            onClick={toggleSidebar}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div
          className="nav-item logout"
          onClick={() => {
            localStorage.removeItem("loggedUser");
            window.location.href = "/";
          }}
        >
          <FaSignOutAlt /> Logout
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
