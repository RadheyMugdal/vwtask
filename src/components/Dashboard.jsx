import React from 'react';
import DataComponent from './Datacomponent';


const cardData = [
  { title: 'Spend', value: '$23,000', change: +5.4, bgColor: "#FAE7C0" },
  { title: 'Leads', value: '1,980', change: -16.6, bgColor: '#FCD7C0' },
  { title: 'Schedules', value: '490', change: -12.3, bgColor: "" },
  { title: 'Schedule rate', value: '24.8%', change: -12, bgColor: '', isPieChart: true },
  { title: 'Impressions', value: '3,975', change: +25, bgColor: '' },
  { title: 'Reach', value: '788', change: +12, bgColor: '' },
  { title: 'Frequency', value: '5.04', change: -12, bgColor: '' },
  { title: 'Scroll Stop Rate', value: '19%', change: -12, bgColor: '', isPieChart: true },
  
  { title: 'Impressions', value: '3,975', change: +25, bgColor: '' },
  { title: 'Reach', value: '788', change: +12, bgColor: '' },
  { title: 'Frequency', value: '5.04', change: -12, bgColor: '' },

  
  { title: 'Promise', value: '5.04', change: +12, bgColor: "#9DF2B9" }
];

const Card = ({ title, value, change, bgColor, isPieChart }) => (
  <div className={`bg-[${bgColor}] flex  flex-col p-2 m-2 w-[20%] text-center border-gray-200 border-2 rounded-lg ${bgColor}`}>
    <h3 className="text-lg text-start ">{title}</h3>
    <div className='  flex flex-col ' >
    <p className="text-xl my-2 text-start ">{value}</p>
    <div className=' flex justify-between'>

    <p className={`${parseInt(change) < 0 ? 'text-red-500' : 'text-green-500'}`}>{change}</p>
    <p className=' font-extralight text-slate-500   ' >Period of change</p>
    </div>
    </div>
    {isPieChart && <div className=" rounded-full border-3 border-gray-700 mx-auto mt-4"></div>}
  </div>
);

const Dashboard = () => (
  <main className=' flex  '>

  <div className="flex flex-wrap justify-center">
    {cardData.map((card, index) => (
      <Card key={index} {...card} />
    ))}
    
  </div>
  <DataComponent/>
  </main>
);

export default Dashboard;
