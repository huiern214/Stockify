
function NavBar({setActiveComponent, scrollToSection}){
    const handleNavigation=(page,sectionID)=>{
        setActiveComponent(page);
        if(sectionID){
            scrollToSection(sectionID);
        }
    };

    return(
        <nav className='flex justify-end w-[80%]'>
            <ul className="flex w-full list-none ">
                <button href='#overview' onClick={() => handleNavigation("overview",'overview')} className='grow mx-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'>
                    Overview
                </button>
                <button href='#analysis' onClick={() => handleNavigation("analysis")} className='grow mx-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'>
                    Analysis
                </button>
                <button href='#company' onClick={() => handleNavigation("company")} className='grow mx-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'>
                    Company
                </button>
                <button href='#news' onClick={() => handleNavigation("overview",'news')}className='grow mx-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'>
                    News
                </button>
                <button href='#discussion'onClick={() => handleNavigation("overview",'discussion')} className='grow mx-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'>
                    Discussion
                </button>
            </ul>
        </nav>
    )
}

export default NavBar