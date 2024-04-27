import React from 'react';
import { FunnelChart, Funnel, Tooltip, LabelList, Cell } from 'recharts';


const data = [
  { value: 1200, name: 'Clicks', fill: '#8884d8' },
  { value: 900, name: 'Leads', fill: '#8dd1e1' },
  { value: 450, name: 'Schedules', fill: '#82ca9d' },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${payload[0].name} : ${payload[0].value}`}</p>
        <p className="intro">{`${(payload[0].value / 1200 * 100).toFixed(1)}%`}</p>
      </div>
    );
  }

  return null;
};

const MyFunnelChart2 = () => (
  <div style={{ display: 'flex' }}>
   
    <FunnelChart width={200} height={250}>
      <Tooltip content={<CustomTooltip />} />
      <Funnel
        dataKey="value"
        data={data}
        isAnimationActive
      >
        <LabelList position="right" fill="#000" stroke="none" dataKey="name" />
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.fill} />
        ))}
      </Funnel>
    </FunnelChart>
    <FunnelChart width={200} height={250}>
      <Tooltip content={<CustomTooltip />} />
      <Funnel
        dataKey="value"
        data={data}
        isAnimationActive
      >
        <LabelList position="right" fill="#000" stroke="none" dataKey="name" />
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.fill} />
        ))}
      </Funnel>
    </FunnelChart>
    <FunnelChart width={200} height={250}>
      <Tooltip content={<CustomTooltip />} />
      <Funnel
        dataKey="value"
        data={data}
        isAnimationActive
      >
        <LabelList position="right" fill="#000" stroke="none" dataKey="name" />
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.fill} />
        ))}
      </Funnel>
    </FunnelChart>
    <FunnelChart width={200} height={250}>
      <Tooltip content={<CustomTooltip />} />
      <Funnel
        dataKey="value"
        data={data}
        isAnimationActive
      >
        <LabelList position="right" fill="#000" stroke="none" dataKey="name" />
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.fill} />
        ))}
      </Funnel>
    </FunnelChart>
    {/* ... */}
  </div>
);

export default MyFunnelChart2;
