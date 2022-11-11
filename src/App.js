import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Loading from './components/Loading'
import Notification from './components/Notification'
import CustomTheme from './CustomTheme'
import UserDashboard from './pages/dashboard/UserDashboard'
import Home from './pages/Home'


const App = () => {
  return (
    <>
    <CustomTheme>
      <Loading/>
      <Notification/>
      <BrowserRouter>
        <Routes>
          <Route path="dashboard/*" element={<UserDashboard/>}/>
          <Route path="*" element={<Home/>}/>
        </Routes>
      
      </BrowserRouter>
    </CustomTheme>
    </>
  )
}

export default App