import { useState } from "react"

const Obj = () => {

    const [obj,setObj] = useState({name:"Riyas",course:"MERN"})

const handleogj =()=>{
    setObj({...obj,depart:"Stack"})


}

   
    

  return (
    <>

    <button onClick={handleogj}>click</button>
    <div>
    
        <p>{obj.depart}</p>
    </div>
    
    
    
    </>
  )
}

export default Obj