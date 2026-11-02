
const Student = ({data}) => {
  return (
    <>
        <div className="flex justify-center bg-amber-100  gap-130 p-5">

        {data.map((pughaz,i)=>(

        
        <div key={i} className="bg-amber-50 p-5 w-500 rounded-2xl text-center">
          <img src={pughaz.logo} alt="" />
          <h3>{pughaz.name}</h3>
          <h3>{pughaz.subject}</h3>
          <h3>{pughaz.price}</h3>
        </div>





        ))}
        </div>

    
    </>
  )
}

export default Student