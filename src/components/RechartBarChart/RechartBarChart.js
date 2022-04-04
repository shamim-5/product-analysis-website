import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const RechartBarChart = ({cart}) => {
  return (
    <div>
      <BarChart width={730} height={250} data={cart}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="investment" fill="#82ca9d" />
        <Bar dataKey="sell" fill="#8884d8" />
        <Bar dataKey="revenue" fill="#84cc16" />
      </BarChart>
    </div>
  );
};

export default RechartBarChart;