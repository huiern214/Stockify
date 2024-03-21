import {ReactComponent as InfoIcon} from '../../assets/circle-info.svg'

function StockSummary({volume,marketCap,dayMin,dayMax,yearMin,yearMax,priceEarningRatio}){
    
    const summary={
        'volume':Number(volume),
        'marketCap':Number(marketCap),
        'dayMin':Number(dayMin),
        'dayMax':Number(dayMax),
        'yearMin':Number(yearMin),
        'yearMax':Number(yearMax),
        'priceEarningRatio':Number(priceEarningRatio)
      }
    return (
        <div className="flex flex-col w-full h-full">
            <h2 className="mb-1 mt-3 text-xl pl-5 font-bold text-gray-700">Summary</h2>
            <div className="flex h-full w-full">
                <TableSummary {...summary} />
            </div>

        </div>
    )
}

function TableSummary({volume,marketCap,dayMin,dayMax,yearMin,yearMax,priceEarningRatio}){
    return (
        <table className=" w-full mr-5 mb-5">
            <tr>
                <td className="text-left pl-5 text-gray-400 align-middle">
                    <span className='inline-block '>Volume</span>
                    <InfoIcon className='w-4 h-4 ml-2 fill-gray-400 inline-block' title={"Total number of shares traded"} />
                </td>
                <td className="text-right pr-2">{volume}</td>
            </tr>
            <tr>
                <td className="text-left pl-5 text-gray-400 align-middle">
                    <span className='inline-block '>Market Cap</span>
                    <InfoIcon className='w-4 h-4 ml-2 fill-gray-400 inline-block 'title={"A measure of a company's total value\n(Current Market Price per Share x Total Number of Outstading Shares)"} />
                </td>
                <td className="text-right pr-2">{marketCap}</td>
            </tr>
            <tr>
                <td className="text-left pl-5 text-gray-400 align-middle">
                    <span className='inline-block '>Day's Range</span>
                    <InfoIcon className='w-4 h-4 ml-2 fill-gray-400 inline-block ' title={"Showing the highest and lowest prices within a day"}/>
                </td>
                <td className="text-right pr-2">{dayMin+'-'+dayMax}</td>
            </tr>
            <tr>
                <td className="text-left pl-5 text-gray-400 align-middle">
                    <span className='inline-block '>52W Range</span>
                    <InfoIcon className='w-4 h-4 ml-2 fill-gray-400 inline-block 'title={"Showing the highest and lowest prices within a 52 Weeks"} />
                </td>
                <td className="text-right pr-2">{yearMin+'-'+yearMax}</td>
            </tr>
            <tr>
                <td className="text-left pl-5 text-gray-400 align-middle">
                    <span className='inline-block '>Price-Earning Ratio</span>
                    <InfoIcon className='w-4 h-4 ml-2 fill-gray-400 inline-block 'title={"Market Price per Share/Earnings per Share(EPS)"} />
                </td>
                <td className="text-right pr-2">{priceEarningRatio}</td>
            </tr>
        </table>
    )
}


export default StockSummary