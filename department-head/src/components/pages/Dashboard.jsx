import React, { useState } from "react";
import {
  Fab,
  Badge,
  Popover,
  Card,
  CardHeader,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Tooltip,
  Stack,
  Box,
  SpeedDial,
  SpeedDialIcon,
  SpeedDialAction,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import NotificationsIcon from "@mui/icons-material/Notifications";
import {
  FaUsers,
  FaCalendarCheck,
  FaMoneyBillWave,
  FaChartLine,
  FaTachometerAlt,
  FaUserTie,
  FaClipboardList,
  FaFileInvoiceDollar,
  FaStar,
  FaCog,
  FaBars,
  FaBell,
  FaSearch,
  FaSignOutAlt,
  FaClock,
  FaCheckCircle,
  FaTimesCircle,
  FaHourglassHalf,
  FaTimes,
} from "react-icons/fa";
import "../../styles/dashboard.css";
import { Link } from "react-router-dom";
import bannerImg from "../../assets/images/com banner.jpg";
import DepartmentPerformanceChart from "./DepartmentPerformanceChart";
import OngoingTasks from "./OngoingTasks";
import TeamMetrics from "./TeamMetrics";
import ApprovalsChart from "./ApprovalsChart";
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import RuleIcon from '@mui/icons-material/Rule';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AssessmentIcon from '@mui/icons-material/Assessment';
import Sidebar from "../../components/common/depsidebar";
import Navbar from "../../components/common/depnavbar";
import { blue } from "@mui/material/colors";
const user = JSON.parse(localStorage.getItem("loggedUser"));


const Dashboard = () => {
  // Sidebar state
  // const [sidebarOpen, setSidebarOpen] = useState(false);
  // const [activeMenu, setActiveMenu] = useState("dashboard");

  const [isOpen, setIsOpen] = useState(false);
const toggleSidebar = () => setIsOpen(!isOpen);

  // MUI popup states
  const [anchorEl, setAnchorEl] = useState(null);
  const [openReport, setOpenReport] = useState(false);

  const handleOpenNotif = (event) => setAnchorEl(event.currentTarget);
  const handleCloseNotif = () => setAnchorEl(null);
  const open = Boolean(anchorEl);
  const id = open ? "notification-popover" : undefined;

  const handleCreateReport = () => {
    setOpenReport(true);
    alert("Create new report clicked!"); // Replace this with your report creation logic
  };
const actions = [
  { icon: <PersonAddAltIcon />, name: 'Add Employee' },
  { icon: <RuleIcon />, name: 'Mark Attendance' },
  { icon: <MonetizationOnIcon />, name: 'Generate Payroll' },
  { icon: <AssessmentIcon />, name: 'Create Report' },
];
  // Sample notification data
  const notifications = [
    {
      id: 1,
      name: "John Doe",
      message: "Leave request pending approval",
      avatar: "https://i.pravatar.cc/40?img=1",
    },
    {
      id: 2,
      name: "Aparna R",
      message: "Performance report submitted",
      avatar: "https://i.pravatar.cc/40?img=2",
    },
  ];

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: <FaTachometerAlt /> },
    { id: "Members", label: "Total Members", icon: <FaUsers /> },
    { id: "attendance", label: "Attendance", icon: <FaCalendarCheck /> },
    { id: "leaves", label: "Leave Management", icon: <FaClipboardList /> },
    { id: "payroll", label: "Payroll", icon: <FaMoneyBillWave /> },
    { id: "performance", label: "Performance", icon: <FaChartLine /> },
    { id: "settings", label: "Settings", icon: <FaCog /> },
  ];

  const statsCards = [
    {
      title: "Total Employees",
      value: "120",
      change: "+8 this month",
      changeType: "positive",
      icon: <FaUsers />,
      color: "#4f46e5",
      bgColor: "#eef2ff",
    },
    {
      title: "Attendance Rate",
      value: "98.2%",
      change: "+2.3% from last month",
      changeType: "positive",
      icon: <FaCalendarCheck />,
      color: "#059669",
      bgColor: "#ecfdf5",
    },
    {
      title: "Monthly Payroll",
      value: "₹3.2L",
      change: "Processed on time",
      changeType: "neutral",
      icon: <FaMoneyBillWave />,
      color: "#dc2626",
      bgColor: "#fef2f2",
    },
    {
      title: "Avg Performance",
      value: "87.5%",
      change: "+5.2% improvement",
      changeType: "positive",
      icon: <FaChartLine />,
      color: "#ea580c",
      bgColor: "#fff7ed",
    },
  ];

  const recentActivities = [
    {
      user: "John Doe",
      action: "marked attendance",
      time: "10 mins ago",
      icon: <FaCheckCircle />,
      color: "#059669",
    },
    {
      user: "Priya Sharma",
      action: "approved leave request",
      time: "25 mins ago",
      icon: <FaCheckCircle />,
      color: "#059669",
    },
    {
      user: "System",
      action: "generated monthly payroll",
      time: "1 hour ago",
      icon: <FaFileInvoiceDollar />,
      color: "#4f46e5",
    },
    {
      user: "Rajesh Kumar",
      action: "submitted performance review",
      time: "2 hours ago",
      icon: <FaStar />,
      color: "#ea580c",
    },
    {
      user: "Admin",
      action: "added new employee",
      time: "3 hours ago",
      icon: <FaUserTie />,
      color: "#0891b2",
    },
  ];

  const pendingRequests = [
    {
      type: "Leave Request",
      employee: "Sarah Johnson",
      department: "Marketing",
      status: "pending",
      icon: <FaHourglassHalf />,
    },
    {
      type: "Leave Request",
      employee: "Mike Chen",
      department: "Engineering",
      status: "pending",
      icon: <FaHourglassHalf />,
    },
    {
      type: "Attendance Appeal",
      employee: "Lisa Anderson",
      department: "HR",
      status: "pending",
      icon: <FaHourglassHalf />,
    },
    {
      type: "Leave Request",
      employee: "David Brown",
      department: "Sales",
      status: "pending",
      icon: <FaHourglassHalf />,
    },
  ];

