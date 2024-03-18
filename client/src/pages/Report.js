import React from 'react'
import Customize from '../assets/Customize.png'
import Generate from '../assets/Generate.png'

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
    <div>
      <div className="flex items-center p-1 border border-black rounded-full hover:bg-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
        <input
          type="date"
          name="date"
          id="date"
          autoComplete="date"
          className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
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
    <button className="flex items-center p-2 border-2 border-[#0077B6] rounded-lg bg-white text-[#0077B6] hover:bg-[#0077B6]/20">
      Customize Sections
      <img src={Customize} alt="Customize Section" className="w-5 h-5 ml-2" />
    </button>
  )
}

function GenerateButton() {
  return (
    <button className="flex items-center p-2 border rounded-lg bg-[#0077B6] text-white hover:bg-[#0077B6]/80">
      Generate Now
      <img src={Generate} alt="Generate Report" className="w-5 h-5 ml-2" />
    </button>
  )
}

function ReportGrade({ grade }) {
  return (
    <div className="m-5 flex justify-center items-center rounded-full h-16 w-20 text-center font-bold bg-gray-300">
      Grade:
      <br />
      {grade}
    </div>
  )
}

function ReportSection({ sectionNo, sectionTitle, sectionDesc, sectionText }) {
  return(
    <div className="flex-1">
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
  // const sectionText = 
  // "__________________________________________________________________________ __________________________________________________________________________ __________________________________________________________________________ __________________________________________________________________________ __________________________________________________________________________ __________________________________________________________________________ __________________________________________________________________________ __________________________________________________________________________ __________________________________________________________________________ __________________________________________________________________________ __________________________________________________________________________ __________________________________________________________________________ __________________________________________________________________________ __________________________________________________________________________ __________________________________________________________________________ __________________________________________________________________________ __________________________________________________________________________"
  const sectionText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  return (
    <div className="text-black body-font w-full mt-10 mb-20">
      <div className="ml-5 text-2xl font-semibold text-left mt-5 text-black">
        Assessment Report
      </div>
      <div className="mx-5 p-5">
        <div className="flex items-center justify-between">
          <CustomizeButton />
          <GenerateButton />
        </div>
        <div className="mt-3 h-auto border border-black shadow-2xl">
          <div className="mx-5 flex flex-1 justify-between">
            <div className="flex items-center">
              <span className="mx-2"> From: </span>
              <DateSelector variation="from"/>
              <span className="mx-2"> To: </span>
              <DateSelector variation="to"/>
            </div>
            <div className="flex items-center">
              <ReportGrade grade="A+" />
            </div>
          </div>
          <div className="flex flex-1">
            <div className="w-1/2 flex flex-col">
              <ReportSection sectionNo="1" sectionTitle={sectionOptions[0].sectionTitle} sectionDesc={sectionOptions[0].sectionDesc} sectionText={sectionText}/>
              <ReportSection sectionNo="3" sectionTitle={sectionOptions[2].sectionTitle} sectionDesc={sectionOptions[2].sectionDesc} sectionText={sectionText}/>
            </div>
            <div className="w-1/2 flex flex-col">
              <ReportSection sectionNo="2" sectionTitle={sectionOptions[1].sectionTitle} sectionDesc={sectionOptions[1].sectionDesc} sectionText={sectionText}/>
              <ReportSection sectionNo="4" sectionTitle={sectionOptions[3].sectionTitle} sectionDesc={sectionOptions[3].sectionDesc} sectionText={sectionText}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Report