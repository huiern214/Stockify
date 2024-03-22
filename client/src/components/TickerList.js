import React, { useState, useEffect } from 'react';
import star from '../assets/star.svg';
import DisplayChart from './DisplayChart';
import useFetchHistoricalStockData from './fetchStockHistoricalData';
import useStockData from './TickerData';
import ox from '../assets/ox.png';
import bear from '../assets/bear.png';
import eagle from '../assets/eagle.png';
import polarbear from '../assets/polarbear.png';

const TickerList = () => {

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

  //The list of 10 stocks
  return (
    <div className="mt-4">
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
          
          {/* AAPL */}
          <tr className='text-center'>
            <td className="px-4 py-2 flex justify-center items-center">
              <button aria-label="Add to wishlist">
                <img src={star} alt='Add to wishlist' className='w-6 h-6 mr-2 text-yellow-500 transition-opacity duration-300 hover:opacity-80 fill-current'/>
              </button>
              <div className="flex flex-col">
                <span className="font-bold text-left">AAPL</span>
                <span className="block text-gray-500 text-left">Apple Inc.</span>
              </div>
              <img src={ox} alt="Buy" className="w-7 h-7 ml-10" />
            </td>
            <td className="px-4 py-2">${applData.currentPrice.toFixed(2)}</td>
            <td className="px-4 py-2">
              <div className="flex justify-center items-center">
                <span className={`font-bold ${applData.change > 0 ? 'text-green-600' : 'text-red-600'} text-lg`}>{applData.change.toFixed(2)}</span>
                <span className={`ml-1 ${applData.changePercent > 0 ? 'text-green-600' : 'text-red-600'} text-base`}>{applData.change > 0 ? '+' : ''}{applData.changePercent.toFixed(2)}%</span>
              </div>
            </td>
            <td className="px-4 py-2">
              <div style={{ width: '200px', height: '70px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <DisplayChart past30DaysData={useFetchHistoricalStockData('AAPL')} chartID="aaplpast30DaysChart"/>
              </div>
            </td>
            <td className="px-4 py-2">
              <div>Buy</div>
            </td>
          </tr>

          {/* TSLA */}
          <tr className='text-center'>
            <td className="px-4 py-2 flex justify-center items-center">
              <button aria-label="Add to wishlist">
                <img src={star} alt='Add to wishlist' className='w-6 h-6 mr-2 text-yellow-500 transition-opacity duration-300 hover:opacity-80 fill-current'/>
              </button>
              <div className="flex flex-col">
                <span className="font-bold text-left">TSLA</span>
                <span className="block text-gray-500 text-left">Tesla Inc</span>
              </div>
              <img src={ox} alt="Ox" className="w-7 h-7 ml-10" />
            </td>
            <td className="px-4 py-2">${tslaData.currentPrice.toFixed(2)}</td>
            <td className="px-4 py-2">
              <div className="flex justify-center items-center">
                <span className={`font-bold ${tslaData.change > 0 ? 'text-green-600' : 'text-red-600'} text-lg`}>{tslaData.change.toFixed(2)}</span>
                <span className={`ml-1 ${tslaData.changePercent > 0 ? 'text-green-600' : 'text-red-600'} text-base`}>{tslaData.change > 0 ? '+' : ''}{tslaData.changePercent.toFixed(2)}%</span>
              </div>
            </td>
            <td className="px-4 py-2">
              <div style={{ width: '200px', height: '70px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <DisplayChart past30DaysData={useFetchHistoricalStockData('TSLA')} chartID="tslapast30DaysChart"/>
              </div>
            </td>
            <td className="px-4 py-2">  
              <div>
                <span>Buy</span>
              </div>
            </td>
          </tr>

          {/* MSFT */}
          <tr className='text-center'>
            <td className="px-4 py-2 flex justify-center items-center">
              <button aria-label="Add to wishlist">
                <img src={star} alt='Add to wishlist' className='w-6 h-6 mr-2 text-yellow-500 transition-opacity duration-300 hover:opacity-80 fill-current'/>
              </button>
              <div className="flex flex-col">
                <span className="font-bold text-left">MSFT</span>
                <span className="block text-gray-500 text-left">Microsoft Corporation</span>
              </div>
              <img src={eagle} alt="Eagle" className="w-7 h-7 ml-10" />
            </td>
            <td className="px-4 py-2">${msftData.currentPrice.toFixed(2)}</td>
            <td className="px-4 py-2">
              <div className="flex justify-center items-center">
                <span className={`font-bold ${msftData.change > 0 ? 'text-green-600' : 'text-red-600'} text-lg`}>{msftData.change.toFixed(2)}</span>
                <span className={`ml-1 ${msftData.changePercent > 0 ? 'text-green-600' : 'text-red-600'} text-base`}>{msftData.change > 0 ? '+' : ''}{msftData.changePercent.toFixed(2)}%</span>
              </div>
            </td>
            <td className="px-4 py-2">
              <div style={{ width: '200px', height: '70px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <DisplayChart past30DaysData={useFetchHistoricalStockData('MSFT')} chartID="msftpast30DaysChart"/>
              </div>
            </td>
            <td className="px-4 py-2">  
              <div>
                <span>Strong Buy</span>
              </div>
            </td>
          </tr>

          {/* AMZN */}
          <tr className='text-center'>
            <td className="px-4 py-2 flex justify-center items-center">
              <button aria-label="Add to wishlist">
                <img src={star} alt='Add to wishlist' className='w-6 h-6 mr-2 text-yellow-500 transition-opacity duration-300 hover:opacity-80 fill-current'/>
              </button>
              <div className="flex flex-col">
                <span className="font-bold text-left">AMZN</span>
                <span className="block text-gray-500 text-left">Amazon.com Inc.</span>
              </div>
              <img src={ox} alt="Ox" className="w-7 h-7 ml-10" />
            </td>
            <td className="px-4 py-2">${amznData.currentPrice.toFixed(2)}</td>
            <td className="px-4 py-2">
              <div className="flex justify-center items-center">
                <span className={`font-bold ${amznData.change > 0 ? 'text-green-600' : 'text-red-600'} text-lg`}>{amznData.change.toFixed(2)}</span>
                <span className={`ml-1 ${amznData.changePercent > 0 ? 'text-green-600' : 'text-red-600'} text-base`}>{amznData.change > 0 ? '+' : ''}{amznData.changePercent.toFixed(2)}%</span>
              </div>
            </td>
            <td className="px-4 py-2">
              <div style={{ width: '200px', height: '70px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <DisplayChart past30DaysData={useFetchHistoricalStockData('AMZN')} chartID="amznpast30DaysChart"/>
              </div>
            </td>
            <td className="px-4 py-2">  
              <div>
                <span>Buy</span>
              </div>
            </td>
          </tr>
          
          {/*MA*/}
          <tr className='text-center'>
            <td className="px-4 py-2 flex justify-center items-center">
              <button aria-label="Add to wishlist">
                <img src={star} alt='Add to wishlist' className='w-6 h-6 mr-2 text-yellow-500 transition-opacity duration-300 hover:opacity-80 fill-current'/>
              </button>
              <div className="flex flex-col">
                <span className="font-bold text-left">MA</span>
                <span className="block text-gray-500 text-left">Mastercard Incorporated</span>
              </div>
              <img src={bear} alt="Bear" className="w-7 h-7 ml-10" />
            </td>
            <td className="px-4 py-2">${maData.currentPrice.toFixed(2)}</td>
            <td className="px-4 py-2">
              <div className="flex justify-center items-center">
                <span className={`font-bold ${maData.change > 0 ? 'text-green-600' : 'text-red-600'} text-lg`}>{maData.change.toFixed(2)}</span>
                <span className={`ml-1 ${maData.changePercent > 0 ? 'text-green-600' : 'text-red-600'} text-base`}>{maData.change > 0 ? '+' : ''}{maData.changePercent.toFixed(2)}%</span>
              </div>
            </td>
            <td className="px-4 py-2">
              <div style={{ width: '200px', height: '70px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <DisplayChart past30DaysData={useFetchHistoricalStockData('MA')} chartID="mapast30DaysChart"/>
              </div>
            </td>
            <td className="px-4 py-2">  
              <div>
                <span></span>
              </div>
            </td>
          </tr>

          {/* GOOGL */}
          <tr className='text-center'>
            <td className="px-4 py-2 flex justify-center items-center">
              <button aria-label="Add to wishlist">
                <img src={star} alt='Add to wishlist' className='w-6 h-6 mr-2 text-yellow-500 transition-opacity duration-300 hover:opacity-80 fill-current'/>
              </button>
              <div className="flex flex-col">
                <span className="font-bold text-left">GOOGL</span>
                <span className="block text-gray-500 text-left">Alphabet Inc.</span>
              </div>
              <img src={ox} alt="Ox" className="w-7 h-7 ml-10" />
            </td>
            <td className="px-4 py-2">${googlData.currentPrice.toFixed(2)}</td>
            <td className="px-4 py-2">
              <div className="flex justify-center items-center">
                <span className={`font-bold ${googlData.change > 0 ? 'text-green-600' : 'text-red-600'} text-lg`}>{googlData.change.toFixed(2)}</span>
                <span className={`ml-1 ${googlData.changePercent > 0 ? 'text-green-600' : 'text-red-600'} text-base`}>{googlData.change > 0 ? '+' : ''}{googlData.changePercent.toFixed(2)}%</span>
              </div>
            </td>
            <td className="px-4 py-2">
              <div style={{ width: '200px', height: '70px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <DisplayChart past30DaysData={useFetchHistoricalStockData('GOOGL')} chartID="googlpast30DaysChart"/>
              </div>
            </td>
            <td className="px-4 py-2">  
              <div>
                <span>Buy</span>
              </div>
            </td>
          </tr>

          {/* META*/}
          <tr className='text-center'>
            <td className="px-4 py-2 flex justify-center items-center">
              <button aria-label="Add to wishlist">
                <img src={star} alt='Add to wishlist' className='w-6 h-6 mr-2 text-yellow-500 transition-opacity duration-300 hover:opacity-80 fill-current'/>
              </button>
              <div className="flex flex-col">
                <span className="font-bold text-left">META</span>
                <span className="block text-gray-500 text-left">Meta Platforms Inc.</span>
              </div>
              <img src={eagle} alt="Eagle" className="w-7 h-7 ml-10" />
            </td>
            <td className="px-4 py-2">${metaData.currentPrice.toFixed(2)}</td>
            <td className="px-4 py-2">
              <div className="flex justify-center items-center">
                <span className={`font-bold ${metaData.change > 0 ? 'text-green-600' : 'text-red-600'} text-lg`}>{metaData.change.toFixed(2)}</span>
                <span className={`ml-1 ${metaData.changePercent > 0 ? 'text-green-600' : 'text-red-600'} text-base`}>{metaData.change > 0 ? '+' : ''}{metaData.changePercent.toFixed(2)}%</span>
              </div>
            </td>
            <td className="px-4 py-2">
              <div style={{ width: '200px', height: '70px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <DisplayChart past30DaysData={useFetchHistoricalStockData('META')} chartID="metapast30DaysChart"/>
              </div>
            </td>
            <td className="px-4 py-2">  
              <div>
                <span>Strong Buy</span>
              </div>
            </td>
          </tr>

          {/* NVDA*/}
          <tr className='text-center'>
            <td className="px-4 py-2 flex justify-center items-center">
              <button aria-label="Add to wishlist">
                <img src={star} alt='Add to wishlist' className='w-6 h-6 mr-2 text-yellow-500 transition-opacity duration-300 hover:opacity-80 fill-current'/>
              </button>
              <div className="flex flex-col">
                <span className="font-bold text-left">NVDA</span>
                <span className="block text-gray-500 text-left">NVIDIA Corporation</span>
              </div>
              <img src={eagle} alt="Eagle" className="w-7 h-7 ml-10" />
            </td>
            <td className="px-4 py-2">${nvdaData.currentPrice.toFixed(2)}</td>
            <td className="px-4 py-2">
              <div className="flex justify-center items-center">
                <span className={`font-bold ${nvdaData.change > 0 ? 'text-green-600' : 'text-red-600'} text-lg`}>{nvdaData.change.toFixed(2)}</span>
                <span className={`ml-1 ${nvdaData.changePercent > 0 ? 'text-green-600' : 'text-red-600'} text-base`}>{nvdaData.change > 0 ? '+' : ''}{nvdaData.changePercent.toFixed(2)}%</span>
              </div>
            </td>
            <td className="px-4 py-2">
              <div style={{ width: '200px', height: '70px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <DisplayChart past30DaysData={useFetchHistoricalStockData('NVDA')} chartID="nvdapast30DaysChart"/>
              </div>
            </td>
            <td className="px-4 py-2">  
              <div>
                <span>Strong Buy</span>
              </div>
            </td>
          </tr>

          {/* NFLX*/}
          <tr className='text-center'>
            <td className="px-4 py-2 flex justify-center items-center">
              <button aria-label="Add to wishlist">
                <img src={star} alt='Add to wishlist' className='w-6 h-6 mr-2 text-yellow-500 transition-opacity duration-300 hover:opacity-80 fill-current'/>
              </button>
              <div className="flex flex-col">
                <span className="font-bold text-left">NFLX</span>
                <span className="block text-gray-500 text-left">Netflix Inc.</span>
              </div>
              <img src={bear} alt="Bear" className="w-7 h-7 ml-10" />
            </td>
            <td className="px-4 py-2">${nflxData.currentPrice.toFixed(2)}</td>
            <td className="px-4 py-2">
              <div className="flex justify-center items-center">
                <span className={`font-bold ${nflxData.change > 0 ? 'text-green-600' : 'text-red-600'} text-lg`}>{nflxData.change.toFixed(2)}</span>
                <span className={`ml-1 ${nflxData.changePercent > 0 ? 'text-green-600' : 'text-red-600'} text-base`}>{nflxData.change > 0 ? '+' : ''}{nflxData.changePercent.toFixed(2)}%</span>
              </div>
            </td>
            <td className="px-4 py-2">
              <div style={{ width: '200px', height: '70px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <DisplayChart past30DaysData={useFetchHistoricalStockData('NFLX')} chartID="nflxpast30DaysChart"/>
              </div>
            </td>
            <td className="px-4 py-2">  
              <div>
                <span>Buy</span>
              </div>
            </td>
          </tr>

          {/*PYPL*/}
          <tr className='text-center'>
            <td className="px-4 py-2 flex justify-center items-center">
              <button aria-label="Add to wishlist">
                <img src={star} alt='Add to wishlist' className='w-6 h-6 mr-2 text-yellow-500 transition-opacity duration-300 hover:opacity-80 fill-current'/>
              </button>
              <div className="flex flex-col">
                <span className="font-bold text-left">PYPL</span>
                <span className="block text-gray-500 text-left">PayPal Holdings Inc.</span>
              </div>
              <img src={bear} alt="Bear" className="w-7 h-7 ml-10" />
            </td>
            <td className="px-4 py-2">${pyplData.currentPrice.toFixed(2)}</td>
            <td className="px-4 py-2">
              <div className="flex justify-center items-center">
                <span className={`font-bold ${pyplData.change > 0 ? 'text-green-600' : 'text-red-600'} text-lg`}>{pyplData.change.toFixed(2)}</span>
                <span className={`ml-1 ${pyplData.changePercent > 0 ? 'text-green-600' : 'text-red-600'} text-base`}>{pyplData.change > 0 ? '+' : ''}{pyplData.changePercent.toFixed(2)}%</span>
              </div>
            </td>
            <td className="px-4 py-2">
              <div style={{ width: '200px', height: '70px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <DisplayChart past30DaysData={useFetchHistoricalStockData('PYPL')} chartID="pyplpast30DaysChart"/>
              </div>
            </td>
            <td className="px-4 py-2">  
              <div>
                <span></span>
              </div>
            </td>
          </tr>

          

        </tbody>
      </table>
    </div>
  );
};

export default TickerList;
