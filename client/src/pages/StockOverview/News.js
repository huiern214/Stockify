import React from 'react';
import { useState } from 'react';
import NewsImage from '../../assets/newsImage.png';
import NewsImage2 from '../../assets/NewsImage2.png';
import NewsImage3 from '../../assets/NewsImage3.png';
import NewsImage4 from '../../assets/NewsImage4.png';

function IndividualNews({image,title,site,date,url,stockWiseAnalysis}){
    return(
        <a href={url} className="flex flex-col h-full">
            <img className="w-full h-52 rounded-lg" src={image} alt={title}/>
            <div className="w-full h-[31%] font-bold text-xl my-2">
                {title}
            </div>
            <div className='flex flex-col '>
                <h3 className='text-base text-gray-700 font-semibold'>StockWise Analysis</h3>
                <p className="text-gray-500 text-sm">{stockWiseAnalysis}</p>
            </div>
            <div className="flex mt-3 ">
                <div className='font-semibold'>{site}</div>
                <div className='mx-3'>|</div>
                <div className='font-normal text-base text-gray-500'>{date}</div>
            </div>
        </a>
    )
}
function NewsRow() {
    const [viewMore, setViewMore] = useState(false);

    function toggleViewMore() {
        setViewMore(!viewMore);
    }


    const newsData = [
        {
            'image': NewsImage,
            'title': 'Tesla German Gigafactory to Resume Production',
            'site': 'TipRanks',
            'date': '3 minutes ago',
            'url': 'https://www.schaeffersresearch.com/content/news/2023/10/19/chip-stock-soars-after-beat-and-raise',
            'stockWiseAnalysis':"Resuming production allows Tesla to strengthen its presence in the region"
        },
        {
            'image': NewsImage2,
            'title': 'TSLA Stock:Another China Blow Sends Tesla Falling on Friday',
            'site': 'InvestorPlace',
            'date': '20 minutes ago',
            'url': 'https://investorplace.com/2024/03/tsla-stock-another-china-blow-sends-tesla-falling-on-friday/',
            'stockWiseAnalysis':"Negative news related to Tesla's performance prospects in China can contribute to a decline in its stock price"
        },
        {
            'image': NewsImage3,
            'title': 'Tesla Lowers EV Output in China',
            'site': 'TipRanks',
            'date': '30 minutes ago',
            'url': 'https://www.tipranks.com/news/tesla-nasdaqtsla-lowers-ev-output-in-china',
            'stockWiseAnalysis':"May lead to concerns about its growth trajectory and market demand,potentially impacting its stock trend negatively"
        },
        {
            'image': NewsImage4,
            'title': 'The Cream of the Crop: 3 EV Stocks With Glowing Ratings',
            'site': 'InvestorsPlace',
            'date': '48 minutes ago',
            'url': 'https://investorplace.com/2024/03/the-cream-of-the-crop-3-ev-stocks-with-glowing-ratings/',
            'stockWiseAnalysis':"The glowing ratings of other EV stocks could signal increased competition for Tesla"
        },
        // Add more news items here as needed
    ];

    return (
        <div className="mt-5 mb-10">
            <div className='flex justify-between'>
                <h2 className="mb-5 text-2xl font-bold text-gray-700">News</h2>
                <button onClick={ toggleViewMore } className="mb-1 text-primary dark:text-primary-400 text-sm underline"><strong>View {viewMore ? 'Less' : 'More'}</strong></button>
            </div>
            <div className='grid gap-6 lg:grid-cols-3'>
                {newsData.slice(0, viewMore ? newsData.length : 3).map((news, index) => (
                    <IndividualNews
                        key={index}
                        image={news.image}
                        title={news.title}
                        site={news.site}
                        date={news.date}
                        url={news.url}
                        stockWiseAnalysis={news.stockWiseAnalysis}
                    />
                ))}
            </div>
        </div>
    );
}

export default NewsRow;
