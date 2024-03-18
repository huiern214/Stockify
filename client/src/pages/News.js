import React, { useState } from 'react'
import Dropdown_blue from '../assets/Dropdown-blue.png'
import Dropdown_white from '../assets/Dropdown-white.png'

function NewsCategoryDropdown() {
  const [isActive, setIsActive] = useState(false);
  const handleMouseDown = () => {
    setIsActive(true)
  }
  const handleMouseUp = () => {
    setIsActive(false)
  }

  return (
    <button className="flex items-center px-4 py-2 rounded-full border border-primary text-primary font-semibold hover:bg-blue-600 active:bg-primary active:text-white" onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
      Category
      <img src={isActive? Dropdown_white : Dropdown_blue} alt="Choose Category" className="w-5 h-5 ml-2"/>
    </button>
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
          <h2 className="text-white text-center text-lg font-extrabold">{title}</h2>
          <p className="text-gray-300 text-center font-light">{timestamp}</p>
        </div>
      </div>
    </div>
  )
}

function NewsList({ title, image, source, timestamp, desc, url }) {
  const handleReadMore = () => {
    window.location.href = url
  }

  return (
    <div className="flex flex-col md:flex-row mt-5">
      <img src={image} alt={title} className="md:w-1/5 h-fit my-5 rounded-xl" />
      <div className="w-2/3 m-5 justify-start end">
        <h2 className="font-semibold text-lg mb-1">{title}</h2>
        <p className="text-sm text-gray-600 my-1">{source} ({timestamp})</p>
        <p className="mb-2">{desc}</p>
        <button onClick={handleReadMore} className="text-primary text-sm font-semibold underline">Read more...</button>
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
      title: "Exhibition in Paris",
      image: "https://mdbcdn.b-cdn.net/img/new/standard/city/032.jpg",
      timestamp: "about 2 hours ago",
    },
    {
      title: "Welcome to California",
      image: "https://mdbcdn.b-cdn.net/img/new/standard/city/059.jpg",
      timestamp: "5 minutes ago",
    },
  ]

  const item = [
    {
      title: "XRP: Should you be looking out for a price dip?",
      image: "https://mdbcdn.b-cdn.net/img/new/standard/city/018.jpg",
      source: "AMBCrypto",
      timestamp: "7 minutes ago",
      desc: "The liquidation charts show that XRP has a bullish trajectory - for now.",
      url: "https://ambcrypto.com/xrp-should-you-be-looking-out-for-a-price-dip/#:~:text=XRP%20is%20headed%20for%20the%20range%20highs%20next&text=The%20move%20above%20the%20%240.624,headed%20higher%20at%20press%20time."
    },
    {
      title: "Watch Out: There Are Many Economic Developments and Altcon Events in the New Week - Here is the Day-by-Day, Hour-by-Hour List",
      image: "https://mdbcdn.b-cdn.net/img/new/standard/city/032.jpg",
      source: "en bitcoinsistemi",
      timestamp: "21 minutes ago",
      desc: "After an eventful week, important developments will await the cryptocurrency market in the new week. Continue Reading: Watch Out: There Are Many Economic Developments and Altcoin Events in the New Week - Here is the Day-by-Day, Hour-by-Hour List",
      url: "https://en.bitcoinsistemi.com/"
    },
    {
      title: "Buy signal for 2 strong cryptocurrencies this week",
      image: "https://mdbcdn.b-cdn.net/img/new/standard/city/059.jpg",
      source: "Finbold",
      timestamp: "34 minutes ago",
      desc: "The cryptocurrency market is in strong momentum overall, with most projects already showing overbought signals through technical analysis indicators. However, ... Continue reading",
      url: "https://finbold.com/category/stocks-news/"
    }
  ]

  return (
    <div className="flex flex-col">
      <div className="flex flex-1 flex-col md:flex-row">
        {data.map((dataItem, index) => (
          <NewsCard title={dataItem.title} image={dataItem.image} timestamp={dataItem.timestamp}/>
        ))}
      </div>

      <div className="flex flex-1 flex-col items-center">
        {item.slice(0, showMore ? item.length : 1).map((newsItem, index) => (
          <div key={index}>
            <NewsList title={newsItem.title} image={newsItem.image} source={newsItem.source} timestamp={newsItem.timestamp} desc={newsItem.desc} url={newsItem.url}/>
            {index < item.length - 1 && <hr className="my-2 border-gray-300"/>}
          </div>
        ))}
        <button onClick={handleShowMore} className="w-fit py-2 mt-5 text-primary font-semibold rounded-full hover:underline">Show More</button>
      </div>
    </div>
  )
}

const News = () => {
  return (
    <div className="container mx-auto md:px-6">
      <div className="mx-[5%] mb-5 md:mx-0">
        <p className="text-2xl font-semibold text-left mb-10 text-black">
          News
        </p>
        <NewsButtons />
        <NewsFragment />
      </div>    
    </div>
  )
}

export default News