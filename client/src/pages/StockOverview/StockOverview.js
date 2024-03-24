import StockSummary from './Summary';
import NewsRow from './News';
import Discussion from './Discussion';
import RelatedStock from './RelatedStock';
import {DisplayAnalysisChart} from './Analysis/ChartGenerator';
import axios from 'axios';
import {useState,useEffect} from 'react'
import API_KEY from '../../api/apiConfig';
    
function StockOverview(){    
    const summary={
    'volume':103.97,
    'marketCap':550.4,
    'dayMin':166.11,
    'dayMax':169.74,
    'yearMin':152.19,
    'yearMax':298.80,
    'priceEarningRatio':40.16
    }

    const options = {
        animation:{
            duration:1000,
            delay:0,

        },
        maintainAspectRatio: false,
        scales:{
            x:{
                display:false,
                grid:{
                     display:true
                }
            },
            y:{
                display:true,
                grid:{
                     display:true
                }
            },
        },
        plugins: {
            title: {
                display: false // Hides the title
            },
            legend:{
                display:false,
            }
        }
    };
    
    const [interval,setInterval]=useState('1hour');
    const [period,setPeriod]=useState(30);
    const [stockSymbol,setStockSymbol]=useState('TSLA');

    const fetchStockData=async()=>{
        let toDate=new Date();
        let fromDate=new Date(toDate);
        fromDate.setDate(fromDate.getDate()-period)

        let fromDateStr = fromDate.toISOString().slice(0, 10);
        let toDateStr = toDate.toISOString().slice(0, 10);
        try{
            console.log("fromDateStr",fromDateStr)
            console.log("toDateStr",toDateStr)
            const response=await axios.get(`https://financialmodelingprep.com/api/v3/historical-chart/${interval}/${stockSymbol}?from=${fromDateStr}&to=${toDateStr}&apikey=${API_KEY}`);
            const symbol="TSLA";
            const data=response.data.reverse();
            const dates = data.map(entry => entry.date);
            const prices = data.map(entry => entry.close);
            return({ labels: dates, datasets: [{ label:symbol,backgroundColor: "rgb(255, 99, 132)", // Setting up the background color for the dataset
            borderColor: "rgb(255, 99, 132)", data: prices,pointStyle: 'none',pointRadius: 0}] })
      
        }catch(error){
          console.error('Error fetching stock data:',error);
          return null;
        }
      };

      const [dataFetched,setDataFetched]=useState(null);

      useEffect(() => {
        const fetchData = async () => {
            const hold = await fetchStockData();
            setDataFetched(hold);
        };
        fetchData();
        return () => {
          setDataFetched(null); // Clear chart data
        };
      }, [period]);

    return (
        <div>
            <h2 id="overview"className='text-2xl font-bold text-left mt-2 mb-2 text-black'>Overview</h2>
            <div className='flex flex-col md:flex-row w-full md:h-96 mt-2'>               
                <div id="summary" className='flex m-3 md:ml-0 md:w-1/3 h-full border rounded-lg'>
                    <StockSummary {...summary}/>
                </div>
                <div id="graph" className='flex m-3 md:ml-0 justify-end md:w-2/3 h-full border rounded-lg'>
                    {dataFetched&&<DisplayAnalysisChart data={dataFetched} options={options} chartID='chart3' period={period} setPeriod={setPeriod}/>}
                </div>
            </div>

            <div id="news" className="flex flex-col w-full mt-10">
                <NewsRow/>
            </div>

            <div className="flex flex-col lg:flex-row w-full mb-5">
                <div id="discussion" className='lg:w-3/5'>
                    <Discussion/>
                </div>
                <div id="relatedStock" className='h-fit my-5 lg:mt-[6%] lg:mx-5 border rounded-lg'>
                    <RelatedStock/>
                </div>
            </div> 
        </div>
    );
}

export default StockOverview
