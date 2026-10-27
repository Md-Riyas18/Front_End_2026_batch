import { Link } from 'react-router-dom'
import img from '../assets/hero.png'


const Navbar=()=>{


  return(<>
  
    <div  className='bg-violet-300 h-30 flex justify-between items-center '>

      <div className='w-25 p-1.5 mx-5 rounded-2xl bg-violet-200' >
        <img src={img} alt="" />
      </div>


      <div className='flex gap-10 p-7'>

        <Link className='bg-white p-2 rounded-2xl font-bold' to={"/"}>Home</Link>
        <Link className='bg-white p-2 rounded-2xl font-bold' to={"/about"}>About</Link>
        <Link className='bg-white p-2 rounded-2xl font-bold' to={"/contact"}>Contact</Link>
        <Link className='bg-white p-2 rounded-2xl font-bold' to={"/help"}>Help</Link>


      </div>

    </div>
  
  </>)
}
export default Navbar

