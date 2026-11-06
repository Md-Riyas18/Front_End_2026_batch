import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


const Register = () => {


  const nav =useNavigate()
const[name,setName] = useState("")
const[password,setPassword] = useState("")
const[email,setEmail] = useState("")

const[alert,setAlert]=useState("")

const handleName = (e)=>{
  setName(e.target.value)
}

const handlePassword = (e)=>{
  setPassword(e.target.value)
}


const handleEmail = (e)=>{
  setEmail(e.target.value)
}


const handlebtn = (e)=>{

  e.preventDefault()

  if (!name || !password || !email) {
    setAlert("Please Fill This Form")
    return
  }

   
const copy =JSON.parse(localStorage.getItem("values")) || []

  const verified =copy.find((e,i)=>e.email==email)
  if (verified) {
    setAlert("This email is already used")
    return
  }
  
  const obj ={id:Date.now(),name,password,email}

  

  copy.push(obj)

  localStorage.setItem("values",JSON.stringify(copy))

  setName("")
  setPassword("")
  setEmail("")
  setAlert("Registration Successful")

  setTimeout(() => {
    nav("/login")

  },2000);


}



  return (
    <>
    <div className="bg-violet-100 flex justify-center items-center flex-col h-100 shadow shadow-violet-300">
        
      <div className="mb-6 bg-cyan-200 rounded-2xl">
          <p className="p-3 font-bold">{alert}</p>
      </div>
    <div>

      <form className="flex flex-col gap-7">

    <input className=" shadow shadow-violet-500 border p-1 border-violet-800 w-50 h-12 " type="text" value={name} onChange={handleName} placeholder="Enter the name"/>
    
    <input className=" shadow shadow-violet-500 border p-1 border-violet-800 w-50 h-12 " type="email" value={email} onChange={handleEmail} placeholder="Enter the email"/>
    <input className=" shadow shadow-violet-500 border p-1 border-violet-800 w-50 h-12 " type="password" value={password} onChange={handlePassword} placeholder="Enter the password"/>
    <button  type="submit" className="bg-amber-50 rounded-2xl p-2 shadow-2xl font-bold" onClick={handlebtn}>Register</button>

      </form>
    </div>

    </div>
    </>
  )
}

export default Register