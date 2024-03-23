// fetchStockData.js
import { useState, useEffect } from 'react';

const useFetchHistoricalStockData = (tickerSymbols) => {
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = 'zzIsIQczVCtNjvqK3QSNXkzW0T4fg3XB';
        const today = new Date();
        const pastDate = new Date();
        pastDate.setDate(today.getDate() - 30); // Set the date 30 days ago
        const fromDate = pastDate.toISOString().split('T')[0]; // Format the date as YYYY-MM-DD
        const toDate = today.toISOString().split('T')[0]; // Format today's date as YYYY-MM-DD
    
        const response = await fetch(`https://financialmodelingprep.com/api/v3/historical-price-full/${tickerSymbols}?apikey=${apiKey}&from=${fromDate}&to=${toDate}`);
        const data = await response.json();
    
        // Check if data.historical is an array before setting stockData
        if (Array.isArray(data.historical)) {
          setStockData(data.historical);
          console.log('Stock data fetched successfully:', stockData);
        } else {
          console.error('API response does not contain historical data array:', data);
        }
      } catch (error) {
        console.error('Error fetching stock data:', error);
      }
    };

    // Fetch data only if stockData is empty
    if (stockData.length === 0) {
      fetchData();
    }
  }, [tickerSymbols, stockData]);

  return stockData;
};

export default useFetchHistoricalStockData;
