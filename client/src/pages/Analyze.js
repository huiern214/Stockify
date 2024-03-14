import React from 'react'
import '../App.css'

const Analyze = () => {
  return (
    <div>
      <div className="bg-fixed background-image">
        <div className="w-3/5 h-screen">
          <div className="flex justify-center items-center h-full text-right text-7xl font-bold">
            <div className="drop-shadow-xl">ANALYZE LIKE</div>
            <div>AN </div>
            <div className="text-[#EC0000]"> EXPERT
            </div>
          </div>
        </div>
      </div>
      <div className="h-96 w-screen">
        <div className="p-10 h-full w-5/12 float-left border border-yellow-700">
          <div className="h-full w-full flex justify-center items-center">
            <div>
              <img src="https://via.placeholder.com/150"  alt="preview" />
            </div>
          </div>
        </div>
        <div className="p-10 h-full w-7/12 float-right border border-red-700 justify-center items-center">
          <p className="text-5xl font-semibold mb-10">
            Track, Analyze, Optimize
          </p>
          <p className="mb-10">
            your investment portfolio with ease. Our Portfolio Analyzer empowers you to take control of your finances and make informed decisions.
          </p>
          <button className="p-5 rounded-xl bg-[#EC0000] text-white font-semibold hover:bg-[#EC0000]/80 hover:drop-shadow-md">GENERATE <br /> ASSESSMENT REPORT</button>
        </div>
      </div>
    </div>
  )
}

export default Analyze