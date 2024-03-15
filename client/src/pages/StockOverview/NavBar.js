
function NavBar(){
    return(
        <nav className='flex justify-end w-3/4'>
            <ul className="flex w-full list-none">
                <a href='#overview' className='grow mx-2'>Overview</a>
                <a href='/' className='grow mx-2'>Analysis</a>
                <a href='/' className='grow mx-2'>Company</a>
                <a href='#news'className='grow mx-2'>News</a>
                <a href='#discussion'className='grow mx-2'>Discussion</a>
            </ul>
        </nav>
    )
}

export default NavBar