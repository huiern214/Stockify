import React, { Fragment, useState } from 'react'
import Customize from '../assets/Customize.png'
import Generate from '../assets/Generate.png'
import Gauge from '../components/Gauge'
import { Popover, Transition } from '@headlessui/react'

function DateSelector({ variation }) {
  const getDefaultDate = () => {
    if (variation === "to") {
      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, '0');
      const day = String(today.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    }
    else {
      return '2000-01-01';
    }
  }

  return (
    <div className="max-w-md w-[40%]">
      <div className="flex items-center p-1 border rounded-full hover:bg-gray-200 ring-1 ring-inset ring-gray-200 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500">
        <input
          type="date"
          name="date"
          id="date"
          autoComplete="date"
          className="block flex-1 border-0 bg-transparent py-1.5 px-2 text-sm text-gray-900 placeholder:text-gray-400 focus:ring-0"
          placeholder="dd/mm/yyyy"
          defaultValue={getDefaultDate()}
        />
      </div>
    </div>
  )
}

const sections = [
  {
    id: 1,
    sectionTitle: "Portfolio Overview",
    sectionDesc: "Gain a snapshot of your portfolio's value, asset allocation, and diversification.",
    sectionText: "Based on the records, the total market value of your portfolio is $150,000.00, with a mix of stocks, bonds, and ETFs. The portfolio has generated an average annual return of 10% over the past year, outperforming the market benchmark of 8%. It is recommended to continue monitoring your portfolio and rebalancing as needed to maintain diversification and optimize returns. The portfolio is well-diversified across different asset classes and sectors, with a mix of growth and income-generating investments.",
    checked: true
  },
  {
    id: 2,
    sectionTitle: "Risk Assessment",
    sectionDesc: "Understand the level of risk in your portfolio and adjust your strategy accordingly.",
    sectionText: "Your portfolio has a risk score of 80, indicating a moderate level of risk. This is due to the high volatility of some of the stocks in your portfolio, especially in the technology sector. It is recommended to diversify your holdings to reduce risk. Consider adding bonds or other fixed-income securities to your portfolio to provide stability and reduce volatility.",
    checked: true
  },
  {
    id: 3,
    sectionTitle: "Mistakes & Reflection",
    sectionDesc: "Identify past mistakes and learn from them to improve future decisions.",
    sectionText: "Based on the analysis of your past trades, it appears that you have a tendency to hold onto losing positions for too long. This has resulted in missed opportunities to cut losses and reinvest in more promising assets. It is recommended to set stop-loss orders to prevent further losses.",
    checked: true
  },
  {
    id: 4,
    sectionTitle: "Future Outlook",
    sectionDesc: "Evaluate the performance of your portfolio and compare it to benchmarks.",
    sectionText: "Your portfolio has outperformed the S&P 500 index by 5% over the past year. This is due to the strong performance of tech stocks in your portfolio, such as Apple and Amazon. It is recommended to continue monitoring the market and adjusting your holdings accordingly. Consider rebalancing your portfolio to take advantage of new opportunities and mitigate risks.",
    checked: true
  },
  {
    id: 5,
    sectionTitle: "Sector Analysis",
    sectionDesc: "Assess the allocation of your investments across different sectors or industries.",
    sectionText: "Your portfolio is heavily weighted towards the technology sector, with over 50% of your holdings in tech stocks. While this has led to strong returns in recent years, it also exposes your portfolio to sector-specific risks. It is recommended to diversify your holdings across different sectors to reduce risk.",
    checked: false
  },
  {
    id: 6,
    sectionTitle: "Environmental, Social, and Governance (ESG) Analysis",
    sectionDesc: "Evaluate the environmental, social, and governance factors associated with your investments.",
    sectionText: "Based on the ESG analysis of your portfolio, it appears that you have a strong focus on companies with high environmental and social responsibility ratings. This is reflected in the performance of your portfolio, which has outperformed the market in recent years. It is recommended to continue investing in companies that prioritize ESG factors.",
    checked: false
  },
  {
    id: 7,
    sectionTitle: "Income Analysis",
    sectionDesc: "Evaluate the income generated by your portfolio through dividends, interest, and other sources.",
    sectionText: "Your portfolio generates an average annual income of $5,000.00 through dividends and interest payments. This income is reinvested to further grow your portfolio and generate additional returns. It is recommended to continue reinvesting income to take advantage of compounding returns.",
    checked: false
  },
  {
    id: 8,
    sectionTitle: "Expense Tracking",
    sectionDesc: "Track and analyze expenses related to managing your portfolio, such as transaction fees and advisory costs.",
    sectionText: "Based on the analysis of your expenses, it appears that you are paying an average of $500.00 per year in transaction fees and advisory costs. While these expenses are relatively low compared to the size of your portfolio, it is recommended to review your investment strategy and consider lower-cost alternatives.",
    checked: false
  },
  {
    id: 9,
    sectionTitle: "Exploring New Horizons",
    sectionDesc: "Discover promising investment opportunities in emerging industries and fields that are not currently in your portfolio.",
    sectionText: "Based on the analysis of emerging industries, it appears that the renewable energy sector is poised for significant growth in the coming years. Investing in renewable energy companies could provide diversification benefits and potential returns. It is recommended to research and consider adding exposure to this sector in your portfolio.",
    checked: false
  },
  {
    id: 10,
    sectionTitle: "Personality Sketch",
    sectionDesc: "Experience a unique visual representation of your investment personality based on your portfolio data and trading behavior.",
    sectionText: "Your investment personality is characterized by a balanced approach to risk and reward. You tend to make well-informed decisions based on thorough research and analysis, while also being open to new opportunities and ideas. This balanced approach has led to consistent returns and steady growth in your portfolio.",
    checked: false
  }
]

