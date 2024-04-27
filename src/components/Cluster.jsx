import React from 'react'
import ChartComponent from './ChartComponent'

const Cluster = () => {
  return (
    <div>
      <h1 className=' font-extrabold text-3xl text-start m-5'>Clustered Data</h1>
      <p className=' text-start mx-5' >Combine clustered column with lines and get a detailed comparison on diffrent event types and conversions.</p>
      <div className=' w-[80%] m-5'>
        <ChartComponent/>
      </div>
    </div>
  )
}

export default Cluster
