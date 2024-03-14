import React from 'react'
import '../App.css'
import Report from './Report'
import { useNavigate } from 'react-router-dom'

const Analyze = () => {
  const navigate = useNavigate();
  const handleSubmit = async(e) => {
    navigate('/report', { replace: true })
  }
  return (
    <div>
      <div className="bg-fixed flex h-screen background-image">
        <div className="w-3/5 flex flex-col justify-center items-center">
          <div className="text-right drop-shadow-2xl">
            <div className="text-7xl font-bold leading-relaxed">
              ANALYZE LIKE
            </div>
            <div className="text-7xl font-bold leading-relaxed">
              AN <span className="font-bold text-red-700">EXPERT</span>
            </div>
          </div>
        </div>
      </div>
      <div className="h-96 w-screen">
        <div className="p-10 h-full w-5/12 float-left">
          <div className="h-full w-full flex justify-center items-center">
            <div>
              <img src="https://via.placeholder.com/150" alt="preview" />
            </div>
          </div>
        </div>
        <div className="p-10 h-full w-7/12 float-right justify-center items-center">
          <p className="text-5xl font-semibold mb-10">
            Track, Analyze, Optimize
          </p>
          <p className="mb-10">
            your investment portfolio with ease. Our Portfolio Analyzer empowers you to take control of your finances and make informed decisions.
          </p>
          <button className="p-5 rounded-xl bg-[#EC0000] text-white font-semibold hover:bg-[#EC0000]/80 hover:drop-shadow-md" onClick={handleSubmit}>GENERATE <br /> ASSESSMENT REPORT</button>
        </div>
      </div>
    </div>
  )
}

export default Analyze