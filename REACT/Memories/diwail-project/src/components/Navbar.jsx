
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className='fixed top-0 left-0 w-full z-50 p-3 bg-white flex justify-between items-center shadow-lg'>

      <div className='w-25 ml-5'>
        <img src={logo} alt="logo" />
      </div>

      <div>
        <h2 className="font-extrabold text-5xl uppercase tracking-wider text-black">
          DIWALI VLOG
        </h2>
      </div>

      <div className="flex gap-8 p-5">
        <Link
          className='bg-red-500 text-white p-2 rounded-2xl font-bold hover:bg-red-600 '
          to='/'
        >
          Home
        </Link>

        <Link
          className='bg-red-500 text-white p-2 rounded-2xl font-bold hover:bg-red-600 '
          to='/days'
        >
          Days
        </Link>
      </div>

    </div>
  )
}

export default Navbar
