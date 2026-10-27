import img from '../assets/1.png'
const Navbar = () => {
  return (<>
  
  <div className='overall'>

        <div className='words'>
            <h3>LearnCode</h3>
        </div>


        <div className='logo'>
            <img src={img} alt="" />
            <h2 >This is img</h2>
        </div>


        <div className='button'>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Service</a>
            <a href="">Contact</a>
        </div>






  </div>
  
  
  
  
  
  </>)
}

export default Navbar