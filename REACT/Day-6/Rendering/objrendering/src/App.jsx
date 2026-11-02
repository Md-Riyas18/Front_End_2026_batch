

const App = () => {
  const obj ={name:"Riyas",course:"MERN",class:"CR-6"}
  return (<>
  
  
  <div className="flex  justify-center gap-40 text-2xl font-bold">
    <p>Name : {obj.name}</p>
    <p>Course : {obj.course}</p>
    <p>Class : {obj.class}</p>
  </div>
  
  
  
  </>
  )
}

export default App