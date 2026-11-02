import React from 'react'

const Productcard = ({cards}) => {
  return (<>
  
  
  <div>
    <h2>Product No : {cards.id}</h2>
    <br />
    <h2>Name : {cards.name}</h2>
    <h2>Price : {cards.price}</h2>
     <br />
  </div>
  
  
  
  </>
  )
}

export default Productcard