import React, { Fragment } from 'react'
import { useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import Filter from '../assets/Filter.png'
import Close from '../assets/Close.png'
import Plus from '../assets/Plus.png'

function FilterButton() {
  const filterOptions = [
    { id: 'AAPL', name: 'AAPL' },
    { id: 'MSFT', name: 'MSFT' },
    { id: 'TSLA', name: 'TSLA' },
  ]

  return (
    <></>
    // <Menu as="div" className="flex items-center my-5 p-2 border border-black rounded-full hover:bg-gray-200">
    //   <div>
    //     <Menu.Button>
    //       <img src={Filter} alt="Filter" className="w-5 h-5 mr-2" />
    //       Filter
    //     </Menu.Button>
    //   </div>

    //   <Transition
    //     as={Fragment}
    //     enter="transition ease-out duration-100"
    //     enterFrom="transform opacity-0 scale-95"
    //     enterTo="transform opacity-100 scale-100"
    //     leave="transition ease-in duration-75"
    //     leaveFrom="transform opacity-100 scale-100"
    //     leaveTo="transform opacity-0 scale-95"
    //     >
    //       <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
    //         <div className="py-1">
    //           {filterOptions.map((option) => (
    //             <Menu.Item key={option.id}>
    //               {({ active }) => (
    //                 <div className="relative flex gap-x-3">
    //                   <div className="flex h-6 items-center">
    //                     <input
    //                       id={option.id}
    //                       name={option.id}
    //                       type="checkbox"
    //                       className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
    //                     />
    //                   </div>
    //                   <div className="text-sm leading-6">
    //                     <label htmlFor={option.id} className="font-medium text-gray-900">
    //                       {option.label}
    //                     </label>
    //                   </div>
    //                 </div>
    //               )}
    //             </Menu.Item>
    //           ))}
    //         </div>
    //       </Menu.Items>
    //     </Transition>
    // </Menu>
  )
}

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

function AppliedFilter({text = "None"}) {
  return (
  <button className="flex items-center mx-1 p-2 rounded-full bg-deep_blue text-white">
    <b>{text}</b>
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
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);

  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  return (
    <div>
      <button onClick={toggleModal} className="flex items-center p-2 border rounded-lg bg-[#0077B6] text-white hover:bg-[#0077B6]/80">
        Add Transaction
        <img src={Plus} alt="Add Transaction" className="w-5 h-5 ml-2" />
      </button>

      {modal && (
        <div className="fixed inset-0 flex items-center justify-center h-screen">
        <div className="absolute inset-0 bg-black/80"></div>
          <div className="modal-content absolute h-5/6 w-1/3 bg-[#FFFFFF] overflow-y-auto rounded-lg">
            <div>
              <h2 className="mt-10 ml-10 text-base font-semibold leading-7 text-gray-900">Add Transaction</h2>
              <p className="mt-1 ml-10 text-sm leading-6 text-gray-600">
                This information will only be visible by you.
              </p>

              <div className="mt-5 ml-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label htmlFor="ticker" className="block text-sm font-medium leading-6 text-gray-900">
                    Ticker
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset     focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="text"
                        name="ticker"
                        id="ticker"
                        autoComplete="ticker"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0  sm:text-sm   sm:leading-6"
                        placeholder="XXXX"
                        maxLength="4"
                        onInput={(e) => e.target.value = e.target.value.toUpperCase()}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 ml-10 sm:col-span-3">
                <label htmlFor="transaction" className="block text-sm font-medium leading-6 text-gray-900">
                  Transaction
                </label>
                <div className="mt-2">
                  <select
                    id="transaction"
                    name="transaction"
                    autoComplete="transaction-type"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2     focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>Short Sell</option>
                    <option>Buy</option>
                  </select>
                </div>
              </div>

              <div className="mt-5 ml-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label htmlFor="date" className="block text-sm font-medium leading-6 text-gray-900">
                    Date
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset     focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="date"
                        name="date"
                        id="date"
                        autoComplete="date"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0  sm:text-sm   sm:leading-6"
                        placeholder="dd/mm/yyyy"
                        defaultValue={getTodayDate()}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 ml-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label htmlFor="quantity" className="block text-sm font-medium leading-6 text-gray-900">
                    Quantity
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset     focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="number"
                        name="quantity"
                        id="quantity"
                        autoComplete="quantity"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0  sm:text-sm   sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 ml-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label htmlFor="pricepershare" className="block text-sm font-medium leading-6 text-gray-900">
                    Price / Share
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset     focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="number"
                        name="pricepershare"
                        id="pricepershare"
                        autoComplete="pricepershare"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0  sm:text-sm   sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 ml-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label htmlFor="transactionfee" className="block text-sm font-medium leading-6 text-gray-900">
                    Transaction Fees
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset     focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="number"
                        name="transactionfee"
                        id="transactionfee"
                        autoComplete="transactionfee"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0  sm:text-sm   sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mx-10 mt-5 mcol-span-full">
                <label htmlFor="notes" className="block text-sm font-medium leading-6 text-gray-900">
                  Notes
                </label>
                <div className="mt-2">
                  <textarea
                    id="notes"
                    name="notes"
                    rows={3}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300    placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={''}
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">Elaborate how you make your decision.</p>
              </div>

              <div className="my-6 mr-10 flex items-center justify-end gap-x-6">
                <button type="button" className="rounded-md text-sm px-3 py-2 font-semibold leading-6 text-gray-900 hover:bg-gray-300"
                onClick={toggleModal}>
                  Cancel
                </button>
                <button
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={toggleModal}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
      </div>
      )}
    </div>
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
            <th className="px-4 py-2">Edit</th>
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
            <td className="px-4 py-2 text-center">
              <button className="p-2 border rounded-lg bg-[#0077B6] text-white hover:bg-[#0077B6]/80">
                Edit
              </button>
              <button className="p-2 border rounded-lg bg-[#0077B6] text-white hover:bg-[#0077B6]/80">
                Delete
              </button>
            </td>
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
          <span className="mx-2"> From: </span>
          <DateSelector variation="from"/>
          <span className="mx-2"> To: </span>
          <DateSelector variation="to"/>
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