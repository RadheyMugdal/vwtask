import React from 'react'
import MyTable from './Table'

const Objective = () => {
  return (
    <div>
      <h1 className=' font-extrabold text-3xl text-start m-5'>Objective data</h1>
      <p className=' text-start mx-5' >These rows and columns shows how's your each objective performing side by side accross an entire account. Select data set to display as per your need.</p>
      <div className=' w-[80%] m-5'>
        <MyTable/>
      </div>
    </div>
  )
}

export default Objective
