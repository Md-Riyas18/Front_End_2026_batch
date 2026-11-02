import { useState } from "react"

const Arr = () => {

    const [arr,setArr] = useState([1,2,3,4,5,6,7,8])
    const handlearr =()=>{
        
        const copy = [...arr]
        let del = arr.filter((e,i)=>i!==0)


        copy[2] = 10000

        copy.push(9,10)


        setArr(del)

    }



  return (<>
  
    <div >
        <div>
            {arr.map((e,i)=>(
                <div key={i}>

                    <h1 className="text-4xl p-5">{e}</h1>

                </div>

            ))}
        </div>
        
        <button className="m-3 border-2 p-2 text-2xl" onClick={handlearr}>Click Me</button>
       
    </div>
  
    
  </>
  )
}

export default Arr