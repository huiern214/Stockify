import AppleIcon from '../../assets/appleIcon.png'
import SummaryGraph from '../../assets/smallGraph.png'

function RelatedStock(){
    const relatedStocks = [
        {
        "image":AppleIcon,
        "symbol":"APPL",
        "name":"Apple",
        "change":0.78,
        "graph":SummaryGraph
        },
        {
            "image":AppleIcon,
            "symbol":"APPL",
            "name":"Apple",
            "change":0.78,
            "graph":SummaryGraph
        },
        {
            "image":AppleIcon,
            "symbol":"APPL",
            "name":"Apple",
            "change":0.78,
            "graph":SummaryGraph
        }
    ]


    return(
        <div className="w-full h-fit">
            <h2 className="mb-1 mt-5 text-xl pl-5 font-bold text-gray-700">Related stocks you may like</h2>
            <div className="flex flex-col w-full my-5 px-3">
                {relatedStocks.map((stock, index) => (
                    <IndividualRelatedStock key={index} {...stock} />
                ))}
            </div>
        </div>
    )
}

function IndividualRelatedStock({image,symbol,name,change,graph}){
    return(
        <a href="/"className='flex flex-col my-3 mx-2 md:mx-5'>
            <div className='flex w-full justify-between'>
                <img className='object-fill' src={image} alt={name+"'s icon"}></img>
                <div className='flex flex-col ml-5'>
                    <div className="font-bold">{symbol}</div>
                    <div className='text-gray-500 text-sm' >{name}</div>
                </div>
                <div className='mx-2 md:mx-5 text-2xl text-green-500'>
                    {change+"%"}
                </div>
                <img className="object-fill mx-2 md:mx-5" src={graph} alt="Summary graph"></img>
            </div>
        </a>
    )
}

export default RelatedStock;