import React from 'react'

const StringRender = () => {

  const Name ="DOM"
  const Twoname ="React"
  return (<>
  


  <div>
    <p>
      {Twoname} (also known as {Twoname}.js or {Twoname}JS) is an open-source, component-based front-end JavaScript library developed by 
      Meta used exclusively for building dynamic and interactive user interfaces. Rather than manually manipulating the browser's Document 
      Object Model ({Name}) step-by-step, {Twoname} utilizes a declarative approach where developers describe how the UI should look for any 
      given state. It breaks the user interface down into self-contained, reusable blocks of code called components, which are written 
      using a specialized syntax extension called JSX (JavaScript XML) that blends HTML layout directly into JavaScript logic. 
      To deliver high performance, {Twoname} manages an internal, lightweight copy of the page called a Virtual {Name}. When data changes, 
      {Twoname} calculates the exact differences between the new layout and the old one (a process called reconciliation) and updates only the 
      specific elements that changed, avoiding slow, full-page reloads and making it the foundation for modern single-page web applications (SPAs) 
      and cross-platform mobile apps via {Twoname} Native.
    </p>
  </div>
  
  
  
  
  
  
  
  
  
  
  </>
  )
}

export default StringRender