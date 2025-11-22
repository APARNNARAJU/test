// src/components/common/Navbar.jsx
import React from "react";
import { FaBars, FaBell, FaSearch } from "react-icons/fa";

const Navbar = ({ toggleSidebar, title, user }) => {
  return (
    <header className="top-navbar">
      <div className="navbar-left">
        <button className="toggle-btn" onClick={toggleSidebar}>
          <FaBars />
        </button>

        <div className="page-title">
          <h1>{title}</h1>
          <p className="page-subtitle">
            Hi, {user?.name} ({user?.role} — {user?.department} Department)
          </p>
        </div>
      </div>

      <div className="navbar-right">
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search..." />
        </div>

        <button className="icon-btn notification-btn">
          <FaBell />
          <span className="badge">3</span>
        </button>

        <div className="user-profile">
          <img
            src="https://ui-avatars.com/api/?name=Admin+User&background=4f46e5&color=fff"
            alt="profile"
            className="profile-img"
          />
          <div className="profile-info">
            <span className="profile-name">{user?.name}</span>
            <span className="profile-role">{user?.role}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
