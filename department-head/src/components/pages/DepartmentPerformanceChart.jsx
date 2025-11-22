import React, { useEffect, useState } from "react";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer
} from "recharts";

const DepartmentPerformanceChart = () => {
  const [data, setData] = useState([
    { time: "10:00", performance: 70 },
    { time: "10:10", performance: 72 },
    { time: "10:20", performance: 75 },
    { time: "10:30", performance: 73 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newValue = Math.floor(Math.random() * (95 - 70 + 1)) + 70;

      setData((prev) => [
        ...prev.slice(1),
        {
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          performance: newValue,
        },
      ]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ width: "100%", height: 300 }}>
      <h3 style={{ marginBottom: 10 }}>Live Performance Chart</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis domain={[60, 100]} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="performance"
            stroke="#4f46e5"
            strokeWidth={3}
            dot={false}
            isAnimationActive={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DepartmentPerformanceChart;
