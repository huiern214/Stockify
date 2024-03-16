import React, { useEffect, useRef, useState} from 'react'
import Heatmap from '../components/Heatmap'
import TickerList from '../components/TickerList'
import nasdaqFile from '../indexdata/NASDAQ.csv'
import dowFile from '../indexdata/DOW.csv'
import sp500File from '../indexdata/S&P500.csv'
import IndexChart from '../components/IndexChart'
import TopGainerStocks from '../components/TopGainerStock'
import TrendingStocks from '../components/TrendingStock'

const Home = () => {

  // Data for Heatmap
  const heatmapData = [
    {
      name: 'Category 1',
      stocks: [
        { name: 'AAPL', change: 2.5 },
        { name: 'GOOG', change: -1.8 },
        { name: 'MSFT', change: 0.3 },
        // Add more stocks as needed
      ]
    },
    {
      name: 'Category 2',
      stocks: [
        { name: 'AMZN', change: 1.7 },
        { name: 'FB', change: -3.2 },
        { name: 'NFLX', change: 0.9 },
        // Add more stocks as needed
      ]
    },
    // Add more categories as needed
  ];

  return (
    <div className="bg-white-100 text-gray-600 body-font w-full">
        <header className='flex justify-between items-center px-4 mt-3 mb-3'>
          <div>
            <a href='/' className='text-2xl font-bold text-black'>Home</a>
          </div>

          <div>
            <input
              type='text'
              placeholder='Search ticker or company'
              className='border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500'
            />
          </div>
        </header>

        {/* Main Content */}
          
          {/* Chart for the 3 indices */}
          <div className='flex justify-between'>
            {/* S&P500 Chart */}
            <div className='chart-container'>
              <IndexChart csvFilePath = {sp500File} title='S&P 500'/>
            </div>

            {/* NASDAQ Chart */}
            <div className='chart-container'>
              <IndexChart csvFilePath = {nasdaqFile} title='NASDAQ'/>  
            </div>

            {/* DOW Chart */}
            <div className='chart-container'>
              <IndexChart csvFilePath = {dowFile} title='DOW'/>
            </div>
          </div>

          <h1 className='font-bold px-4 text-xl text-black mt-5'>Daily Mover</h1>

          {/* Daily Movers */}
          <div className="flex justify-between space-x-4 mt-3">
            
            {/* Top Gainer Stocks */}
            <div className='w-full'>
              <TopGainerStocks />
            </div>
            
            {/* Trending Stocks */}
            <div className="w-full">
              <TrendingStocks/>
            </div>
            
            {/* Heatmap */}
            <div className="w-1/3">
              {/* Heatmap component */}
              <Heatmap data={heatmapData} />
            </div>
          </div>
          
          {/* Market Analysis */}
          <div className="flex justify-between items-center mt-5 mb-4">
            <div>
              <h2 className="px-4 font-bold text-xl text-black">Market Analysis</h2>
            </div>
            <button className="text-sm text-black opacity-35 hover:opacity-60 rounded-lg px-3 py-1 border border-black mr-5">View All</button>
          </div>

          <div className='mb-5'>
            <TickerList/>
          </div>
    </div>
  )
}

export default Home