import { useEffect, useState } from "react"



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


    const value ={name,age,course}

    const  copy =JSON.parse(localStorage.getItem("Data")) || []

    copy.push(value)

    localStorage.setItem("Data",JSON.stringify(copy))


    setName("")
    setAge("")
    setCourse("")


  }

  useEffect(()=>{
    const show = localStorage.getItem("Data")
    const change = JSON.parse(show)
    setBtn(change)
    console.log(change)


  },[handlebtn])


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

          <h1>Name: {e.name}</h1>
          
          <p>Age: {e.age}</p>
         
          <p>
            Course: {e.course}
          </p>
          <br />
        </div>
      ))}
  </div>
  
  


  
  </>
  )
}

export default App