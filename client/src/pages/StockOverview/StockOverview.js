import StockIcon from './StockIcon'
import NavBar from './NavBar';
import StockSummary from './Summary';
import NewsRow from './News'
import Discussion from './Discussion';
import RelatedStock from './RelatedStock';
import LineChart from './StockPriceGraph';

function StockOverview({price,name,symbol,imageUrl,changes,isIncreasing}){
    const isIncreasingBool = !!isIncreasing;
    const stock={
        'name':name,
        'symbol':symbol,
        'price':price,
        'imageUrl':imageUrl,
        'changes':changes,
        'isIncreasing':isIncreasingBool
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

    return(
        <div className='flex flex-col relative'>
            <div id="StockIcon" className='flex flex-row w-full h-60 relative'>
                <StockIcon {...stock} />
            </div>
            <div id="navigationBar" className='flex justify-end w-full '>
                <NavBar/>
            </div>
            <div id="overview" className='flex flex-row w-full h-96 mt-5'>
                <div id="summary" className='flex w-3/12 h-full ml-5 mr-10 border rounded-lg'>
                    <StockSummary {...summary}/>
                </div>
                <div id="graph" className='flex justify-end w-8/12 h-full border rounded-lg'>
                    <LineChart/>
                </div>
            </div>

            <div id="news" className="flex flex-col w-full mt-5">
                <div className="flex h-fit ml-10">News</div>
                <NewsRow/>
                <NewsRow/>
                <button className='flex justify-center text-gray-500' >View more</button>
            </div>

            <div className="flex w-full">
                <div id="discussion" className='flex flex-col w-3/5 mt-5'>
                    <Discussion/>
                    <button className='flex justify-center text-gray-500' >View more</button>
                </div>
                <div id="relatedStock" className='flex flex-col w-2/5 mt-5 '>
                    <RelatedStock/>
                    <button className='flex justify-center text-gray-500' >View more</button>
                </div>
            </div>
        </div>
    );
}

export default StockOverview
