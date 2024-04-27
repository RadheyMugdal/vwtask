import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({children}) => {
  return (
    <>
    <div className=' top-0 right-0 w-screen p-3 bg-[#C7E7F0] flex  justify-between'>
      <div className=' ml-11'>
        <img src="/logo.png" alt="logo" className=" w-36 "/>
      </div>
      <div className=' flex '>
        <img src="/que.png" alt="logo" className=" w-6 h-6 mr-4 my-auto  "/>
        <img src="/avatar.png" alt="logo" className=" w-10 h-10 "/>
      </div>
    </div>
    <div className=' flex  ' >
    <div className=' left-0  w-[17%] flex flex-col justify-between bg-[#C7E7F0] p-2'>
      <div>

      <select name="" id="" className=' bg-white p-2 rounded-md w-full'>
        <option value="">Kerv Mega huston..</option>
        <option value="">Home</option>
        <option value="">About</option>
        <option value="">Contact</option>
      </select>
      <div className=' mt-6'>
      <div className=' flex p-3 cursor-pointer justify-between w-full items-center text-md ' >
        <div className=' flex'>

        <img src="/brain.png" alt="" className=' w-6' />
        <p className=' mx-2'>AI Wiz Suggest</p>
        </div>
        <div>
          <img src="/Cre.png" alt="" className=' w-6' />
        </div>
      </div>
      <div className=' flex p-3 cursor-pointer justify-between w-full items-center text-md ' >
        <div className=' flex'>

        <img src="/joint.png" alt="" className=' w-6' />
        <p className=' mx-2'>Insights</p>
        </div>
        <div>
          <img src="/Cre.png" alt="" className=' w-6' />
        </div>
      </div>
      <div className=' flex p-3 cursor-pointer justify-between w-full items-center text-md ' >
        <div className=' flex'>

        <img src="/ad.png" alt="" className=' w-6' />
        <p className=' mx-2'>Ad management</p>
        </div>
        <div>
          <img src="/Cre.png" alt="" className=' w-6' />
        </div>
      </div>
      <div className=' flex p-3 cursor-pointer justify-between w-full items-center text-md ' >
        <div className=' flex'>

        <img src="/Orientation.png" alt="" className=' w-6' />
        <p className=' mx-2'>Essentials</p>
        </div>
        <div>
          <img src="/Cre.png" alt="" className=' w-6' />
        </div>
      </div>
      <div className=' flex p-3 cursor-pointer justify-between w-full items-center text-md ' >
        <div className=' flex'>

        <img src="/Orientation.png" alt="" className=' w-6' />
        <p className=' mx-2'>Contact</p>
        </div>
        <div>
          <img src="/Cre.png" alt="" className=' w-6' />
        </div>
      </div>
      </div>
      </div>
      <div>
      <div className=' flex p-3 cursor-pointer justify-between w-full items-center text-md ' >
        <div className=' flex'>

        <img src="/setting.png" alt="" className=' w-6' />
        <p className=' mx-2'>Acct settings</p>
        </div>
        <div>
          <img src="/Cre.png" alt="" className=' w-6' />
        </div>
      </div>
      </div>
      
    </div>
    <div className=' flex-1'>
      {children}
    </div>
    </div>
    </>
  )
}

export default Navbar
