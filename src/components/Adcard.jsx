import React from 'react'

const Adcard = () => {
  return (
    <div className=' w-[50%] h-fit text-white flex flex-col  rounded-md  border-black bg-[#171A1F] m-5'>
        <div className=' p-3 flex text-white'>
            <img src="/Image.png" alt="" className='' />
            <div className=' flex flex-col'>
                <h3 className=' text-lg text-start mx-2'>Canadian Pardon Application Services</h3>
                <p className=' text-sm text-start mx-2'>Published by Akash Karale  · December 5, 2023  </p>
            </div>
        </div>
        <div className=' p-3 flex flex-col text-white'>
            <p className=' text-start'>Citizens of Canada with criminal records are eligible to apply for entry waivers to the US</p>
            <div className=' mt-3'>
                <img src="/film.png" alt="" className=' w-full  ' />
            </div>
            <div className=' flex justify-between m-2'>
                <p className=' w-[60%] text-start'>Traveling abroad with a Past Record in Canada?</p>
                <button className=' rounded-md bg-[#66B2EC] p-1 text-md'>Learn more</button>
            </div>
            <div className=' m-3 flex justify-between'>
                <span className=' flex  gap-2'>
                    0 
                    <img src="/like.png" alt="" className=' w-6' />
                    Like
                </span>
                
                <span className=' flex  gap-2'>
                    0 
                    <img src="/com.png" alt="" className=' w-6' />
                    Comment
                </span>
                <span className=' flex  gap-2'>
                    0 
                    <img src="/share.png" alt="" className=' w-6' />
                    Share
                </span>
            </div>
        </div>
      </div>
  )
}

export default Adcard
