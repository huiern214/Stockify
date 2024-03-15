import NewsImage from '../assets/newsImage.png'

function IndividualNews({image,title,site,date,url}){
    return(
        <a href={url} className="flex flex-col h-full w-96 mx-3">
            <img className="w-full h-1/3" src={image} alt={title}/>
            <div className="w-full h-1/3 font-bold text-xl">
                {title}
            </div>
            <div className="w-full h-1/3 mt-3">
                <div className='font-semibold'>{site}</div>
                <div className='font-normal text-sm text-gray-500'>{date}</div>
            </div>
        </a>
    )
}

function NewsRow(){
    const news={
        'image':NewsImage,
        'title':'Tesla German Gigafactory to Resume Production',
        'site':'TipRanks',
        'date':'3 minutes ago',
        'url':'https://www.schaeffersresearch.com/content/news/2023/10/19/chip-stock-soars-after-beat-and-raise'
    }

    return(
        <div className='flex flex-row justify-between mt-5 mr-10 mb-5'> 
            <IndividualNews{...news}/>
            <IndividualNews{...news}/>
            <IndividualNews{...news}/>
            <IndividualNews{...news}/>
        </div>
    )
}

export default NewsRow;