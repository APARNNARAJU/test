import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../../components/common/depsidebar";
import Navbar from "../../components/common/depnavbar";

const Attendance = () => {
  const user = JSON.parse(localStorage.getItem("loggedUser"));
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  const [attendanceData, setAttendanceData] = useState([]);
  const [filterDate, setFilterDate] = useState("");
  const [filterName, setFilterName] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:4300/attendance/${user.department}`)
      .then((res) => setAttendanceData(res.data))
      .catch((err) => console.error(err));
  }, []);

  const filtered = attendanceData.filter((emp) =>
    emp.name.toLowerCase().includes(filterName.toLowerCase())
  );

  return (
    <div className="dashboard-wrapper">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

      <div className="main-wrapper">
        <Navbar title="Attendance" toggleSidebar={toggleSidebar} user={user} />

        <div className="content-area">

          {/* FILTERS */}
          <div className="attendance-filters">
            <input
              type="date"
              value={filterDate}
              onChange={(e) => setFilterDate(e.target.value)}
            />
            <input
              type="text"
              placeholder="Search Employee"
              value={filterName}
              onChange={(e) => setFilterName(e.target.value)}
            />
          </div>

          {/* ATTENDANCE LIST */}
          <div className="attendance-list">
            {filtered.map((emp) => (
              <div className="attendance-card" key={emp._id}>
                <h3>{emp.name}</h3>
                <p>{emp.designation}</p>
                
                {emp.attendance.length > 0 ? (
                  <p>
                    Today Status:{" "}
                    <strong>
                      {
                        emp.attendance.find((a) => a.date === filterDate)?.status ||
                        "Not Marked"
                      }
                    </strong>
                  </p>
                ) : (
                  <p>No Attendance Data</p>
                )}

                <button className="btn-small">View History</button>
                <button className="btn-small">Approve Correction</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
