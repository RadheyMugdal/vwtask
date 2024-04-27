import React from 'react'
import MyTable from './Table'
import MyLineChart from './MyLineChart'

const Stretegy = () => {
  return (
    <div>
      <h1 className=' font-extrabold text-3xl text-start m-5'>Strategy Status Drilldown</h1>
      <p className=' text-start mx-5' >Compare 4 parameters along side over the date range selected to get a detailed view of how your account is performing.</p>
      <div className=' w-[80%] m-5'>
            <MyLineChart/>
      </div>
    </div>
  )
}

export default Stretegy
