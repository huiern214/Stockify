import teslaicon from '../../assets/teslaIcon.png'
import StockOverview from '../StockOverview/StockOverview'
import StockIcon from './StockIcon';
import NavBar from './NavBar';
import Analysis from './Analysis';
import {useState} from 'react'


function StockPage(){
    const [activeComponent, setActiveComponent] = useState('overview');

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const stock={
        'name':'Tesla Inc',
        'symbol':'TSLA',
        'price':178.9,
        'imageUrl':teslaicon,
        'changes':3.07,
        'isIncreasing':true
      }

      const response={
        "symbol":'TSLA',
        "historical":[
          {"date":"2024-01-01","price":10},
          {"date":"2024-01-02","price":9},
          {"date":"2024-01-03","price":12},
          {"date":"2024-01-04","price":25},
          {"date":"2024-01-05","price":12},
          {"date":"2024-01-06","price":1},
          {"date":"2024-01-07","price":4},
          {"date":"2024-01-08","price":3},
          {"date":"2024-01-09","price":15},
          {"date":"2024-01-10","price":19},
        ]
      }
    return(
        <div class="container mx-auto md:px-6">
            <div class="mx-[5%] md:mx-0">
                <div id="StockIcon" className='flex flex-row w-full h-48 relative '>
                    <StockIcon {...stock} />
                </div>
                <div id="navigationBar" className='flex justify-end w-full  '>
                    <NavBar setActiveComponent={setActiveComponent} scrollToSection={scrollToSection}/>
                </div>
                <div>
                    {activeComponent === 'overview' && <StockOverview />}
                    {activeComponent === 'analysis' && <Analysis />}
                </div>
            </div>
        </div>
    )
}

export default StockPage;
