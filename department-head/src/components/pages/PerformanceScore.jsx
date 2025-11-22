import React from "react";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";

const PerformanceScore = () => {
  const data = {
    labels: ["Leadcount", "Pending", "Requests"],
    datasets: [
      {
        data: [45, 30, 25],
        backgroundColor: ["#4f46e5", "#f59e0b", "#ef4444"],
        borderWidth: 0,
      },
    ],
  };

  return (
    <div className="panel">
      <div className="panel-header">
        <h3 className="panel-title">Performance Score</h3>
      </div>
      <Doughnut data={data} />
    </div>
  );
};

export default PerformanceScore;
