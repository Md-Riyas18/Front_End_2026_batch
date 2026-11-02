import { useState } from "react"


const App = () => {


  const[name,setName] = useState("")
  const[age,setAge] = useState("")
  const[course,setCourse] = useState("")
  const[btn,setBtn] = useState([])


  const handlename =(e)=>{
      setName(e.target.value)

  }

  const handleage =(e)=>{
      setAge(e.target.value)

  }

  const handlecourse =(e)=>{
    
        setCourse(e.target.value)
  }

  const handlebtn =(e)=>{
    e.preventDefault()

    if(!name|| !age || !course){
      alert("Please Fill The Form")
      return
    }


    let value ={Name:name,Age:age,Course:course}

    let  copy =[...btn]

    copy.push(value)
    
    setBtn(copy)

    setName("")
    setAge("")
    setCourse("")


  }


  return (<>
  
  <div>
  <form className="p-5 flex gap-3">
      <input className="border-2" type="text" value ={name} onChange={handlename}  />
      <input className="border-2" type="number" value ={age} onChange={handleage}/>
      <input className="border-2" type="text" value ={course} onChange={handlecourse}/>
      <button className="border-2" onClick={handlebtn}>Submit</button>
  </form>
  </div>


  <div>
      {btn.map((e,i)=>(

        <div key={i}>

          <h1>Name:{e.Name}</h1>
          <h1>Age:{e.Age}</h1>
          <h1>
            Course:{e.Course}
          </h1>
        </div>
      ))}
  </div>
  
  
  
  </>
  )
}

export default App