import React from 'react'
import Dashboard from './Dashboard'

const Insight = () => {
  return (
    <div className=' '>
      <h1 className=' font-extrabold text-3xl text-start m-5'>Insights Report</h1>
      <p className=' text-start mx-5' >An insights report is a comprehensive report on total leads, spend, reach etc</p>
      <div className=' w-[95%]'>
        <Dashboard/>
      </div>
    </div>
  )
}

export default Insight