return (
  <div className="dashboard-wrapper" style={{ backgroundColor: "rgba(240, 241, 242, 0)" }}>

    {/* New Sidebar */}
    <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

    {/* Main content wrapper */}
    <div className="main-wrapper">

      {/* New Navbar */}
      <Navbar 
        toggleSidebar={toggleSidebar}
        title="Dashboard"
        user={user}
      />

      {/* Banner */}
      <div className="dashboard-banner">
        <img src={bannerImg} alt="Dashboard Banner" className="banner-image" />
      </div>

      {/* Main content */}
      <main className="content-area" style={{ backgroundColor:'rgba(240, 241, 242, 0)' }}>
        
        {/* Stats */}
        <div className="stats-grid">
          {statsCards.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-card-body">
                <div className="stat-info">
                  <p className="stat-title">{stat.title}</p>
                  <h3 className="stat-value">{stat.value}</h3>
                  <span className={`stat-change ${stat.changeType}`}>
                    {stat.change}
                  </span>
                </div>
                <div
                  className="stat-icon"
                  style={{ backgroundColor: stat.bgColor, color: stat.color }}
                >
                  {stat.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Graphs */}
        <div className="content-grid">
          <div className="panel">
            <TeamMetrics />
          </div>
          <div className="panel">
            <ApprovalsChart />
          </div>
        </div>

        {/* Activities and Requests */}
        <div className="content-grid">
          <div className="panel activity-panel">
            <div className="panel-header">
              <h3 className="panel-title">Recent Activities</h3>
              <button className="btn-text">View All</button>
            </div>

            <div className="panel-body">
              <div className="activity-list">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="activity-item">
                    <div className="activity-icon" style={{ color: activity.color }}>
                      {activity.icon}
                    </div>
                    <div className="activity-content">
                      <p className="activity-text">
                        <strong>{activity.user}</strong> {activity.action}
                      </p>
                      <span className="activity-time">
                        <FaClock /> {activity.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="panel requests-panel">
            <div className="panel-header">
              <h3 className="panel-title">Pending Requests</h3>
              <span className="badge-count">{pendingRequests.length}</span>
            </div>

            <div className="panel-body">
              <div className="requests-list">
                {pendingRequests.map((request, index) => (
                  <div key={index} className="request-item">
                    <div className="request-icon">{request.icon}</div>
                    <div className="request-content">
                      <p className="request-type">{request.type}</p>
                      <p className="request-employee">{request.employee}</p>
                      <span className="request-dept">{request.department}</span>
                    </div>
                    <div className="request-actions">
                      <button className="btn-icon btn-approve"><FaCheckCircle /></button>
                      <button className="btn-icon btn-reject"><FaTimesCircle /></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="panel-footer">
              <button className="btn-secondary btn-block">View All Requests</button>
            </div>
          </div>
        </div>

        {/* Floating buttons */}
        <SpeedDial
          ariaLabel="SpeedDial basic example"
          sx={{ position: "absolute", bottom: 16, right: 16 }}
          icon={<SpeedDialIcon />}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              slotProps={{ tooltip: { title: action.name } }}
            />
          ))}
        </SpeedDial>
      </main>
    </div>
  </div>
);

};

export default Dashboard;
