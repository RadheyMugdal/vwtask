import React from 'react';
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: '01 Jan', Spend: 2000, Impression: 1800, Reach: 1600, Leads: 2400, Schedules: 1000 ,Bars:1000},
  { name: '02 Jan', Spend: 1800, Impression: 1200, Reach: 1100, Leads: 2900, Schedules: 1200 ,Bars:2500},
  { name: '03 Jan', Spend: 2100, Impression: 1400, Reach: 1300, Leads: 2200, Schedules: 900,Bars:3000 },
  { name: '04 Jan', Spend: 1400, Impression: 1100, Reach: 1000, Leads: 2300, Schedules: 1400,Bars:2000 },
  { name: '05 Jan', Spend: 3200, Impression: 2000, Reach: 2000, Leads: 2700, Schedules: 1700,Bars:1900 },
  { name: '06 Jan', Spend: 1200, Impression: 1800, Reach: 1700, Leads: 2200, Schedules: 1200 ,Bars:1800},
  { name: '07 Jan', Spend: 3400, Impression: 1900, Reach: 2400, Leads: 3900, Schedules: 3000 ,Bars:1200},
];

const ChartComponent = () => (
  <div>

    <ComposedChart width={800} height={300} data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="Bars" barSize={20} fill="rgba(0, 123, 255, 0.5)" />
      <Line type="monotone" dataKey="Spend" stroke="#8884d8" />
      <Line type="monotone" dataKey="Impression" stroke="#82ca9d" />
      <Line type="monotone" dataKey="Reach" stroke="#ffc658" />
      <Line type="monotone" dataKey="Leads" stroke="#ff7300" />
      <Line type="monotone" dataKey="Schedules" stroke="#d0ed57" />
    </ComposedChart>
  </div>
);

export default ChartComponent;
