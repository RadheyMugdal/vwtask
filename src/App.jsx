import { useState } from 'react'
import './App.css'
import ChartComponent from './components/ChartComponent'
import Dashboard from './components/Dashboard'
import MyLineChart from './components/MyLineChart'

import MyFunnelChart from './components/MyFunnelChart'
import MyFunnelChart2 from './components/MyFunnelChart'
import Navbar from './components/Navbar'
import Insight from './components/Insight'
import Objective from './components/Objective'
import Stretegy from './components/Stretegy'
import Cluster from './components/Cluster'
import Topad from './components/Topad'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar>

    <Insight/>
    <Objective/>
    <Stretegy/>
    <Cluster/>
    <Topad/>
    </Navbar>
    </>
  )
}

export default App
