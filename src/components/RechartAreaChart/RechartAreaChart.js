import React from 'react';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

const RechartAreaChart = ({cart}) => {
   return (
     <div>
       <AreaChart width={730} height={250} data={cart} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
         <defs>
           <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
             <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
             <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
           </linearGradient>
           <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
             <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
             <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
           </linearGradient>
           <linearGradient id="colorSv" x1="0" y1="0" x2="0" y2="1">
             <stop offset="5%" stopColor="#84cc16" stopOpacity={0.8} />
             <stop offset="95%" stopColor="#84cc16" stopOpacity={0} />
           </linearGradient>
         </defs>
         <XAxis dataKey="month" />
         <YAxis />
         <CartesianGrid strokeDasharray="3 3" />
         <Tooltip />
         <Area type="monotone" dataKey="investment" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
         <Area type="monotone" dataKey="sell" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
         <Area type="monotone" dataKey="revenue" stroke="#84cc16" fillOpacity={1} fill="url(#colorSv)" />
       </AreaChart>
     </div>
   );
};

export default RechartAreaChart;