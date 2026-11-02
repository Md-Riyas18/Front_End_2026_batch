import { useState } from "react"

const Number = () => {

    const [num,setNum] = useState(0)
    const handleNum =()=>{
        setNum(num+1)

    }
    const handleDec =()=>{
        setNum(num-1)

    }


  return (<>
  
    <div>
        <h1 className="text-4xl font-bold">{num}</h1>
        <button className="m-3 border-2 p-2 text-2xl" onClick={handleNum}>Click Me</button>
        <button className="m-3 border-2 p-2 text-2xl" onClick={handleDec}>Decrease Me</button>
    </div>
  
    
  
  
  </>
  )
}

export default Number