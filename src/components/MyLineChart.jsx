import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: '01 Jan', value1: 13, value2: 20, value3: 15 },
  { name: '02 Jan', value1: 12, value2: 13, value3: 17 },
  { name: '03 Jan', value1: 17, value2: 11, value3: 11 },
  { name: '04 Jan', value1: 8, value2: 12, value3: 9 },
  { name: '05 Jan', value1: 8, value2: 13, value3: 8 },
  { name: '06 Jan', value1: 11, value2: 14, value3: 14 },
  
];

const MyLineChart = () => {
  return (
    <LineChart width={800} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="value1" stroke="#8884d8" />
      <Line type="monotone" dataKey="value2" stroke="#82ca9d" />
      <Line type="monotone" dataKey="value3" stroke="#ff7300" />
    </LineChart>
  );
};

export default MyLineChart;
