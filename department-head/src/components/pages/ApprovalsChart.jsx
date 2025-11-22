import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const ApprovalsChart = () => {
  const data = {
labels: ["Assigned", "In Progress", "Completed", "On Hold"],
    datasets: [
      {
        label: "Approvals",
        data: [320, 450, 380, 520],
        backgroundColor: "#415d7eff",
      },
    ],
  };

  return (
    <div className="panel">
      <div className="panel-header">
        <h3 className="panel-title">Approvals</h3>
      </div>
      <Bar data={data} height={120} />
    </div>
  );
};

export default ApprovalsChart;
