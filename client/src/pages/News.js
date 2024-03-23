import React, { useState } from 'react'
import Dropdown_blue from '../assets/Dropdown-blue.png'
import Dropdown_white from '../assets/Dropdown-white.png'

function NewsCategoryDropdown() {
  const [isActive, setIsActive] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = ['Banking', 'Healthcare', 'Agriculture', 'Technology', 'Energy', 'Real Estate', 'Automobile', 'Retail', 'Telecommunication', 'Entertainment', 'Consumer Goods', 'Pharmaceutical', 'Manufacturing', 'Transportation', 'Utilities', 'Construction', 'Education', 'Financial Services', 'Hospitality', 'Media', 'Mining', 'Non-profit', 'Professional Services', 'Public Services', 'Sports', 'Travel', 'Others'];

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setIsActive(false);
  };

  const handleCategoryClear = () => {
    setSelectedCategory(null);
    setIsActive(false);
  }

  return (
    <div className='flex flex-col'>
      <button id='category-btn' onClick={handleToggle} className={`flex items-center px-4 py-2 rounded-full border border-primary text-primary font-semibold ${isActive ? 'bg-primary text-white' : 'bg-white text-primary'}`}>
        {selectedCategory || 'Choose Category'}
        <img src={isActive? Dropdown_white : Dropdown_blue} alt="Choose Category" className="w-5 h-5 ml-2"/>
      </button>
      {isActive && (
        <div className="absolute z-10 mt-11 max-h-[50%] overflow-y-auto bg-white border border-gray-200 rounded-md shadow-lg">
          {/* Choose Category Button */}
          <button onClick={handleCategoryClear} className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Choose Category
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategorySelect(category)}
              className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              {category}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

function NewsButtons() {
  const [selected, setSelected] = useState(true); // Initial state, true for "All", false for "For You"
  const handleToggle = () => {
    setSelected(!selected)
  }

  return (
    <div className="flex items-center w-auto mb-5">
      <button onClick={handleToggle} className={`px-4 py-2 mr-2 rounded-full border border-primary font-semibold ${selected ? 'bg-primary text-white' : 'bg-white text-primary'}`}>
        All
      </button>
      <button onClick={handleToggle} className={`px-4 py-2 mr-2 rounded-full border border-primary font-semibold ${!selected ? 'bg-primary text-white' : 'bg-white text-primary'}`}>
        For You
      </button>
      <NewsCategoryDropdown />
    </div>
  )
}

function NewsCard({ title, image, timestamp }) {
  return (
    <div className="my-3 md:my-0 md:w-1/3 md:mr-5">
      <div className="bg-cover bg-no-repeat relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl">
        <img src={image} alt={title} className="w-full"/>
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <h2 className="text-white text-center text-lg md:text-xl font-extrabold">{title}</h2>
          <p className="text-gray-100 mt-6 text-center font-light">{timestamp}</p>
        </div>
      </div>
    </div>
  )
}

function NewsList({ title, image, source, timestamp, desc, url, analysis }) {
  const handleReadMore = () => {
    window.location.href = url
  }

  return (
    <div className="flex flex-col md:flex-row mt-5 w-full">
      <div className="md:w-1/4">
        <img src={image} alt={title} className="min-w-full max-h-fit my-5 rounded-xl" />
      </div>
      <div className="md:w-3/4 m-5 justify-start end">
        <h2 className="font-semibold text-lg mb-1">{title}</h2>
        <p className="text-sm text-gray-600 my-1">{source} ({timestamp})</p>
        <p className="mb-2">{desc}</p>
        <button onClick={handleReadMore} className="text-primary text-sm font-semibold underline">Read more...</button>
        <div className="flex flex-col w-full justify-start items-start bg-gray-50 p-3 rounded-lg mt-2">
          <h3 className="text-sm text-gray-700 font-semibold">Stockwise Analysis</h3>
          <p className="text-gray-500 text-sm">
            {analysis}
          </p>
        </div>
      </div>
    </div>
  )
}

function NewsFragment({ selected, category }) {
  const [showMore, setShowMore] = useState(false);
  const handleShowMore = () => {
    setShowMore(!showMore)
  }
  
  const data = [
    {
      title: "Stock Market Boom",
      image: "https://mdbcdn.b-cdn.net/img/new/standard/city/018.jpg",
      timestamp: "37 minutes ago",
    },
    {
      title: "Tesla German Gigafactory to Resume Production",
      image: "https://mdbcdn.b-cdn.net/img/new/standard/city/072.jpg",
      timestamp: "3 minutes ago",
    },
    {
      title: "AgriTech Startup Raises $10M in Series A Funding",
      image: "https://mdbcdn.b-cdn.net/img/new/standard/city/055.jpg",
      timestamp: "1 hour ago",
    },
  ]

  const item = [
    {
      title: 'Tesla German Gigafactory to Resume Production',
      image: 'https://mdbcdn.b-cdn.net/img/new/standard/city/072.jpg',
      source: "TipRanks",
      timestamp: "3 minutes ago",
      desc: "Resuming production allows Tesla to strengthen its presence in the region",
      url: "https://www.schaeffersresearch.com/content/news/2023/10/19/chip-stock-soars-after-beat-and-raise",
      analysis: "Based on the news, Tesla's stock price may increase due to the resumption of production in the German Gigafactory."
    },
    {
      title: "Watch Out: There Are Many Economic Developments and Altcon Events in the New Week - Here is the Day-by-Day, Hour-by-Hour List",
      image: "https://mdbcdn.b-cdn.net/img/new/standard/city/032.jpg",
      source: "en bitcoinsistemi",
      timestamp: "21 minutes ago",
      desc: "After an eventful week, important developments will await the cryptocurrency market in the new week. Continue Reading: Watch Out: There Are Many Economic Developments and Altcoin Events in the New Week - Here is the Day-by-Day, Hour-by-Hour List",
      url: "https://en.bitcoinsistemi.com/",
      analysis: "The cryptocurrency market is in strong momentum overall, with most projects already showing overbought signals through technical analysis indicators."
    },
    {
      title: "Buy signal for 2 strong cryptocurrencies this week",
      image: "https://mdbcdn.b-cdn.net/img/new/standard/city/059.jpg",
      source: "Finbold",
      timestamp: "34 minutes ago",
      desc: "The cryptocurrency market is in strong momentum overall, with most projects already showing overbought signals through technical analysis indicators. However, ... Continue reading",
      url: "https://finbold.com/category/stocks-news/",
      analysis: "The cryptocurrency market is in strong momentum overall, with most projects already showing overbought signals through technical analysis indicators."
    },
    {
      title: "The Cream of the Crop: 3 EV Stocks With Glowing Ratings",
      image: "https://mdbcdn.b-cdn.net/img/new/standard/city/070.jpg",
      source: "InvestorsPlace",
      timestamp: "48 minutes ago",
      desc: "The glowing ratings of other EV stocks could signal increased competition for Tesla",
      url: "https://investorplace.com/2024/03/the-cream-of-the-crop-3-ev-stocks-with-glowing-ratings/",
      analysis: "The glowing ratings of other EV stocks could signal increased competition for Tesla."
    }
  ]

  return (
    <div className="flex flex-col min-w-full">
      <div className="flex flex-1 flex-col md:flex-row">
        {data.map((dataItem, index) => (
          <NewsCard title={dataItem.title} image={dataItem.image} timestamp={dataItem.timestamp}/>
        ))}
      </div>

      <div className="flex flex-1 flex-col items-start min-w-full">
        {item.slice(0, showMore ? item.length : 3).map((newsItem, index) => (
          <div key={index} className='min-w-full'>
            <NewsList title={newsItem.title} image={newsItem.image} source={newsItem.source} timestamp={newsItem.timestamp} desc={newsItem.desc} url={newsItem.url} analysis={newsItem.analysis}/>
            {index < item.length - 1 && <hr className="my-2 border-gray-300 min-w-full"/>}
          </div>
        ))}
        <div className="flex w-full justify-center items-center">
          <button onClick={handleShowMore} className="w-fit py-2 mt-5 text-primary font-semibold rounded-full hover:underline">Show {showMore ? 'Less' : 'More'}</button>
        </div>
      </div>
    </div>
  )
}

const News = () => {
  return (
    <div className="container mx-auto md:px-6">
      <div className="mx-[5%] mb-5 md:mx-0">
        <p className="text-2xl font-semibold mt-5 text-left mb-10 text-black">
          News
        </p>
        <NewsButtons />
        <NewsFragment />
      </div>    
    </div>
  )
}

export default News