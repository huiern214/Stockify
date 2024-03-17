import { Line } from "react-chartjs-2"; // Importing the Line component from the react-chartjs-2 library
import axios from 'axios';
import { useEffect,useState } from "react";

const fetchStockData=async()=>{
  try{
    const response=await axios.get('https://financialmodelingprep.com/api/v3/historical-price-full/AAPL?apikey=vlosml6TntFhwyJjPgOGcZ90pqLbsIvb');
    const symbol=response.data.symbol;
    const data=response.data.historical;
    const dates = data.map(entry => entry.date);
    const prices = data.map(entry => entry.close);
    return { labels: dates, datasets: [{ label:symbol, data: prices }] };

  }catch(error){
    console.error('Error fetching stock data:',error);
    return null;
  }
};

const options = {
  scales: {
      x: {
          type: 'time', // Use 'time' scale type for dates
          time: {
              parser: 'YYYY-MM-DD',
              tooltipFormat: 'll',
          },
          display: true,
          title: {
              display: true,
              text: 'Date',
          },
      },
      y: {
          type: 'linear', // Use 'linear' scale type for numerical values
          display: true,
          title: {
              display: true,
              text: 'Value',
          },
      },
  },
};


const LineChart = () => {
  const [chartData,setChartData]=useState(null);
  useEffect(() => {
  const fetchData = async () => {
      const data = await fetchStockData();
      setChartData(data);
  };
  fetchData();
  return () => {
    setChartData(null); // Clear chart data
  };
}, []);
return (
    <div>
      {chartData&&<Line data={chartData} options={options}/>}
    </div>
   );
};

export default LineChart;

