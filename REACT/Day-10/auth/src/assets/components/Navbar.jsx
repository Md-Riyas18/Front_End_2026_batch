import { Link } from "react-router-dom"


const Navbar = () => {
  return (<>
  
  
  <div className='bg-violet-300 h-20 flex justify-between'>

    <div className='p-3 '>
        <img className="ml-3" src="./favicon.svg" alt="" />
    </div>

    <div className="flex gap-10 items-center mr-10">
        <Link className="bg-white p-2 rounded-2xl font-bold" to='/'>Dashboard</Link>
        <Link className="bg-white p-2 rounded-2xl font-bold" to='/login'>Login</Link>
        <Link className="bg-white p-2 rounded-2xl font-bold" to='/register'>Register</Link>
    </div>



  </div>
  
  
  
  </>
  )
}

export default Navbar