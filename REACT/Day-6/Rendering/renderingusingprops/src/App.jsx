import Productlist from './components/Productlist'

const App = () => {

  const products = [
      { id: 1, name: "Laptop", price: 45000 },
      { id: 2, name: "Mobile", price: 20000 },
      { id: 3, name: "Headphones", price: 1500 },
      { id: 4, name: "Keyboard", price: 800 }
      ];
  return (<>
  

  <div>
    <h1>Product List</h1>
    <Productlist  datas={products}/>
  
  </div>
  
  
  </>
  )
}

export default App