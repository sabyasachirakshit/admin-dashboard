import React from "react";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";

const Donutchart = () => {
  // Sample data for the donut chart
  const data = [
    { name: "Category A", value: 30 },
    { name: "Category B", value: 25 },
    { name: "Category C", value: 20 },
    { name: "Category D", value: 15 },
    { name: "Category E", value: 10 },
  ];

  // Define custom colors for chart segments
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AF19FF"];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60} // Adjust this value to create the donut effect
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default Donutchart;
