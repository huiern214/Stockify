import AppleIcon from '../../assets/appleIcon.png'
import SummaryGraph from '../../assets/smallGraph.png'
import AmazonIcon from '../../assets/amazonIcon.png'
import MetaIcon from '../../assets/metaIcon.png'

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
            "image":AmazonIcon,
            "symbol":"AMZN",
            "name":"Apple",
            "change":0.18,
            "graph":SummaryGraph
        },
        {
            "image":MetaIcon,
            "symbol":"Meta",
            "name":"Meta Platform Inc",
            "change":0.53,
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
            <div className='flex w-full'>
                <img className='w-14 h-14 rounded-lg' src={image} alt={name+"'s icon"}></img>
                <div className='flex flex-col ml-5 w-[30%]'>
                    <div className="font-bold">{symbol}</div>
                    <div className='text-gray-500 text-sm' >{name}</div>
                </div>
                <div className='mx-2 md:mx-5 text-2xl text-green-500'>
                    {change+"%"}
                </div>
                <img className="mx-2 md:mx-5" src={graph} alt="Summary graph"></img>
            </div>
        </a>
    )
}

export default RelatedStock;