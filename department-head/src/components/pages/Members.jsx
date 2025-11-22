import React, { useState, useEffect } from "react";

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
import Sidebar from "../../components/common/depsidebar";
import Navbar from "../../components/common/depnavbar";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import "../../styles/dashboard.css";
import "../../styles/members.css";
import axios from "axios";


// import { users } from "../../data/employees";

const Members = () => {
  const user = JSON.parse(localStorage.getItem("loggedUser"));

  const [dbUsers, setDbUsers] = useState([]);
const [isOpen, setIsOpen] = useState(false);
const toggleSidebar = () => setIsOpen(!isOpen);

  useEffect(() => {
  if (user?.department) {
    axios
      .get(`http://localhost:4300/depmembers/${user.department}`)
      .then((res) => setDbUsers(res.data))
      .catch((err) => console.error(err));
  }
}, [user]);


  // const dbUsers = users.filter(
  //   (u) => u.department === user?.department
  // );

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

    <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

    <div className="main-wrapper">

      <Navbar 
        toggleSidebar={toggleSidebar}
        title="Total Members"
        user={user}
      />

      <main className="content-area">

        <Typography variant="h4" sx={{ textAlign: "center", mb: 4 }}>
          {user?.department} Department Members
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {dbUsers.map((emp) => (
            <Grid item key={emp._id} xs={12} sm={6} md={4} lg={3}>
              <Card sx={{ maxWidth: 345, boxShadow: 4 }}>
                <CardMedia sx={{ height: 180 }}
                  image="https://img.freepik.com/premium-vector/manager-icon_933463-1456.jpg"
                />

                <CardContent>
                  <Typography variant="h6">{emp.name}</Typography>
                  <Typography color="text.secondary">
                    {emp.position} — {emp.department}
                  </Typography>
                  <Typography color="text.secondary">{emp.email}</Typography>
                </CardContent>

                <CardActions>
                  <Button size="small">View Profile</Button>
                  <Button size="small" color="secondary">
                    Perfomance
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
