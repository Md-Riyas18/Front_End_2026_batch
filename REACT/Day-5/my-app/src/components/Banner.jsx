import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-6 ">

      <Link to="/string"
        className="bg-blue-500 text-black font-bold px-5 py-3 rounded-xl ">
        StringRendering
      </Link>

      <Link to="/number"
        className="bg-blue-500 text-black font-bold px-5 py-3 rounded-xl ">
        NumberRender
      </Link>

      <Link to="/condition"
        className="bg-blue-500 text-black font-bold px-5 py-3 rounded-xl ">
        Condition
      </Link>

      <Link to="/optional"
        className="bg-blue-500 text-black font-bold px-5 py-3 rounded-xl ">
        Optional
      </Link>

      <Link to="/nullish"
        className="bg-blue-500 text-black font-bold px-5 py-3 rounded-xl ">
        Nullish
      </Link>

    </div>
  )
}

export default Banner