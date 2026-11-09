
import React from 'react'

export const Home = () => {
  return (
    <div className="h-236 flex items-center justify-center bg-[#FFF5E6]  p-6">

  
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-300">

    
        <div className="bg-red-600 p-6 text-white">
          <p className="text-sm font-medium uppercase tracking-[3px]">
            Project Declaration
          </p>

          <h1 className="text-3xl font-bold mt-2">
            About This Project
          </h1>
        </div>

    
        <div className="p-8">

          <p className="text-gray-700 text-base font-bold leading-8 text-justify">
            This project is fully based on Diwali, the day before Diwali,
            and the day after Diwali. I need to take a vlog of what I did
            during these three days and create a website based on that.
            It should be divided into Day 1, Day 2, and Day 3, detailing
            what I did, where I went, and who I was with.
            The entire project should be based on this vlog.
            Soo let's goo 🔥
          </p>

        </div>

      
        <div className="border-t border-gray-200 px-8 py-4 flex justify-between items-center">

          <p className="text-sm text-gray-500 font-medium">
            Diwali Vlog Project
          </p>

          <span className="bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-semibold">
            3 Days
          </span>

        </div>

      </div>

    </div>
  )
}

export default Home
