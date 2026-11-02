

const App = () => {
  const arr =[1,2,3,4,5,6,7]
  return (<>
  
  
  
    <div>

    {arr.map((e,i)=>(

      <div key={i}>

        <h1>{e}</h1>

      </div>


    ))}


    </div>



  
  
  </>
  )
}

export default App