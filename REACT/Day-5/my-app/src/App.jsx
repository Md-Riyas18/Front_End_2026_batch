
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Rendering from './pages/Rendering'
import StringRender from './pages/StringRender'
import NumberRender from './pages/NumberRender'
import Condition from './pages/Condition'
import Optional from './pages/Optional'
import Nullish from './pages/Nullish'

const App = () => {
  return (
   <>
   
   <Navbar/>
   <Rendering/>

   <Routes>

    <Route path="/"  element={<Home/>}/>
    <Route path="/about"  element={<About/>}/>
    <Route path="/render"  element={<Rendering/>}/>
    <Route path="/string"  element={<StringRender/>}/>
    <Route path="/number"   element={<NumberRender/>}/>
    <Route path="/condition"  element={<Condition/>}/>
    <Route path="/optional"  element={<Optional/>}/>
    <Route path="/nullish"  element={<Nullish/>}/>


   </Routes>
   
   </>
  )
}

export default App