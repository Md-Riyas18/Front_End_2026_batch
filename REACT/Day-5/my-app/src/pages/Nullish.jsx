import React from 'react'

const Nullish = () => {
  // null & undefined only show the entered value otherwise nothing will show the screen
  const valueName = null
  return (
    <>
    
    {valueName??"This is Mugundhan"}
    
    
    </>
  )
}

export default Nullish