import { useEffect, useState } from 'react'

const Dashboard = () => {

    const [display,setDisplay] = useState({})

    useEffect(()=>{

      const result = JSON.parse(localStorage.getItem("LoginData")) || {}

      setDisplay(result)

    },[])


  return (
    <>
    
    <div className='p-3 text-2xl flex flex-col gap-2 font-bold'>

     <h1>Name : {display.name}</h1>
     <h2>Email : {display.email}</h2>

    </div>
    
    
    
    
    
    </>
  )
}

export default Dashboard