
import React from 'react'
import { Link } from 'react-router-dom'

const Days = () => {
  return (
    <div className="min-h-screen bg-[#FFF5E6] flex justify-center px-6 pt-36 pb-10">

      <div className="w-full max-w-4xl">

      
        <div className="text-center mb-10">
          <p className="text-orange-600 font-bold tracking-[5px] uppercase text-base ">
            Festival Memories
          </p>

          

          <p className="text-gray-500 mt-3 text-lg">
            Three days, countless memories ❤️
          </p>
        </div>

        
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-orange-100">

          <div className="flex items-center gap-4 mb-5">
            <div className="bg-orange-100 p-4 rounded-2xl text-3xl">
              🪔
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                About My 3-Day Vlog
              </h2>

              <p className="text-orange-500 text-sm font-semibold">
                A special Diwali celebration
              </p>
            </div>
          </div>

          <p className="text-gray-600 text-base leading-8 text-justify">
            The 3-day Diwali vlog is divided into three parts per day:
            morning, evening, and night. Each day captures my activities,
            places I visited, people I spent time with, and special moments.
            Explore each day to discover my Diwali memories.
          </p>

          
          <div className="mt-8">

            <h3 className="text-lg font-bold text-gray-800 mb-5">
              Explore My Days
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">

              <Link
                to="/day-1"
                className="group bg-orange-500 hover:bg-orange-600 text-white rounded-2xl p-6 text-center shadow-lg hover:shadow-orange-300 hover:-translate-y-2 transition-all duration-300"
              >
                <p className="text-4xl mb-3">🌅</p>
                <h2 className="text-2xl font-extrabold">Day 01</h2>
                <p className="text-sm mt-2 text-orange-100">
                  First Day
                </p>
                <p className="mt-4 font-bold">Explore →</p>
              </Link>

              <Link
                to="/day-2"
                className="group bg-amber-500 hover:bg-amber-600 text-white rounded-2xl p-6 text-center shadow-lg hover:shadow-amber-300 hover:-translate-y-2 transition-all duration-300"
              >
                <p className="text-4xl mb-3">🪔</p>
                <h2 className="text-2xl font-extrabold">Day 02</h2>
                <p className="text-sm mt-2 text-amber-100">
                  Diwali Day
                </p>
                <p className="mt-4 font-bold">Explore →</p>
              </Link>

              <Link
                to="/day-3"
                className="group bg-red-500 hover:bg-red-600 text-white rounded-2xl p-6 text-center shadow-lg hover:shadow-red-300 hover:-translate-y-2 transition-all duration-300"
              >
                <p className="text-4xl mb-3">🎆</p>
                <h2 className="text-2xl font-extrabold">Day 03</h2>
                <p className="text-sm mt-2 text-red-100">
                  Final Day
                </p>
                <p className="mt-4 font-bold">Explore →</p>
              </Link>

            </div>
          </div>

        </div>

        <p className="text-center text-gray-500 text-sm mt-8">
          Made with ❤️ for Diwali Memories
        </p>

      </div>
    </div>
  )
}

export default Days
