import React, { useEffect, useRef, useState} from 'react'
import Heatmap from './Heatmap'
import TickerList from './TickerList'
import nasdaqFile from '../../indexdata/NASDAQ.csv'
import dowFile from '../../indexdata/DOW.csv'
import sp500File from '../../indexdata/S&P500.csv'
import IndexChart from './IndexChart'
import TopGainerStocks from './TopGainerStock'
import TrendingStocks from './TrendingStock'

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

  const chartList = [
    {
      csvFilePath: sp500File,
      title: 'S&P 500'
    },
    {
      csvFilePath: nasdaqFile,
      title: 'NASDAQ'
    },
    {
      csvFilePath: dowFile,
      title: 'DOW'
    }
  ]

  return (
    <div className="bg-white-100 text-gray-600 body-font w-full">
      <div className="mx-[5%]">
        <header className='flex justify-between items-center md:mx-3'>
          <div>
            <p className="text-2xl font-semibold text-left mt-5 mb-10 text-black">
              Home
            </p>
          </div>
          
          <div>
            <input
              type='text'
              placeholder='Search ticker'
              className='border border-gray-300 md:px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500'
            />
          </div>
        </header>

        {/* Main Content */}
        {/* Chart for the 3 indices */}
        <div className='flex flex-col justify-between w-full lg:flex-row'>
          {chartList.map((chart, index) => (
            <div key={index} className='chart-container w-full border rounded-lg p-5 my-3 md:m-3'>
              <IndexChart csvFilePath={chart.csvFilePath} title={chart.title} />
            </div>
          ))}
        </div>


      {/* Daily Movers */}
      <h2 className="my-5 md:px-4 text-2xl font-bold text-gray-700">Daily Mover</h2>
      <div className="flex flex-col md:flex-row justify-between mt-3">
        
        {/* Top Gainer Stocks */}
        <div className='w-full md:w-1/3 my-3 md:m-3'>
          <TopGainerStocks />
        </div>
        
        {/* Trending Stocks */}
        <div className="w-full md:w-1/3 my-3 md:m-3">
          <TrendingStocks/>
        </div>
        
        {/* Heatmap */}
        <div className="w-full md:w-1/3 my-3 md:m-3">
          {/* Heatmap component */}
          <Heatmap data={heatmapData} />
        </div>
      </div>
      
      {/* Market Analysis */}
      <div className='mb-5'>
        <TickerList/>
      </div>
    </div>
    </div>
  )
}

export default Home