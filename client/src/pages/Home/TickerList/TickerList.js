import React, { useState, useEffect } from 'react';
import DisplayChart from '../../../components/Past30DaysChart/DisplayChart';
import useFetchHistoricalStockData from '../../../components/Past30DaysChart/fetchStockHistoricalData';
import useStockData from './TickerData';
import ox from '../../../assets/ox.png';
import bear from '../../../assets/bear.png';
import eagle from '../../../assets/eagle.png';
import { FaStar, FaRegStar } from 'react-icons/fa';
// import polarbear from '../../../assets/polarbear.png';

const TickerList = () => {

  const [viewMore, setViewMore] = useState(false);

  const toggleViewMore = () => {
    setViewMore(!viewMore);
  };

  // fetch the real time TSLA data using finhub API
  // const tslaData = useStockData('TSLA', 173.8);

  //Set the default stock price
  const [applData, setAAPLData] = useState({
    currentPrice: 172.5,
    previousPrice: 173.6,
    change: 1.06,
    changePercent: 0.61,
  });

  const [tslaData, setTSLAData] = useState({
    currentPrice: 173.8,
    previousPrice: 173.6,
    change: 2.28,
    changePercent: 0.47,
  });

  const [msftData, setMSFTData] = useState({
    currentPrice: 421.41,
    previousPrice: 417.32,
    change: 4.09,
    changePercent: 0.98,
  });

  const [amznData, setAMZNData] = useState({
    currentPrice: 175.9,
    previousPrice: 174.48,
    change: 1.42,
    changePercent: 0.81,
  });

  const [googlData, setGOOGLData] = useState({
    currentPrice: 147.92,
    previousPrice: 148.48,
    change: -0.56,
    changePercent: -0.38,
  });

  const [metaData, setMETAData] = useState({
    currentPrice: 496.24,
    previousPrice: 496.98,
    change: -0.74,
    changePercent: -0.15,
  });

  const [nvdaData, setNVDAData] = useState({
    currentPrice: 893.98,
    previousPrice: 884.55,
    change: 0.43,
    changePercent: 1.07,
  });

  const [nflxData, setNFLXData] = useState({
    currentPrice: 620.74,
    previousPrice: 618.39,
    change: 2.35,
    changePercent: 0.38,
  });

  const [pyplData, setPYPLData] = useState({
    currentPrice: 63.01,
    previousPrice: 64.23,
    change: -1.22,
    changePercent: -1.90,
  });

  const [maData, setMAData] = useState({
    currentPrice: 484.00,
    previousPrice: 478.89,
    change: 5.11,
    changePercent: 1.07,
  });



  // Function to generate random value within a range with two decimal places
  const getRandomValue = (min, max) => {
    const random = Math.random() * (max - min) + min;
    return parseFloat(random.toFixed(2)); // Limit to two decimal places
  };

  // Update stock data every 2 seconds with random current price
  useEffect(() => {
    //Update AAPL Data
    const interval = setInterval(() => {
      const aaplnewCurrentPrice = getRandomValue(172.5, 175);
      const aaplchangeValue = aaplnewCurrentPrice - applData.previousPrice;
      const aaplchangePercentValue = (aaplchangeValue / applData.previousPrice) * 100;
  
      setAAPLData({
        previousPrice: applData.currentPrice,
        currentPrice: aaplnewCurrentPrice,
        change: aaplchangeValue,
        changePercent: aaplchangePercentValue,
      });

      //Update TSLA Data
      const tslanewCurrentPrice = getRandomValue(173, 176);
      const tslachangeValue = tslanewCurrentPrice - tslaData.previousPrice;
      const tslachangePercentValue = (tslachangeValue / tslaData.previousPrice) * 100;
  
      setTSLAData({
        previousPrice: tslaData.currentPrice,
        currentPrice: tslanewCurrentPrice,
        change: tslachangeValue,
        changePercent: tslachangePercentValue,
      });
      
      //Update MSFT Data
      const msftnewCurrentPrice = getRandomValue(416, 422);
      const msftchangeValue = msftnewCurrentPrice - msftData.previousPrice;
      const msftchangePercentValue =  (msftchangeValue / msftData.previousPrice) * 100;
  
      setMSFTData({
        previousPrice: msftData.currentPrice,
        currentPrice: msftnewCurrentPrice,
        change: msftchangeValue,
        changePercent: msftchangePercentValue,
      });

      //Update MSFT Data
      const amznnewCurrentPrice = getRandomValue(173, 177);
      const amznchangeValue = amznnewCurrentPrice - amznData.previousPrice;
      const amznchangePercentValue =  (amznchangeValue / amznData.previousPrice) * 100;
  
      setAMZNData({
        previousPrice: amznData.currentPrice,
        currentPrice: amznnewCurrentPrice,
        change: amznchangeValue,
        changePercent: amznchangePercentValue,
      });

      //Update GOOGL Data
      const googlnewCurrentPrice = getRandomValue(146, 149);
      const googlchangeValue = googlnewCurrentPrice - googlData.previousPrice;
      const googlchangePercentValue =  (googlchangeValue / googlData.previousPrice) * 100;
  
      setGOOGLData({
        previousPrice: googlData.currentPrice,
        currentPrice: googlnewCurrentPrice,
        change: googlchangeValue,
        changePercent: googlchangePercentValue,
      });

      //Update META Data
      const metanewCurrentPrice = getRandomValue(496, 498);
      const metachangeValue = metanewCurrentPrice - metaData.previousPrice;
      const metachangePercentValue =  (metachangeValue / metaData.previousPrice) * 100;
  
      setMETAData({
        previousPrice: metaData.currentPrice,
        currentPrice: metanewCurrentPrice,
        change: metachangeValue,
        changePercent: metachangePercentValue,
      });

      //Update NVDA Data
      const nvdanewCurrentPrice = getRandomValue(882, 896);
      const nvdachangeValue = nvdanewCurrentPrice - nvdaData.previousPrice;
      const nvdachangePercentValue =  (nvdachangeValue / nvdaData.previousPrice) * 100;
  
      setNVDAData({
        previousPrice: nvdaData.currentPrice,
        currentPrice: nvdanewCurrentPrice,
        change: nvdachangeValue,
        changePercent: nvdachangePercentValue,
      });

      //Update NFLX Data
      const nflxnewCurrentPrice = getRandomValue(617, 622);
      const nflxchangeValue = nflxnewCurrentPrice - nflxData.previousPrice;
      const nflxchangePercentValue =  (nflxchangeValue / nflxData.previousPrice) * 100;
  
      setNFLXData({
        previousPrice: nflxData.currentPrice,
        currentPrice: nflxnewCurrentPrice,
        change: nflxchangeValue,
        changePercent: nflxchangePercentValue,
      });

      //Update PYPL Data
      const pyplnewCurrentPrice = getRandomValue(62, 65);
      const pyplchangeValue = pyplnewCurrentPrice - pyplData.previousPrice;
      const pyplchangePercentValue =  (pyplchangeValue / pyplData.previousPrice) * 100;
  
      setPYPLData({
        previousPrice: pyplData.currentPrice,
        currentPrice: pyplnewCurrentPrice,
        change: pyplchangeValue,
        changePercent: pyplchangePercentValue,
      });

      //Update MA Data
      const manewCurrentPrice = getRandomValue(476, 486);
      const machangeValue = manewCurrentPrice - maData.previousPrice;
      const machangePercentValue =  (machangeValue / maData.previousPrice) * 100;
  
      setMAData({
        previousPrice: maData.currentPrice,
        currentPrice: manewCurrentPrice,
        change: machangeValue,
        changePercent: machangePercentValue,
      });

    }, 2000);
  
    return () => clearInterval(interval); // Cleanup the interval
  }, []); // Empty dependency array means this effect runs once on component mount


  const listStocks = [
    {
      ticker: 'AAPL',
      name: 'Apple Inc.',
      icon: ox,
      recommendation: 'Buy',
      chartID: 'aaplpast30DaysChart',
      past30DaysData: useFetchHistoricalStockData('AAPL'),
      data: applData,
    },
    {
      ticker: 'TSLA',
      name: 'Tesla Inc',
      icon: ox,
      recommendation: 'Buy',
      chartID: 'tslapast30DaysChart',
      past30DaysData: useFetchHistoricalStockData('TSLA'),
      data: tslaData,
    },
    {
      ticker: 'MSFT',
      name: 'Microsoft Corporation',
      icon: eagle,
      recommendation: 'Strong Buy',
      chartID: 'msftpast30DaysChart',
      past30DaysData: useFetchHistoricalStockData('MSFT'),
      data: msftData,
    },
    {
      ticker: 'AMZN',
      name: 'Amazon.com Inc.',
      icon: ox,
      recommendation: 'Buy',
      chartID: 'amznpast30DaysChart',
      past30DaysData: useFetchHistoricalStockData('AMZN'),
      data: amznData,
    },
    {
      ticker: 'MA',
      name: 'Mastercard Incorporated',
      icon: bear,
      recommendation: '',
      chartID: 'mapast30DaysChart',
      past30DaysData: useFetchHistoricalStockData('MA'),
      data: maData,
    },
    {
      ticker: 'GOOGL',
      name: 'Alphabet Inc.',
      icon: ox,
      recommendation: 'Buy',
      chartID: 'googlpast30DaysChart',
      past30DaysData: useFetchHistoricalStockData('GOOGL'),
      data: googlData,
    },
    {
      ticker: 'META',
      name: 'Meta Platforms Inc.',
      icon: eagle,
      recommendation: '',
      chartID: 'metapast30DaysChart',
      past30DaysData: useFetchHistoricalStockData('META'),
      data: metaData,
    },
    {
      ticker: 'NVDA',
      name: 'NVIDIA Corporation',
      icon: ox,
      recommendation: '',
      chartID: 'nvdapast30DaysChart',
      past30DaysData: useFetchHistoricalStockData('NVDA'),
      data: nvdaData,
    },
    {
      ticker: 'NFLX',
      name: 'Netflix Inc.',
      icon: ox,
      recommendation: '',
      chartID: 'nflxpast30DaysChart',
      past30DaysData: useFetchHistoricalStockData('NFLX'),
      data: nflxData,
    },
    {
      ticker: 'PYPL',
      name: 'PayPal Holdings Inc.',
      icon: bear,
      recommendation: '',
      chartID: 'pyplpast30DaysChart',
      past30DaysData: useFetchHistoricalStockData('PYPL'),
      data: pyplData,
    },
  ];

  const [watchlist, setWatchlist] = useState([]);
  
  // Function to add a stock to the watchlist
  const addToWatchlist = (ticker) => {
    setWatchlist(prevWatchlist => [...prevWatchlist, ticker]);
  };

  // Function to remove a stock from the watchlist
  const removeFromWatchlist = (ticker) => {
    setWatchlist(prevWatchlist => prevWatchlist.filter(item => item !== ticker));
  };

  const LinkToStockPage = (ticker) => {
    return () => {
      window.location.href = `/stocks/${ticker}`;
    };
  };

  //The list of 10 stocks
  return (
    <div className="mt-10 mb-5">
      <div className="flex justify-between items-center mt-5 mb-4">
        <h2 class="px-4 text-2xl font-bold text-gray-700">Market Analysis</h2>
        <button onClick={ toggleViewMore } class="mt-5 text-primary dark:text-primary-400 text-sm underline"><strong>View {viewMore ? 'Less' : 'More'}</strong></button>
      </div>
      <div className="mt-4 overflow-x-auto">
      <table className="table-auto w-full mt-2">
        <thead>
          <tr>
            <th className="px-4 py-2 border-t border-b">Ticker</th>
            <th className="px-4 py-2 border-t border-b">Current Price</th>
            <th className="px-4 py-2 border-t border-b">Change</th>
            <th className="px-4 py-2 border-t border-b">Last 30 days</th>
            <th className="px-4 py-2 border-t border-b">Recommendations</th>
          </tr>
        </thead>
        <tbody>
            {listStocks.slice(0, viewMore ? listStocks.length : 5).
              map((stock, index) => (
              <tr key={index} className='text-center align-middle'>
                <td className="px-4 py-2 flex justify-center items-center">
                  <button aria-label="Add to wishlist">
                  {watchlist.includes(stock.ticker) ? (
                    <FaStar
                      onClick={() => removeFromWatchlist(stock.ticker)}
                      className='w-6 h-6 mr-2 text-yellow-500 transition-opacity duration-300 hover:opacity-80 fill-current'
                    />
                  ) : (
                    <FaRegStar
                      onClick={() => addToWatchlist(stock.ticker)}
                      className='w-6 h-6 mr-2 text-yellow-500 transition-opacity duration-300 hover:opacity-80 fill-current'
                    />
                  )}
                  </button>
                  <div className="flex flex-row w-full justify-between">
                    <div className="flex flex-col" onClick={LinkToStockPage(stock.ticker)}>
                      <span className="font-bold text-left">{stock.ticker}</span>
                      <span className="block text-gray-500 text-left">{stock.name}</span>
                    </div>
                    <div className="flex justify-center items-center">
                      <img src={stock.icon} alt="Buy" className="w-7 h-7 mr-12" />
                    </div>
                  </div>
                </td>
                <td className="px-4 py-2">${stock.data.currentPrice.toFixed(2)}</td>
                <td className="px-4 py-2">
                  <div className="flex justify-center items-center">
                    <span className={`font-bold ${stock.data.change > 0 ? 'text-green-600' : 'text-red-600'} text-lg`}>{stock.data.change.toFixed(2)}</span>
                    <span className={`ml-1 ${stock.data.changePercent > 0 ? 'text-green-600' : 'text-red-600'} text-base`}>{stock.data.change > 0 ? '+' : ''}{stock.data.changePercent.toFixed(2)}%</span>
                  </div>
                </td>
                <td className="px-4 py-2">
                  <div style={{ width: '200px', height: '70px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <DisplayChart past30DaysData={stock.past30DaysData} chartID={stock.chartID} />
                  </div>
                </td>
                <td className="px-4 py-2">
                  <div>
                    <span>{stock.recommendation}</span>
                  </div>
                </td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  </div>
  );
};

export default TickerList;