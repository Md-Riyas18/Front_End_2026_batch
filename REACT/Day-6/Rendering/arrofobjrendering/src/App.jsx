import React from 'react'
import Student from './component/Student'
import img from './assets/hero.png'

const App = () => {

  const obj=[{ name:"React", subject:"node", price:2000 ,logo:img},
              {name:"JS", subject:"node", price:5000,logo:img},
              {name:"HTML", subject:"node", price:9000,logo:img},
              {name:"CSS", subject:"node", price:10000,logo:img}
  ]
  return (
    <>
    <Student data={obj} />
    
    
    </>
    
   
  )
}

export default App