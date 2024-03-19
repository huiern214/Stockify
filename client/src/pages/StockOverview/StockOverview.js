import StockSummary from './Summary';
import NewsRow from './News';
import Discussion from './Discussion';
import RelatedStock from './RelatedStock';
import DisplayChart from './ChartGenerator';

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
    
    const summary={
    'volume':108.05,
    'marketCap':558.42,
    'dayMin':174.56,
    'dayMax':182.57,
    'yearMin':152.19,
    'yearMax':298.80,
    'priceEarningRatio':40.75
    }

    const labels = ["January", "February", "March", "April", "May", "June","July","August","September","October"];
    const data = {
    labels: labels,
    datasets: [
        {
        label: "TSLA", // Setting up the label for the dataset
        backgroundColor: "rgb(255, 99, 132)", // Setting up the background color for the dataset
        borderColor: "rgb(255, 99, 132)", // Setting up the border color for the dataset
        data: [0, 10, 5, 2, 20, 30, 45,34,67,89,10], // Setting up the data for the dataset
        pointStyle: 'none',
        pointRadius: 0
        },
    ],
    };
    const options = {
        maintainAspectRatio: false,
        scales:{
            x:{
                grid:{
                     display:true
                }
            },
            y:{
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

    return (
        <div>
            <h2 id="overview"className='text-2xl font-bold text-left mt-2 mb-2 text-black'>Overview</h2>
            <div className='flex flex-col md:flex-row w-full md:h-96 mt-2'>               
                <div id="summary" className='flex m-3 md:ml-0 md:w-1/3 h-full border rounded-lg'>
                    <StockSummary {...summary}/>
                </div>
                <div id="graph" className='flex m-3 md:ml-0 justify-end md:w-2/3 h-full border rounded-lg'>
                    <DisplayChart data={data} options={options} chartID='chart3'/>
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
