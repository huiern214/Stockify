import React from 'react'
import '../App.css'
import Sample from '../assets/Sample Assessment Report.png'
import { useNavigate } from 'react-router-dom'

const Analyze = () => {
  const navigate = useNavigate();
  const handleSubmit = async(e) => {
    navigate('/report', { replace: true });
    window.scrollTo(0, 0)
  }
  return (
    <div>
      <div className="bg-fixed flex h-fit background-image bg-cover md:bg-contain">
        <div className="w-3/5 flex flex-col justify-center items-center">
          <div className="text-right drop-shadow-2xl">
            <div className="text-2xl md:text-7xl font-bold leading-relaxed">
              ANALYZE LIKE
            </div>
            <div className="text-2xl md:text-7xl font-bold leading-relaxed">
              AN <span className="font-bold text-primary">EXPERT</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen">
        <div className="p-10 float-left">
          <div className="h-fit w-full flex flex-col md:flex-row justify-center items-center">
            <div>
              <img className='md:max-w-[35rem]' src={Sample} alt="preview" />
            </div>
            <div className="p-10 h-full float-right justify-center items-center">
          <p className="text-xl md:text-5xl font-semibold mb-10">
            Track, Analyze, Optimize
          </p>
          <p className="mb-10">
            your investment portfolio with ease. Our Portfolio Analyzer empowers you to take control of your finances and make informed decisions.
          </p>
          <button className="p-5 rounded-xl bg-primary text-white font-semibold hover:bg-blue-700 hover:drop-shadow-md animate-bounce" onClick={handleSubmit}>GENERATE <br /> ASSESSMENT REPORT</button>
        </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Analyze