// const Button = ()=>{


//     return (


//       <>
      
//       <div className="banner">
//         THis is Button
//       </div>

//       <AlertButton/>
      
//       </>



//     )


// }


// export default Button





// const AlertButton = ()=>{


//     return (<>
    

//     <button className="btn">This is Alert</button>
    
//     </>)

// }



// export const NewAlartButton = ()=>{

//   return (<>
  

//   <button className="btn">This is New Alert</button>
  
//   </>)


// }


const Button = ()=>{

    return (<>
    
    <div>
        <h2>Button</h2>
        <button className="button">Click</button>
    </div>
    
    <Twobutton/>
    
    </>)
}
export default Button


const Twobutton = ()=>{
    return (<>
    
    <div className="div">

        <h2>Two Button</h2>
        <button className="One">Start</button>
        <button className="Two">End</button>

    </div>
    
    </>)
}



export const NewAlartButton = ()=>{

  return (<>
  

  <button className="btn">This is New Alert</button>
  
  </>)


}
