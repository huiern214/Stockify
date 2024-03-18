import React from 'react'
import Customize from '../assets/Customize.png'
import Generate from '../assets/Generate.png'
import Gauge from '../components/Gauge'

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

const sectionOptions = [
  { sectionTitle: "Portfolio Overview", sectionDesc: "Gain a snapshot of your portfolio's value, asset allocation, and diversification."},
  { sectionTitle: "Risk Assessment", sectionDesc: "Understand the level of risk in your portfolio and adjust your strategy accordingly."},
  { sectionTitle: "Mistakes & Reflection", sectionDesc: "Identify past mistakes and learn from them to improve future decisions."},
  { sectionTitle: "Future Outlook", sectionDesc: "Evaluate the performance of your portfolio and compare it to benchmarks."},
]

function CustomizeButton() {
  return (
    <button className="flex items-center p-2 border-2 border-primary rounded-lg bg-white text-primary hover:bg-primary/20">
      Customize Sections
      <img src={Customize} alt="Customize Section" className="w-5 h-5 ml-2" />
    </button>
  )
}

function GenerateButton() {
  return (
    <button className="flex items-center p-2 border rounded-lg bg-primary text-white hover:bg-primary/80">
      Generate Now
      <img src={Generate} alt="Generate Report" className="w-5 h-5 ml-2" />
    </button>
  )
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

function ReportSection({ sectionNo, sectionTitle, sectionDesc, sectionText }) {
  return(
    <div className="flex-1 border rounded-lg m-5 shadow-md">
      <div className="flex items-center justify-center">
        <div className="mt-5 mx-5 text-lg font-bold text-center">
          {sectionNo}.0 {sectionTitle}
        </div>
      </div>
      <div className="text-sm text-center">
        {sectionDesc}
      </div>
      <div className="p-5 text-base text-pretty text-ellipsis">
        {sectionText}
      </div>
    </div>
  )
}

const Report = () => {
  const sectionText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  const dashboardData = {
    totalPnL: 10000,
    totalPnLPercentage: 10,
    unrealisedPnL: 20000,
    unrealisedPnLPercentage: 20,
  }

  const portfolioValue = 100000;

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
          <CustomizeButton />
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
            {/* <ReportGrade grade="A+" /> */}
            <Gauge score={80} />
          </div>
          <div className="flex w-[100%] justify-between flex-col md:flex-row md:justify-center text-gray-900">
            <div className="p-5 m-2 text-center w-[80%] h-auto bg-white rounded-lg shadow-md mx-5">
              <h2 className="text-sm font-semibold whitespace-nowrap">Total Market Value</h2>
              <p className="text-lg whitespace-nowrap">MYR {portfolioValue.toFixed(2) || '0.00'}</p>
            </div>
            <div className="p-5 m-2 text-center w-[80%] h-auto bg-white rounded-lg shadow-md mx-5">
              <h2 className="text-sm font-semibold whitespace-nowrap">Total Realized P/L</h2>
              <p className={`text-lg whitespace-nowrap ${getPnLColor(dashboardData.totalPnL || 0)}`}>
                MYR {dashboardData.totalPnL ? dashboardData.totalPnL.toFixed(2) : '0.00'}
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
                MYR {dashboardData.unrealisedPnL ? dashboardData.unrealisedPnL.toFixed(2) : '0.00'}
              </p>
              <span className="text-xs text-gray-600">
                ({typeof dashboardData.unrealisedPnLPercentage === 'number'
                  ? dashboardData.unrealisedPnLPercentage.toFixed(2)
                  : '0.00'}%)
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="mx-5 mt-8 text-xl font-bold">Analysis Details</h2>
            <div className="flex flex-col md:flex-row">
              <ReportSection sectionNo="1" sectionTitle={sectionOptions[0].sectionTitle} sectionDesc={sectionOptions[0].sectionDesc} sectionText={sectionText}/>
              <ReportSection sectionNo="2" sectionTitle={sectionOptions[1].sectionTitle} sectionDesc={sectionOptions[2].sectionDesc} sectionText={sectionText}/>
            </div>
            <div className="flex flex-col md:flex-row">
              <ReportSection sectionNo="3" sectionTitle={sectionOptions[2].sectionTitle} sectionDesc={sectionOptions[1].sectionDesc} sectionText={sectionText}/>
              <ReportSection sectionNo="4" sectionTitle={sectionOptions[3].sectionTitle} sectionDesc={sectionOptions[3].sectionDesc} sectionText={sectionText}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Report