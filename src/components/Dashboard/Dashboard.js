import axios from "axios";
import React, { useEffect, useState } from "react";
import RechartAreaChart from "../RechartAreaChart/RechartAreaChart";
import RechartBarChart from "../RechartBarChart/RechartBarChart";
import RechartLineChart from "../RechartLineChart/RechartLineChart";
import RechartPieChart from "../RechartPieChart/RechartPieChart";

const Dashboard = () => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    axios.get("data.json").then((res) => setCart(res.data));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <RechartLineChart cart={cart}></RechartLineChart>
      <RechartBarChart cart={cart}></RechartBarChart>
      <RechartAreaChart cart={cart}></RechartAreaChart>
      <RechartPieChart cart={cart}></RechartPieChart>
    </div>
  );
};

export default Dashboard;