function CustomizeButton({ sectionOptions, handleCheckboxChange }) {
  return (
    <Popover className="relative">
      <Popover.Button className="flex items-center p-2 border-2 border-primary rounded-lg bg-white text-primary hover:bg-primary/20">
        Customize Sections
        <img src={Customize} alt="Customize Section" className="w-5 h-5 ml-2" />
      </Popover.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="mt-1 absolute z-10 flex w-[18rem] md:w-96 shadow-2xl">
          <div className="w-fit h-[30rem] flex-col rounded-2xl bg-white text-sm leading-loose shadow-lg ring-1 ring-gray-900/10">
            <div className="p-2 overflow-y-auto h-[30rem]">
              {
              sectionOptions.map((section) => (
                <div key={section.id} className="group relative flex gap-x-6 rounded-lg p-3 hover:bg-gray-50">
                  <div className="items-center flex flex-none justify-center">
                    <input type="checkbox" id={section.id} className="rounded text-blue-500 focus:ring-blue-500" defaultChecked={section.checked} onChange={() => handleCheckboxChange(section.id)}/>
                  </div>
                  <div>
                    <a className="font-semibold text-black">
                      {section.sectionTitle}
                    </a>
                    <p className=" text-gray-600 leading-tight">{section.sectionDesc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

function GenerateButton() {
  return (
    <button className="relative flex items-center p-2 border rounded-lg text-white overflow-hidden bg-gradient-to-r from-primary to-blue-500 animate-bg-slide hover:from-purple-600 hover:to-blue-600">
      Generate Now
      <img src={Generate} alt="Generate Report" className="w-5 h-5 ml-2" />
    </button>
  );
}

function ReportGrade({ grade }) {
  return (
    <div className="m-5 flex justify-center items-center rounded-full h-16 w-20 text-center font-bold ">
      Grade:
      <br />
      {grade}
    </div>
  )
}

function ReportSection({ sectionTitle, sectionDesc, sectionText }) {
  return(
    <div className="flex-1 border h-full bg-white rounded-lg ml-5 mb-5 shadow-md">
      <div className="flex items-center justify-center">
        <div className="mt-5 mx-5 text-lg font-bold text-center">
          {sectionTitle}
        </div>
      </div>
      <div className="text-sm text-center mx-2">
        {sectionDesc}
      </div>
      <div className="p-5 text-base text-pretty text-ellipsis">
        {sectionText}
      </div>
    </div>
  )
}

const Report = () => {
  const [sectionOptions, setSectionOptions] = useState(sections);
  console.log(sectionOptions);
  const handleCheckboxChange = (id) => {
    setSectionOptions(prevSections => 
      prevSections.map(section => 
        section.id === id ? { ...section, checked: !section.checked } : section))
  }

  // const sectionText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  const dashboardData = {
    totalPnL: 19800,
    totalPnLPercentage: 12.77,
    unrealisedPnL: 26500,
    unrealisedPnLPercentage: 17.09,
  };

  const portfolioValue = 155000;

  const getPnLColor = (value) => {
    if (value > 0) return 'text-green-500';
    if (value < 0) return 'text-red-500';
    return 'text-black';
  }

  return (
    <div className="text-black body-font w-full mt-10 mb-20">
      <div className="ml-10 text-2xl font-semibold text-left mt-5 text-black">
        Assessment Report
      </div>
      <div className="mx-5 p-5">
        <div className="flex items-center justify-between">
          <CustomizeButton sectionOptions={sectionOptions} handleCheckboxChange={handleCheckboxChange}/>
          <GenerateButton />
        </div>
        <div className="mt-3 h-auto border rounded-lg shadow-2xl">
          <div className="mx-3 flex flex-1 justify-between">
            <div className="flex flex-col md:items-center md:flex-row items-start my-5">
              <span className="text-lg font-semibold my-1 md:mr-4">Date Range:</span>
              <div className="flex items-center">
                <DateSelector variation="from"/>
                <span className="mx-2"> - </span>
                <DateSelector variation="to" />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Gauge score={80} />
          </div>
          <div className="flex w-[100%] justify-between flex-col md:flex-row md:justify-center text-gray-900">
            <div className="p-5 m-2 text-center w-[80%] h-auto bg-white rounded-lg shadow-md mx-5">
              <h2 className="text-sm font-semibold whitespace-nowrap">Total Market Value</h2>
              <p className="text-lg whitespace-nowrap"> {portfolioValue.toFixed(2) || '0.00'}</p>
            </div>
            <div className="p-5 m-2 text-center w-[80%] h-auto bg-white rounded-lg shadow-md mx-5">
              <h2 className="text-sm font-semibold whitespace-nowrap">Total Realized P/L</h2>
              <p className={`text-lg whitespace-nowrap ${getPnLColor(dashboardData.totalPnL || 0)}`}>
                 {dashboardData.totalPnL ? dashboardData.totalPnL.toFixed(2) : '0.00'}
              </p>
              {!isNaN(dashboardData.totalPnLPercentage) && (
                <span className="text-xs text-gray-600">
                  ({dashboardData.totalPnLPercentage.toFixed(2)}%)
                </span>
              )}
            </div>
            <div className="p-5 m-2 text-center w-[80%] h-auto bg-white rounded-lg shadow-md mx-5">
              <h2 className="text-sm font-semibold whitespace-nowrap">Total Unrealized P/L</h2>
              <p className={`text-lg whitespace-nowrap ${getPnLColor(dashboardData.unrealisedPnL || 0)}`}>
                 {dashboardData.unrealisedPnL ? dashboardData.unrealisedPnL.toFixed(2) : '0.00'}
              </p>
              <span className="text-xs text-gray-600">
                ({typeof dashboardData.unrealisedPnLPercentage === 'number'
                  ? dashboardData.unrealisedPnLPercentage.toFixed(2)
                  : '0.00'}%)
              </span>
            </div>
          </div>
          <div className="flex flex-col ">
            <h2 className="mx-5 mt-8 text-xl font-bold mb-5">Analysis Details</h2>
            {/* <div className="flex flex-col flex-wrap justify-center">
              {sectionOptions.map((section, index) => (
                section.checked && (
                  // if index even, bg-primary/10, else bg-white
                  <div key={index} className={`flex flex-col md:flex-row ${index % 2 === 1 ? 'bg-primary/10' : 'bg-white'}`}>
                  <ReportSection
                    key={section.id}
                    sectionTitle={section.sectionTitle}
                    sectionDesc={section.sectionDesc}
                    sectionText={sections[section.id - 1].sectionText}
                    />
                    </div>
                )
              ))}
            </div> */}
            {(() => {
              const selectedSections = sectionOptions.filter(section => section.checked);
              const itemCount = selectedSections.length;
              const numRows = Math.ceil(itemCount / 2);
              selectedSections.forEach((section, index) => {
                const rowIndex = Math.floor(index / 2);
                const colIndex = index % 2;
                section.rowIndex = rowIndex;
                section.colIndex = colIndex;
              })
              
              const rows = [];
              for (let rowIndex=0; rowIndex < numRows; rowIndex++){
                const columns = [];
                for (let colIndex=0; colIndex < 2; colIndex++){
                  const section = selectedSections[rowIndex * 2 + colIndex];
                  const sectionTexts = sections;
                  columns.push(
                    <div key={colIndex} className="flex-1">
                      {section && (
                        <ReportSection
                          key={section.id}
                          sectionTitle={section.sectionTitle}
                          sectionDesc={section.sectionDesc}
                          sectionText={sectionTexts[section.id - 1].sectionText}
                        />
                      )}
                    </div>
                  );
                }
                rows.push(
                  <div key={rowIndex} className="flex flex-col md:flex-row md:mb-5 mr-5">
                    {columns}
                  </div>
                );
              }
              return rows;
              })()
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Report