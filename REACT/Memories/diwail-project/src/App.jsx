import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home  from './pages/Home'
import Days from './pages/Days'
import DayOne from './pages/DayOne'
import DayTwo from './pages/DayTwo'
import DayThree from './pages/DayThree'

const App = () => {
  return (<>
  
  
  <Navbar/>

  <Routes>

    <Route path='/' element={<Home/>}/>
    <Route path='/days' element={<Days/>}/>
    <Route path='/day-1' element={<DayOne/>}/>
    <Route path='/day-2' element={<DayTwo/>}/>
    <Route path='/day-3' element={<DayThree/>}/>

  </Routes>

 
  
  
   
  
  
  </>
  )
}

export default App