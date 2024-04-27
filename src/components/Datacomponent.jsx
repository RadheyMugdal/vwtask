import React from 'react'

const Datacomponent = () => {
  return (
    <div className=' flex flex-col bg-[#DEE1E6FF] w-[50%] p-4 rounded-md'>
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
  )
}

export default Datacomponent
