import React from 'react';
import { useState } from 'react';
import NewsImage from '../../assets/newsImage.png';

function IndividualNews({image,title,site,date,url}){
    return(
        <a href={url} className="flex flex-col h-full">
            <img className="w-full" src={image} alt={title}/>
            <div className="w-full font-bold text-xl my-2">
                {title}
            </div>
            <div className="w-full mt-3">
                <div className='font-semibold'>{site}</div>
                <div className='font-normal text-sm text-gray-500'>{date}</div>
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
            'url': 'https://www.schaeffersresearch.com/content/news/2023/10/19/chip-stock-soars-after-beat-and-raise'
        },
        {
            'image': NewsImage,
            'title': 'Tesla German Gigafactory to Resume Production',
            'site': 'TipRanks',
            'date': '3 minutes ago',
            'url': 'https://www.schaeffersresearch.com/content/news/2023/10/19/chip-stock-soars-after-beat-and-raise'
        },
        {
            'image': NewsImage,
            'title': 'Tesla German Gigafactory to Resume Production',
            'site': 'TipRanks',
            'date': '3 minutes ago',
            'url': 'https://www.schaeffersresearch.com/content/news/2023/10/19/chip-stock-soars-after-beat-and-raise'
        },
        {
            'image': NewsImage,
            'title': 'Tesla German Gigafactory to Resume Production',
            'site': 'TipRanks',
            'date': '3 minutes ago',
            'url': 'https://www.schaeffersresearch.com/content/news/2023/10/19/chip-stock-soars-after-beat-and-raise'
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
                    />
                ))}
            </div>
        </div>
    );
}

export default NewsRow;
