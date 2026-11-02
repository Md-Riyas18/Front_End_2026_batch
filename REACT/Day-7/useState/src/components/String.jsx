import { useState } from "react"

const String = () => {

    const [name,setName] = useState("This is nathiya")
    const handleText =()=>{
        setName("This is mayil")

    }

  return (<>
  
    <div>
        <h1 className="text-4xl font-bold">{name}</h1>
        <button className="m-3 border-2 p-2 text-2xl" onClick={handleText}>Click Me</button>
    </div>
  
    
  
  
  </>
  )
}

export default String