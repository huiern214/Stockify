import React from 'react'

const Learn = () => {

  const [viewMore, setViewMore] = React.useState(false);
  const [viewMore2, setViewMore2] = React.useState(false);

  function toggleViewMore() {
    setViewMore(!viewMore);
  }

  function toggleViewMore2() {
    setViewMore2(!viewMore2);
  }

  // dict for icons
  const icons = {
    "Art": (
      <path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
    ),
    "Travels": (
      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
    ),
    "Business": (
      <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
    )
  }

  const data = [
    {
      title: "Stock market boom",
      image: "https://mdbcdn.b-cdn.net/img/new/standard/city/018.jpg",
      category: "Business",
      sponsored: true,
      date: "10.01.2022",
      author: "Joe Svan",
      content: "Curabitur tristique, mi a mollis sagittis, metus felis mattis arcu, non vehicula nisl dui quis diam. Mauris ut risus eget massa volutpat feugiat. Donec.",
    },

    {
      title: "Exhibition in Paris",
      image: "https://mdbcdn.b-cdn.net/img/new/standard/city/032.jpg",
      category: "Art",
      sponsored: false,
      date: "12.01.2022",
      author: "Halley Frank",
      content: "Suspendisse in volutpat massa. Nulla facilisi. Sed aliquet diam orci, nec ornare metus semper sed. Integer volutpat ornare erat sit amet rutrum.",
    },

    {
      title: "Welcome to California",
      image: "https://mdbcdn.b-cdn.net/img/new/standard/city/059.jpg",
      category: "Travels",
      sponsored: false,
      date: "13.01.2022",
      author: "Anna Maria Doe",
      content: "Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat vulputate. Ut vulputate est non quam dignissim elementum. Donec a ullamcorper diam.",
    },

    {
      title: "Stock Strategies",
      image: "https://mdbcdn.b-cdn.net/img/new/standard/city/018.jpg",
      category: "Business",
      sponsored: true,
      date: "15.01.2022",
      author: "Karl Smith",
      content: "Curabitur tristique, mi a mollis sagittis, metus felis mattis arcu, non vehicula nisl dui quis diam. Mauris ut risus eget massa volutpat feugiat. Donec.",
    },

    {
      title: "Stock market boom",
      image: "https://mdbcdn.b-cdn.net/img/new/standard/city/018.jpg",
      category: "Business",
      sponsored: true,
      date: "10.01.2022",
      author: "Joe Svan",
      content: "Curabitur tristique, mi a mollis sagittis, metus felis mattis arcu, non vehicula nisl dui quis diam. Mauris ut risus eget massa volutpat feugiat. Donec.",
    },

    {
      title: "Stock Strategies",
      image: "https://mdbcdn.b-cdn.net/img/new/standard/city/018.jpg",
      category: "Business",
      sponsored: true,
      date: "15.01.2022",
      author: "Karl Smith",
      content: "Curabitur tristique, mi a mollis sagittis, metus felis mattis arcu, non vehicula nisl dui quis diam. Mauris ut risus eget massa volutpat feugiat. Donec.",
    },

    {
      title: "Stock market boom",
      image: "https://mdbcdn.b-cdn.net/img/new/standard/city/018.jpg",
      category: "Business",
      sponsored: true,
      date: "10.01.2022",
      author: "Joe Svan",
      content: "Curabitur tristique, mi a mollis sagittis, metus felis mattis arcu, non vehicula nisl dui quis diam. Mauris ut risus eget massa volutpat feugiat. Donec.",
    },

    {
      title: "Stock Strategies",
      image: "https://mdbcdn.b-cdn.net/img/new/standard/city/018.jpg",
      category: "Business",
      sponsored: true,
      date: "15.01.2022",
      author: "Karl Smith",
      content: "Curabitur tristique, mi a mollis sagittis, metus felis mattis arcu, non vehicula nisl dui quis diam. Mauris ut risus eget massa volutpat feugiat. Donec.",
    },
    // Add more objects for additional content items
  ];

  return (
    <div className="container mx-auto md:px-6">
      <div className="mx-[5%] md:mx-0">
        <p className="text-2xl font-semibold text-left mt-5 mb-10 text-black">
          Learn
        </p>

        <section className="mb-16">
          <div className='flex justify-between'>
            <h2 className="mb-5 text-xl font-bold">Latest Articles</h2>
            <button onClick={ toggleViewMore } className="mb-1 text-primary dark:text-primary-400 text-sm underline"><strong>View {viewMore ? 'Less' : 'More'}</strong></button>
          </div>

          <div className="grid gap-6 xl:gap-x-12 lg:grid-cols-3 lg:grid-flow-row md:gap-8">
            {data.slice(0, viewMore ? data.length : 5).map((item, index) => (
              <div className={index === 0 ? "row-span-2" : ""}>

                {/* only show this when smaller than lg */}
                {index === 0 ?
                  <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20" data-te-ripple-init data-te-ripple-color="light">
                    <img src={item.image} className="w-full" alt={item.title} />
                    <a href="#!">
                      <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
                    </a>
                  </div>
                  :
                  <div className="lg:hidden mb-6 w-full">
                    <div className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20" data-te-ripple-init data-te-ripple-color="light">
                      <img src={item.image} className="w-full" alt={item.title} />
                      <a href="#!">
                        <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
                      </a>
                    </div>
                  </div>
                }
                
                <div className="flex justify-between">
                  <div>
                    <h5 className="mb-3 text-lg font-bold">{item.title}</h5>
                    <div className="flex">
                      <div className="mb-3 flex items-center justify-center text-sm font-medium text-primary md:justify-start">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="mr-2 h-5 w-5">
                          {item.category in icons ? icons[item.category] : ""}
                        </svg>
                        {item.category}
                      </div>
                      {item.sponsored ? <div className="mx-2 mb-3 flex items-center justify-center text-sm font-medium text-yellow-600 md:justify-start">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="mr-2 h-5 w-5">  
                          <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        Sponsored
                      </div> : ""}
                    </div>
                  </div>

                  {/*  only show this when lg or xl */}
                  <div className="hidden lg:block mb-6 w-[35%]">
                  {index !== 0 ? <div className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20" data-te-ripple-init data-te-ripple-color="light">
                  <img src={item.image} className="w-full" alt={item.title} />
                  <a href="#!">
                    <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
                  </a>
                    </div> : ""}
                  </div>
                </div>
                <p className="text-neutral-500 dark:text-neutral-300">{item.content}</p>
                <p className="mb-6 mt-2 text-neutral-500 dark:text-neutral-300">
                  <small>Published <u>{item.date}</u> by <a href="#" className='text-primary'><strong>{item.author}</strong></a></small>
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Sponsored Content */}
        <section className="mb-32">
          <div className='flex justify-between'>
            <h2 className="mb-5 text-xl font-bold">Sponsored Content</h2>
            <button onClick={toggleViewMore2} className="mb-1 text-primary dark:text-primary-400 text-sm underline"><strong>View {viewMore2 ? 'Less' : 'More'}</strong></button>
          </div>
          
          <div className="grid gap-6 lg:grid-cols-3 xl:gap-x-12">
          {data.filter(item => item.sponsored).slice(0, viewMore2 ? data.length : 3).map((item, index) => (
            <div className="mb-6 lg:mb-0" key={index}>
              <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20" data-te-ripple-init data-te-ripple-color="light">
                <img src={item.image} className="w-full" alt={item.title} />
                <a href="#!">
                  <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
                </a>
              </div>
              <h5 className="mb-3 text-lg font-bold">{item.title}</h5>
              <div className="mb-3 flex text-sm font-medium text-yellow-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="mr-2 h-5 w-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                </svg>
                {item.category}
              </div>
              <p className="text-neutral-500 dark:text-neutral-300">
                {item.content}
              </p>
              <p className="mb-6 mt-2 text-neutral-500 dark:text-neutral-300">
                <small>Published <u>{item.date}</u> by <a href="#" className='text-primary'><strong>{item.author}</strong></a></small>
              </p>
            </div>
          ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Learn