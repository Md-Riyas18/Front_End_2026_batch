import { useState } from "react"

const Booleancondition = () => {

    const [condition,setCondition] = useState(true)
    const handlecon =()=>{
        setCondition(!condition)

    }



  return (<>
  
    <div>
        <h1 className="text-4xl font-bold">{condition?"This is react":"This is false"}</h1>
        <button className="m-3 border-2 p-2 text-2xl" onClick={handlecon}>Click Me</button>
       
    </div>
  
    
  </>
  )
}

export default Booleancondition