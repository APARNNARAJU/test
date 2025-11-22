import React from "react";
import LinearProgress from "@mui/material/LinearProgress";

const tasks = [
  { employee: "Aparna Das", task: "Prepare monthly report", progress: 90 },
  { employee: "Sneha D", task: "Client meeting follow-up", progress: 60 },
  { employee: "Raj Kumar", task: "Operations Audit", progress: 40 },
  { employee: "Arjun Verma", task: "Team coordination", progress: 75 },
];

const OngoingTasks = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h3 style={{ marginBottom: "15px" }}>Ongoing Tasks & Progress</h3>

      {tasks.map((t, i) => (
        <div key={i} style={{ marginBottom: "18px" }}>
          <strong>{t.employee}</strong> — {t.task}
          <LinearProgress
            variant="determinate"
            value={t.progress}
            sx={{ height: 10, borderRadius: 5, marginTop: 1 }}
          />
        </div>
      ))}
    </div>
  );
};

export default OngoingTasks;
