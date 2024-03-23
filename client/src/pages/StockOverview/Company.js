


function Company(){
    const description="Tesla, Inc. designs, develops, manufactures, leases, and sells electric vehicles, and energy\
        generation and storage systems in the United States, China, and internationally. It operates in two segments, \
        Automotive, and Energy Generation and Storage. The Automotive segment offers electric vehicles, as well as sells\
        automotive regulatory credits; and non-warranty after-sales vehicle, used vehicles, retail merchandise, and vehicle\
        insurance services. This segment also provides sedans and sport utility vehicles through direct and used vehicle\
        sales, a network of Tesla Superchargers, and in-app upgrades; purchase financing and leasing services; services\
        for electric vehicles through its company-owned service locations and Tesla mobile service technicians; and \
        vehicle limited warranties and extended service plans. The Energy Generation and Storage segment engages in \
        the design, manufacture, installation, sale, and leasing of solar energy generation and energy storage products,\
        and related services to residential, commercial, and industrial customers and utilities through its website,\
        stores, and galleries, as well as through a network of channel partners; and provision of service and repairs\
        to its energy product customers, including under warranty, as well as various financing options to its solar\
        customers. The company was formerly known as Tesla Motors, Inc. and changed its name to Tesla, Inc. in February 2017.\
        Tesla, Inc. was incorporated in 2003 and is headquartered in Austin, Texas."

    const companyInfo = {
        "CEO":"Mr. Elon R. Musk",
        "Sector":"Consumer Cyclical",
        "Industry": "Auto Manufacturers",
        "HQ": "Menlo Park,California,US",
        "Founded": "2004",
        "Employee": 140473,
        "IPO Date": "Jun 29,2010",
        "Official Website": "https://www.tesla.com"
    }

    return(
        <div className='mb-10'>
            <h2 className='text-2xl font-bold text-left mt-2 mb-2 text-black'>Company</h2>
            <div className='flex flex-col md:flex-row w-full mt-2'>  
                <div id="sideCompanyInfo"className='flex flex-col m-3 md:ml-0 md:w-1/3 border rounded-lg '>
                    <div>
                        <h2 className="mb-1 mt-3 text-xl pl-5 font-bold text-gray-700">Summary</h2>
                        <div className="flex flex-col w-full h-full">
                            {Object.keys(companyInfo).map((item, index) => (
                            <CompanySideDetail item={item} value={companyInfo[item]} key={index} />
                            ))}
                        </div>
                    </div>
                </div>
                <div id="aboutCompany" className='flex flex-col m-3 md:ml-0 pb-5 md:w-2/3 h-fit border rounded-lg'>  
                    <h2 className="mt-3 text-xl pl-5 font-bold text-gray-700">About</h2>
                    <div className="text-base px-5 text-justify">
                        {description}
                    </div>              
                </div>   
            </div>
            <h2 className='text-2xl font-bold text-left mt-7 mb-5 text-black'>Annual Income Statement</h2>
            <div className='flex flex-col md:flex-row w-full md:h-96 mt-2'>
                <FinancialStatmentIncome/>
            </div> 
        </div>
    );
}

const CompanySideDetail=({item,value})=>{
    return(
        <div className="flex w-full px-5 my-2">
            <div className="w-[40%] text-gray-500 text-left">
                {item}
            </div>
            <div className="w-[60%] text-right">
                {item==="Official Website"&&<a href={value}  rel="">{value}</a>}
                {item!=="Official Website"&&<div>{value}</div>}
            </div>
        </div>
    )
}

const FinancialStatmentIncome=()=>{
    const tableHeader=["Year","Total Revenue","Cost of Revenue","Gross Profit","Operating Expenses","Operating Income","Income Before Tax",
                        "Net Income","Basic EPS","EPS Diluted","Basic Average Shares","Diluted Average Shares","EBITDA"]

    const incomeDetail=[
        {
            "year":2023,
            "totalRevenue":"96.77B",
            "costOfRevenue":"79.11B",
            "grossProfit":"17.66B",
            "operatingExpenses":"8.6B",
            "operatingIncome":"8.89B",
            "incomeBeforeTax":"9.97B",
            "netIncome":"15B",
            "basicEPS":"4.73",
            "EPSDiluted":"4.3",
            "basicAverageShares":"3.48B",
            "dilutedAverageShares":"3.48B",
            "EBITDA":"13.56B"
        },
        {
            "year":2022,
            "totalRevenue":"81.46B",
            "costOfRevenue":"60.61B",
            "grossProfit":"20.85B",
            "operatingExpenses":"7.02B",
            "operatingIncome":"13.66B",
            "incomeBeforeTax":"13.72B",
            "netIncome":"12.58B",
            "basicEPS":"4.02",
            "EPSDiluted":"3.62",
            "basicAverageShares":"3.48B",
            "dilutedAverageShares":"3.48B",
            "EBITDA":"17.83B"
        },
        {
            "year":2021,
            "totalRevenue":"53.82B",
            "costOfRevenue":"40.22B",
            "grossProfit":"13.61B",
            "operatingExpenses":"7.11B",
            "operatingIncome":"6.69B",
            "incomeBeforeTax":"6.34B",
            "netIncome":"5.52B",
            "basicEPS":"1.87",
            "EPSDiluted":"1.63",
            "basicAverageShares":"3.39B",
            "dilutedAverageShares":"3.39B",
            "EBITDA":"9.6B"
        },
        {
            "year":2020,
            "totalRevenue":"31.54B",
            "costOfRevenue":"24.91B",
            "grossProfit":"6.63B",
            "operatingExpenses":"4.64B",
            "operatingIncome":"1.99B",
            "incomeBeforeTax":"1.15B",
            "netIncome":"721M",
            "basicEPS":"0.25",
            "EPSDiluted":"0.21",
            "basicAverageShares":"3.25B",
            "dilutedAverageShares":"3.25B",
            "EBITDA":"4.22B"
        },
    ]

    return(
        <div className="w-full mr-3 h-fit border rounded-lg "> 
            <table className="w-full  mr-3 ">
                {tableHeader.map((header,index)=>(
                    <tr>
                        {index===0?<td className="pl-5 border-b"><strong>{header}</strong></td>:
                         index===12?<td className="pl-5 ">{header}</td>:
                         <td className="pl-5 border-b">{header}</td>}
                        {incomeDetail.map((obj)=>(
                            index===0?<td className="border-b"><strong>{obj.year}</strong></td>:
                            index===1?<td className="border-b">{obj.totalRevenue}</td>:
                            index===2?<td className="border-b">{obj.costOfRevenue}</td>:
                            index===3?<td className="border-b">{obj.grossProfit}</td>:
                            index===4?<td className="border-b">{obj.operatingExpenses}</td>:
                            index===5?<td className="border-b">{obj.operatingIncome}</td>:
                            index===6?<td className="border-b">{obj.incomeBeforeTax}</td>:
                            index===7?<td className="border-b">{obj.netIncome}</td>:
                            index===8?<td className="border-b">{obj.basicEPS}</td>:
                            index===9?<td className="border-b">{obj.EPSDiluted}</td>:
                            index===10?<td className="border-b">{obj.basicAverageShares}</td>:
                            index===11?<td className="border-b">{obj.dilutedAverageShares}</td>:
                            index===12?<td className="">{obj.EBITDA}</td>:null
                        ))}
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default Company;