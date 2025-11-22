import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import "../../styles/teammetrics.css";

const TeamMetrics = () => {
  const data = {
labels: ["2021", "2022", "2023", "2024"],
    datasets: [
      {
        label: "Growth",
        data: [120, 220, 180, 300],
        borderColor: "#4f46e5",
        borderWidth: 2,
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="panel">
      <div className="panel-header">
        <h3 className="panel-title">Team Metrics</h3>
      </div>

      <div className="metrics-info">
        <div><strong>Headcount:</strong> 25</div>
        <div><strong>Turnover:</strong> 12%</div>
      </div>

      <Line data={data} height={100} />
    </div>
  );
};

export default TeamMetrics;
