import React from 'react'
import { useState } from 'react'
import Filter from '../assets/Filter.png'
import Dropdown from '../assets/Dropdown.png'
import Close from '../assets/Close.png'
import DatePicker from 'react-datepicker'

function FilterButton() {
  return (
  <button className="flex items-center my-5 p-2 border border-black rounded-full hover:bg-gray-200">
    <img src={Filter} alt="Filter" className="w-5 h-5 mr-2" />
    Filter
  </button>
  )
}

function DateButton({ text, variation}) {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleButtonClick = () => {
    setShowDatePicker(!showDatePicker);
  };

  return (
    <div>
      <button onClick={handleButtonClick} className="flex items-center p-2 border border-black rounded-full hover:bg-gray-200">
        {text}
        <img src={Dropdown} alt={`${variation} date`} className="w-5 h-5" />
      </button>

      {showDatePicker && (
        <div>
          <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
          <DatePicker selected={endDate} onChange={date => setEndDate(date)} />
        </div>
      )}
    </div>
  );
}

function AppliedFilter({text = "None"}) {
  return (
  <button className="flex items-center mx-1 p-2 border border-black rounded-full bg-deep_blue text-white">
    {text}
    {text !== "None" && (
    <div>
      <img src={Close} alt="Close" className="ml-2 w-5 h-5" />
    </div>
    )}
  </button>
  )
}

function CurrentButton() {
  return (
  <button className="p-2 text-black bg-[#ECF7FF] hover:bg-gray-200">
    Current
  </button>
  )
}

function WatchlistButton() {
  return (
  <button className="p-2 text-black hover:bg-gray-200">
    Watchlist
  </button>
  )
}

function AddTransactionButton() {
  return (
  <button className="p-2 border rounded-lg bg-[#0077B6] text-white hover:bg-[#0077B6]/80">
    Add Transaction
  </button>
  )
}

function PortfolioGrid() {
  return (
    <div className="overflow-x-auto flex flex-1 mx-5">
      <table className="table-auto w-full bg-[#ECF7FF]">
        <thead>
          <tr>
            <th className="px-4 py-2">Ticker</th>
            <th className="px-4 py-2">Transaction</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Quantity</th>
            <th className="px-4 py-2">Price / Share</th>
            <th className="px-4 py-2">Transaction Fees</th>
            <th className="px-4 py-2">Notes</th>
            <th className="px-4 py-2"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 text-center">AAPL</td>
            <td className="px-4 py-2 text-center">Short Sell</td>
            <td className="px-4 py-2 text-center">10/03/2024</td>
            <td className="px-4 py-2 text-center">2000</td>
            <td className="px-4 py-2 text-center">XXXX.XX</td>
            <td className="px-4 py-2 text-center">XX.XX</td>
            <td className="px-4 py-2">
              <div className="max-w-xs text-ellipsis overflow-hidden">XXXXXXXX XXXXXXXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXxxx</div>
            </td>
            <td className="px-4 py-2 text-center">Edit</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const Portfolio = () => {
  return (
    <div className="bg-white-100 text-gray-600 body-font w-full mt-10 mb-20">
      <div className="ml-5 text-lg font-bold">
      My Portfolio
      </div>
      <div className="flex items-center justify-between mx-5">
        <FilterButton className="mt-5 ml-5" />
        <div className="flex items-center">
          <DateButton className="mt-5 ml-5" text="Beginning of Time" variation="start"/>
          <span className="mx-2"> to </span>
          <DateButton className="mt-5 ml-5" text="Now" variation="end"/>
        </div>
      </div>
      <div className="ml-5 mb-3 flex items-center">
        <span className="mr-3">Applied Filters:</span>
        <AppliedFilter />
        <AppliedFilter text="AAPL"/>
        <AppliedFilter text="TSLA"/>
        <AppliedFilter text="MSFT"/>
      </div>
      <div className="flex items-center justify-between mx-5">
        <div className="flex items-center">
          <CurrentButton />
          <WatchlistButton />
        </div>
        <span></span>
        <AddTransactionButton />
      </div>
      <PortfolioGrid />
    </div>
  )
}

export default Portfolio