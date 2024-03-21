import {ReactComponent as SortUp} from '../../assets/sort-up.svg'
import {ReactComponent as SortDown} from '../../assets/sort-down.svg'


function StockIcon({name,imageUrl,symbol,price,changes,isIncreasing}){
    //className='fixed top-10 left-10 flex items-center'
    return(
        <div className='absolute flex items-center top-6 left-10 w-56 h-36'>
            <img className='h-full w-28' src={imageUrl} alt={name}/>
            <div className='flex flex-col ml-5'>
                <span className='font-normal text-xl' >{symbol}</span>
                <span className='font-normal text-sm text-gray-500'>{name}</span>
                <span className='font-semibold text-3xl mt-5'>{'$'+price}</span>
                <div className='flex items-center'>
                    {isIncreasing?<SortUp className='h-4 w-2  mt-2 mr-2 fill-green-500'/>:<SortDown className='h-4 mb-1 w-2 mr-2 fill-red-500'/>}

                    <span className={isIncreasing?'font-normal text-sm text-green-500':'font-normal text-sm text-red-500'}>{changes+'%'}</span>
                </div>

            </div>
        </div>
    );

}

export default StockIcon