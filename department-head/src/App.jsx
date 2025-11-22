import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './components/pages/Dashboard'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './components/auth/Login'
import Members from './components/pages/Members'
import Attendance from './components/pages/Attendance'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
            <Route path="/" element={<Navigate to="/depdashboard" />} />
      <Route path='/depdashboard' element={<Dashboard/>}/>
      <Route path='/members' element={<Members/>}/>
      <Route path='/attendance' element={<Attendance/>}/>
     </Routes>
    </>
  )
}

export default App
