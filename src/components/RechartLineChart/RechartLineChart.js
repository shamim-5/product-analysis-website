import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const RechartLineChart = ({ cart }) => {
  return (
    <div>
      <LineChart height={300} width={400} data={cart}>
        <Line type="monotone" dataKey="investment" stroke="#8884d8" />
        <Line type="monotone" dataKey="sell" stroke="#82ca9d" />
        <Line type="monotone" dataKey="revenue" stroke="#84cc16" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
  );
};

export default RechartLineChart;
