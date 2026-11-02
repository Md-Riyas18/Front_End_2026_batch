import Productcard from './Productcard'

const Productlist = ({datas}) => {
  return (<>
  
  <div>
  {datas.map((e,i)=>(

    <div key={i}>

    <Productcard  cards={e}/>

    </div>

  ))}
  
  </div>
  
  
  
  
  
  </>
  )
}

export default Productlist