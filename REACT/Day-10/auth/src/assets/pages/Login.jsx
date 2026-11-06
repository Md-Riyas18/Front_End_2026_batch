import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

const nav =useNavigate()

const[email,setEmail] = useState("")
const[password,setPassword] = useState("")
const[alert,setAlert]=useState("")



const handlePassword = (e)=>{
  setPassword(e.target.value)
}


const handleEmail = (e)=>{
  setEmail(e.target.value)
}


const handlebtn = (e)=>{

  e.preventDefault()

  if ( !password || !email) {
    setAlert("Please Fill This Form")
    return
  }

   
  const copy =JSON.parse(localStorage.getItem("values"))

  const verified =copy.find((e,i)=>e.email==email && e.password == password)
  if (!verified) {
    setAlert("User email & password not match")
    return
  }
  
  localStorage.setItem("LoginData",JSON.stringify(verified))

  


  setPassword("")
  setEmail("")

  setAlert("Login Successful")

  setTimeout(() => {
    nav("/")

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


    <input className=" shadow shadow-violet-500 border p-1 border-violet-800 w-50 h-12 " type="email" value={email} onChange={handleEmail} placeholder="Enter the email"/>

    <input className=" shadow shadow-violet-500 border p-1 border-violet-800 w-50 h-12 " type="password" value={password} onChange={handlePassword} placeholder="Enter the password"/>
    
    <button  type="submit" className="bg-amber-50 rounded-2xl p-2 shadow-2xl font-bold" onClick={handlebtn}>Login</button>

      </form>
    </div>

    </div>
    </>
  )
}

export default Login
