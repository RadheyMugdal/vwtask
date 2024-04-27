import React from 'react'
import SimpleLineChart from './Adline';
import Adcard from './Adcard';
import Datacomponent from './Datacomponent';
const cardData = [
    { title: 'Spend', value: '$23,000', change: +5.4, bgColor: "#FAE7C0" },
    { title: 'Leads', value: '1,980', change: -16.6, bgColor: '#FCD7C0' },
    { title: 'Impressions', value: '3,975', change: +25, bgColor: '' },
    { title: 'Reach', value: '788', change: +12, bgColor: '' },

    { title: 'Scroll Stop Rate', value: '19%', change: -12, bgColor: '', isPieChart: true },
    // Repeat the cards for the second set

  
    // Add the 'Promise' card
    { title: 'Promise', value: '5.04', change: +12, bgColor: "#9DF2B9" }
  ];
  const Card = ({ title, value, change, bgColor, isPieChart }) => (
    <div className={`bg-[${bgColor}] flex  flex-col p-2 m-2 w-[90%] text-center border-gray-200 border-2 rounded-lg ${bgColor}`}>
      <h3 className="text-lg text-start ">{title}</h3>
      <div className='  flex flex-col ' >
      <p className="text-xl my-2 text-start ">{value}</p>
      <div className=' flex justify-between'>
  
      <p className={`text-${parseInt(change) < 0 ? 'red-500' : 'green-500'}`}>{change}</p>
      <p className=' font-extralight text-slate-500   ' >Period of change</p>
      </div>
      </div>
      {isPieChart && <div className=" rounded-full border-3 border-gray-700 mx-auto mt-4"></div>}
    </div>
  );
const Topad = () => {
  return (
    <div className=' flex flex-col'>
      <h1 className=' font-extrabold text-3xl text-start m-5'>Top Ad</h1>
      <p className=' text-start mx-5' >Check out the top performing ad based on your prefered goal to get the best idea of what can your next ad combination.</p>
      <select name="" id="" className=' bg-white p-2 text-md rounded-md m-5 outline-1 border-blue-400  focus:outline-blue-400 focus:ring-1 focus:ring-blue-400 w-[10%]  inline '>
        <option value="">Leads</option>
        <option value="">Clicks</option>
        <option value="">Impressions</option>
        <option value="">Reach</option>
        <option value="">Spend</option>
      </select>
      {/* ad post  */}
      <div className=' flex ' >
        <Adcard/>
      <div className=' flex flex-col w-full'>
        <div className=' flex'>
        <div className=' w-[50%] m-3'>
      <div className="grid grid-cols-2   gap-0">
    {cardData.map((card, index) => (
      <Card key={index} {...card} />
    ))}
    </div>
      </div>
      <div className=' flex-1'>
        <div className=' flex flex-col bg-[#DEE1E6FF]  w-[80%] p-4 rounded-md'>
        <h1 className=' text-xl font-bold m-3 text-start'>Add data</h1>
      <div className=' flex p-1 '>
        <div className='  flex  p-1 w-full bg-[#271B42FF]   rounded-md '>
            <div className=' flex  bg-white p-3 mr-1 rounded-md '>
            <img src="/curve.png" alt="" className=' w-5 h-5' />
                <span>Events</span>
            </div>
            <div className=' flex bg-[#271B42FF] p-3 mr-1 rounded-md text-white'>
            <img src="/curve.png " alt="" className=' invert w-5 h-5 text-white' />
                <span>Events</span>
            </div>

           
        </div>
      </div>
      <div className=' w-full '>
        <div className=' flex justify-between bg-white m-3 p-5'>
            <div className=' flex '>

            <span  className=' p-1 bg-[#271B42FF] rounded-md text-white' >C</span>
            <p className='  font-bold text-xl mx-5 '>Spend</p>
            </div>
            <img src="/add.png" alt="" className=' w-6 h-6' />
        </div>
        
        <div className=' flex justify-between bg-white m-3 p-5'>
            <div className=' flex '>

            <span  className=' p-1 bg-[#271B42FF] rounded-md text-white' >B</span>
            <p className='  font-bold text-xl mx-5 '>Reach</p>
            </div>
            <img src="/add.png" alt="" className=' w-6 h-6' />
        </div>
        <div className=' flex justify-between bg-white m-3 p-5'>
            <div className=' flex '>

            <span  className=' p-1 bg-[#271B42FF] rounded-md text-white' >B</span>
            <p className='  font-bold text-xl mx-5 '>Reach</p>
            </div>
            <img src="/add.png" alt="" className=' w-6 h-6' />
        </div>
        
      </div>
    </div>
      </div>
        </div>
        <div className=' w-[80%] h-[30%] '>
            <SimpleLineChart/>
        </div>
      </div>
      </div>

    </div>
  )
}

export default Topad
