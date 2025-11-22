// import React, { useState } from "react";
// import {
//   Fab,
//   Badge,
//   Popover,
//   Card,
//   CardHeader,
//   Avatar,
//   List,
//   ListItem,
//   ListItemAvatar,
//   ListItemText,
//   Tooltip,
//   Stack,
// } from "@mui/material";
// import { 
//   FaUsers, 
//   FaCalendarCheck, 
//   FaMoneyBillWave, 
//   FaChartLine,
//   FaTachometerAlt,
//   FaUserTie,
//   FaClipboardList,
//   FaFileInvoiceDollar,
//   FaStar,
//   FaCog,
//   FaBars,
//   FaBell,
//   FaSearch,
//   FaSignOutAlt,
//   FaClock,
//   FaCheckCircle,
//   FaTimesCircle,
//   FaHourglassHalf,
//   FaTimes
// } from "react-icons/fa";
// import AddIcon from "@mui/icons-material/Add";
// import NotificationsIcon from "@mui/icons-material/Notifications";

// export default function Dashboard() {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [openReport, setOpenReport] = useState(false);

//   // Sample notifications (replace with API data)
//   const notifications = [
//     {
//       id: 1,
//       name: "John Doe",
//       message: "Leave request pending approval",
//       avatar: "https://i.pravatar.cc/40?img=1",
//     },
//     {
//       id: 2,
//       name: "Aparna R",
//       message: "Performance report submitted",
//       avatar: "https://i.pravatar.cc/40?img=2",
//     },
//   ];

//   const handleOpenNotif = (event) => setAnchorEl(event.currentTarget);
//   const handleCloseNotif = () => setAnchorEl(null);

//   const open = Boolean(anchorEl);
//   const id = open ? "notification-popover" : undefined;

//   const handleCreateReport = () => {
//     setOpenReport(true);
//     alert("Create new report clicked!"); // Replace this with your report creation logic
//   };

//   return (
//     <div>
//       {/* --- Floating Buttons Container --- */}
//       <Stack
//         direction="column"
//         spacing={2}
//         sx={{ position: "fixed", bottom: 30, right: 30 }}
//       >
//         {/* ➕ Create Report Button */}
//         <Tooltip title="Create New Report" arrow>
//           <Fab color="secondary" onClick={handleCreateReport}>
//             <AddIcon />
//           </Fab>
//         </Tooltip>

//         {/* 🔔 Notification Button */}
//         <Tooltip title="Notifications" arrow>
//           <Fab color="primary" onClick={handleOpenNotif}>
//             <Badge badgeContent={notifications.length} color="error">
//               <NotificationsIcon />
//             </Badge>
//           </Fab>
//         </Tooltip>
//       </Stack>

//       {/* --- Notification Popover --- */}
//       <Popover
//         id={id}
//         open={open}
//         anchorEl={anchorEl}
//         onClose={handleCloseNotif}
//         anchorOrigin={{
//           vertical: "top",
//           horizontal: "center",
//         }}
//         transformOrigin={{
//           vertical: "bottom",
//           horizontal: "right",
//         }}
//       >
//         <Card
//           sx={{
//             width: 320,
//             bgcolor: "#1E1E1E",
//             color: "#fff",
//             borderRadius: 3,
//             boxShadow: 4,
//           }}
//         >
//           <CardHeader title="Notifications" />
//           <List>
//             {notifications.map((n) => (
//               <ListItem key={n.id} divider>
//                 <ListItemAvatar>
//                   <Avatar src={n.avatar} />
//                 </ListItemAvatar>
//                 <ListItemText primary={n.name} secondary={n.message} />
//               </ListItem>
//             ))}
//           </List>
//         </Card>
//       </Popover>
//     </div>
//   );
// }




// MEMBERS.JSX-----------------------------------------------------------MEMBERS.JSX---------------------------------------------------------------MEMBERS.JSX---------------------------------------------------MEMBERS.JSX----------------




import React, { useState } from "react";
import {
  FaUsers,
  FaCalendarCheck,
  FaMoneyBillWave,
  FaChartLine,
  FaTachometerAlt,
  FaClipboardList,
  FaCog,
  FaBars,
  FaBell,
  FaSearch,
  FaSignOutAlt,
  FaTimes
} from "react-icons/fa";

import { Link } from "react-router-dom";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import "../../styles/dashboard.css";
import "../../styles/members.css";

import { users } from "../../data/employees";

const Members = () => {
  const user = JSON.parse(localStorage.getItem("loggedUser"));

  const filteredUsers = users.filter(
    (u) => u.department === user?.department
  );

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Members");

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: <FaTachometerAlt /> },
    { id: "Members", label: "Total Members", icon: <FaUsers /> },
    { id: "attendance", label: "Attendance", icon: <FaCalendarCheck /> },
    { id: "leaves", label: "Leave Management", icon: <FaClipboardList /> },
    { id: "payroll", label: "Payroll", icon: <FaMoneyBillWave /> },
    { id: "performance", label: "Performance", icon: <FaChartLine /> },
    { id: "settings", label: "Settings", icon: <FaCog /> },
  ];

  return (
    <div className="dashboard-wrapper">
      {sidebarOpen && (
        <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <div className="logo-container">
            <div className="logo-icon">HR</div>
            <h2 className="logo-text">Department Head</h2>
          </div>

          <button className="close-sidebar" onClick={() => setSidebarOpen(false)}>
            <FaTimes />
          </button>
        </div>

        <nav className="sidebar-nav">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              to={item.id === "dashboard" ? "/depdashboard" : `/${item.id}`}
              className={`nav-item ${activeMenu === item.id ? "active" : ""}`}
              onClick={() => {
                setActiveMenu(item.id);
                setSidebarOpen(false);
              }}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </Link>
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

      {/* Main */}
      <div className="main-wrapper">
        <header className="top-navbar">
          <div className="navbar-left">
            <button className="toggle-btn" onClick={() => setSidebarOpen(true)}>
              <FaBars />
            </button>

            <div className="page-title">
              <h1>Total Members</h1>
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

            <button className="icon-btn">
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

        {/* MEMBERS LIST */}
        <main className="content-area">
          <Typography variant="h4" sx={{ textAlign: "center", mb: 4 }}>
            {user?.department} Department Members
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {filteredUsers.map((emp) => (
              <Grid item key={emp.id} xs={12} sm={6} md={4} lg={3}>
                <Card sx={{ maxWidth: 345, boxShadow: 4 }}>
                  <CardMedia
                    sx={{ height: 180 }}
                    image="https://img.freepik.com/premium-vector/manager-icon_933463-1456.jpg"
                  />
                  <CardContent>
                    <Typography variant="h6">{emp.name}</Typography>
                    <Typography color="text.secondary">
                      {emp.role} — {emp.department}
                    </Typography>
                    <Typography color="text.secondary">{emp.email}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View Profile</Button>
                    <Button size="small" color="secondary">
                      Message
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </main>
      </div>
    </div>
  );
};

export default Members;
