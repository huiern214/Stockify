import AppleIcon from '../assets/appleIcon.png'
import SummaryGraph from '../assets/smallGraph.png'

function RelatedStock(){
    const relatedStock={
        "image":AppleIcon,
        "symbol":"APPL",
        "name":"Apple",
        "change":0.78,
        "graph":SummaryGraph
    }
    return(
        <div className="flex flex-col w-full">
            <div className="flex w-full h-fit mt-7">
                People also watch
            </div>
            <div className="flex flex-col w-full mt-5 ml-10">
                <IndividualRelatedStock{...relatedStock}/>
                <IndividualRelatedStock{...relatedStock}/>
                <IndividualRelatedStock{...relatedStock}/>
                <IndividualRelatedStock{...relatedStock}/>
                <IndividualRelatedStock{...relatedStock}/>
                <IndividualRelatedStock{...relatedStock}/>
            </div>
        </div>
    )
}

function IndividualRelatedStock({image,symbol,name,change,graph}){
    return(
        <a href="/"className='flex flex-col w-3/4 my-3'>
            <div className='flex w-full'>
                <img src={image} alt={name+"'s icon"}></img>
                <div className='flex flex-col ml-5'>
                    <div className="font-bold">{symbol}</div>
                    <div className='text-gray-500 text-sm' >{name}</div>
                </div>
                <div className='ml-20 text-2xl text-green-500'>
                    {change+"%"}
                </div>
                <img className="ml-20" src={graph} alt="Summary graph"></img>
            </div>
            <hr className="border-b mt-3" />
        </a>
    )
}

export default RelatedStock;