import React from "react";
import { Pie, PieChart, Tooltip } from "recharts";

const RechartPieChart = ({ cart }) => {
  return (
    <div>
      <PieChart width={730} height={250}>
        <Pie data={cart} dataKey="sell" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
        <Pie data={cart} dataKey="investment" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
           <Pie data={cart} dataKey="revenue" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#84cc16" label />
           <Tooltip />
      </PieChart>
    </div>
  );
};

export default RechartPieChart;
