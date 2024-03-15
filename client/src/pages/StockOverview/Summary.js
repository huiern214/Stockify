import {ReactComponent as InfoIcon} from '../assets/circle-info.svg'

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
            <div className="flex w-full h-fit pl-5 pt-2">
                Summary
            </div>
            <div className="flex h-full w-full">
                <TableSummary {...summary} />
            </div>

        </div>
    )
}

function TableSummary({volume,marketCap,dayMin,dayMax,yearMin,yearMax,priceEarningRatio}){
    return (
        <table className=" w-full mr-5">
            <tr>
                <td className="text-left pl-2 text-gray-400 align-middle">
                    <span className='inline-block '>Volume</span>
                    <InfoIcon className='w-4 h-4 ml-2 fill-gray-400 inline-block ' />
                </td>
                <td className="text-right pr-2">{volume}</td>
            </tr>
            <tr>
                <td className="text-left pl-2 text-gray-400 align-middle">
                    <span className='inline-block '>Market Cap</span>
                    <InfoIcon className='w-4 h-4 ml-2 fill-gray-400 inline-block ' />
                </td>
                <td className="text-right pr-2">{marketCap}</td>
            </tr>
            <tr>
                <td className="text-left pl-2 text-gray-400 align-middle">
                    <span className='inline-block '>Day's Range</span>
                    <InfoIcon className='w-4 h-4 ml-2 fill-gray-400 inline-block ' />
                </td>
                <td className="text-right pr-2">{dayMin+'-'+dayMax}</td>
            </tr>
            <tr>
                <td className="text-left pl-2 text-gray-400 align-middle">
                    <span className='inline-block '>52W Range</span>
                    <InfoIcon className='w-4 h-4 ml-2 fill-gray-400 inline-block ' />
                </td>
                <td className="text-right pr-2">{yearMin+'-'+yearMax}</td>
            </tr>
            <tr>
                <td className="text-left pl-2 text-gray-400 align-middle">
                    <span className='inline-block '>Price-Earning Ratio</span>
                    <InfoIcon className='w-4 h-4 ml-2 fill-gray-400 inline-block ' />
                </td>
                <td className="text-right pr-2">{priceEarningRatio}</td>
            </tr>
        </table>
    )
}


export default StockSummary