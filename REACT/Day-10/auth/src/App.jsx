import React from 'react'
import Navbar from './assets/components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './assets/pages/Dashboard'
import Login from './assets/pages/Login'
import Register from './assets/pages/Register'

const App = () => {
  return (
    <>
    
    
    <Navbar/>
    
    <Routes>

    <Route path='/' element={<Dashboard/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>


    </Routes>
    
    
    
    
    </>
  )
}



export default App