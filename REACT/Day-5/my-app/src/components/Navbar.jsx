
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (<>
  
  <div className="p-8 fixed top-0 left-0 w-full z-50 bg-[#BFDBFE] px-6 py-6 flex justify-between items-center font-bold">


 
  <div className="bg-amber-50 p-2 rounded-2xl">

    <p>React Rendering</p>

  </div>
  

  <div className="flex gap-10">

    <Link className="bg-white rounded-2xl p-2" to="/">Home</Link>
    <Link className="bg-white rounded-2xl p-2" to="/about">About</Link>
    <Link className="bg-white rounded-2xl p-2" to="/render">Rendering</Link>

  </div>
  
  
   </div>
  
  
  
  
  
  </>)
}

export default Navbar