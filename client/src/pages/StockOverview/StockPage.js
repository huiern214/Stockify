import teslaicon from '../../assets/teslaIcon.png'
import StockOverview from '../StockOverview/StockOverview'
import StockIcon from './StockIcon';
import NavBar from './NavBar';
import Analysis from './Analysis/Analysis';
import Company from './Company';
import {useState,useEffect} from 'react'
import star from '../../assets/star.svg';


function StockPage(){
    const [activeComponent, setActiveComponent] = useState('overview');
    const [session, setSession]=useState('overview')

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        // Scroll to the news section if navigating to the overview page and the active component is 'news'
        if (activeComponent === 'overview'&& session==='overview') {
            // scrollToSection("overview")
        }
        else if(activeComponent === 'overview'&& session==='news'){
            scrollToSection("news")
        }        
        else if(activeComponent === 'overview'&& session==='discussion'){
            scrollToSection("discussion")
        }
    }, [activeComponent,session]);


    const stock={
        'name':'Tesla Inc',
        'symbol':'TSLA',
        'price':169.13,
        'imageUrl':teslaicon,
        'changes':-3.07,
        'isIncreasing':false
      }

    return(
        <div class="container mx-auto md:px-6">
            <div class="mx-[5%] md:mx-0">
                <div className='flex flex-row w-full h-48 relative'>
                    <div id="StockIcon" className='flex flex-row w-[90%] h-full relative '>
                        <StockIcon {...stock} />
                    </div>
                    <button className='absolute  bottom-10 right-2' aria-label="Add to wishlist"> 
                      <img src={star} alt='Add to wishlist' className='w-10 h-10 mr-2 text-yellow-500 transition-opacity duration-300 hover:opacity-80 fill-current'/>
                    </button>
                    <div className='absolute bottom-10 right-16 '>
                        <input
                            type='text'
                            placeholder='Search ticker'
                            className='border border-gray-300 md:px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500'
                        />
                    </div>
                </div>
                <div id="navigationBar" className='flex justify-start w-full md:justify-end'>
                    <NavBar setActiveComponent={setActiveComponent} setSession={setSession}/>
                </div>
                <div>
                    {activeComponent === 'overview' && <StockOverview />}
                    {activeComponent === 'analysis' && <Analysis />}
                    {activeComponent === 'company' && <Company />}
                </div>
            </div>
        </div>
    )
}

export default StockPage;
