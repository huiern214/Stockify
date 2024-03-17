import StockIcon from './StockIcon'
import NavBar from './NavBar';
import StockSummary from './Summary';
import NewsRow from './News'
import Discussion from './Discussion';
import RelatedStock from './RelatedStock';
import LineChart from './StockPriceGraph';
import teslaicon from '../../assets/teslaIcon.png'

// function StockOverview({price,name,symbol,imageUrl,changes,isIncreasing}){
    // const isIncreasingBool = !!isIncreasing;
    // const stock={
    //     'name':name,
    //     'symbol':symbol,
    //     'price':price,
    //     'imageUrl':imageUrl,
    //     'changes':changes,
    //     'isIncreasing':isIncreasingBool
//   }
    
function StockOverview(){

    const stock={
        'name':'Tesla Inc',
        'symbol':'TSLA',
        'price':178.9,
        'imageUrl':teslaicon,
        'changes':3.07,
        'isIncreasing':true
      }
    
    const response={
    "symbol":'TSLA',
    "historical":[
        {"date":"2024-01-01","price":10},
        {"date":"2024-01-02","price":9},
        {"date":"2024-01-03","price":12},
        {"date":"2024-01-04","price":25},
        {"date":"2024-01-05","price":12},
        {"date":"2024-01-06","price":1},
        {"date":"2024-01-07","price":4},
        {"date":"2024-01-08","price":3},
        {"date":"2024-01-09","price":15},
        {"date":"2024-01-10","price":19},
    ]
    }

    const summary={
    'volume':108.05,
    'marketCap':558.42,
    'dayMin':174.56,
    'dayMax':182.57,
    'yearMin':152.19,
    'yearMax':298.80,
    'priceEarningRatio':40.75
    }

    return (
    <div class="container mx-auto md:px-6">
        <div class="mx-[5%] md:mx-0">
            <p id="overview" className="text-2xl font-semibold text-left mt-5 mb-5 text-black">
            Overview
            </p>
            <div id="StockIcon" className='flex flex-row w-full h-60 relative'>
                <StockIcon {...stock} />
            </div>
            <div id="navigationBar" className='flex mx-[2%] md:justify-end w-full '>
                <NavBar/>
            </div>
            <div className='flex flex-col md:flex-row w-full md:h-96 mt-5'>
                <div id="summary" className='flex m-3 md:ml-0 md:w-1/3 h-full border rounded-lg'>
                    <StockSummary {...summary}/>
                </div>
                <div id="graph" className='flex m-3 md:ml-0 justify-end md:w-2/3 h-full border rounded-lg'>
                    <LineChart/>
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
    </div>
    );
}

export default StockOverview
