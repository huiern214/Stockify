
function NavBar({setActiveComponent, setSession}){
    const handleNavigation=(page,sectionID)=>{
        setActiveComponent(page)
        if(sectionID){
            setSession(sectionID);
        }

    };

    return(
        <nav className='flex justify-start md:justify-end w-[80%]'>
            <ul className="flex w-full list-none ">
                <button onClick={() => handleNavigation("overview",'overview')} className='grow mr-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'>
                    Overview
                </button>
                <button  onClick={() => handleNavigation("analysis")} className='grow mr-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'>
                    Analysis
                </button>
                <button onClick={() => handleNavigation("company")} className='grow mr-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'>
                    Company
                </button>
                <button  onClick={() => handleNavigation("overview",'news')}className='grow mr-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'>
                    News
                </button>
                <button onClick={() => handleNavigation("overview",'discussion')} className='grow mr-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'>
                    Discussion
                </button>
            </ul>
        </nav>
    )
}

export default NavBar