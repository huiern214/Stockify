import React, { Fragment } from 'react'
import { useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import Filter from '../assets/Filter.png'
import Close from '../assets/Close.png'
import Plus from '../assets/Plus.png'
import { FaEdit, FaPlus, FaTrash } from 'react-icons/fa'

// function FilterButton() {
//   const filterOptions = [
//     { id: 'AAPL', name: 'AAPL' },
//     { id: 'MSFT', name: 'MSFT' },
//     { id: 'TSLA', name: 'TSLA' },
//   ]

//   return (
//     <></>
//     // <Menu as="div" className="flex items-center my-5 p-2 border border-black rounded-full hover:bg-gray-200">
//     //   <div>
//     //     <Menu.Button>
//     //       <img src={Filter} alt="Filter" className="w-5 h-5 mr-2" />
//     //       Filter
//     //     </Menu.Button>
//     //   </div>

//     //   <Transition
//     //     as={Fragment}
//     //     enter="transition ease-out duration-100"
//     //     enterFrom="transform opacity-0 scale-95"
//     //     enterTo="transform opacity-100 scale-100"
//     //     leave="transition ease-in duration-75"
//     //     leaveFrom="transform opacity-100 scale-100"
//     //     leaveTo="transform opacity-0 scale-95"
//     //     >
//     //       <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//     //         <div className="py-1">
//     //           {filterOptions.map((option) => (
//     //             <Menu.Item key={option.id}>
//     //               {({ active }) => (
//     //                 <div className="relative flex gap-x-3">
//     //                   <div className="flex h-6 items-center">
//     //                     <input
//     //                       id={option.id}
//     //                       name={option.id}
//     //                       type="checkbox"
//     //                       className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-blue-500"
//     //                     />
//     //                   </div>
//     //                   <div className="text-sm leading-6">
//     //                     <label htmlFor={option.id} className="font-medium text-gray-900">
//     //                       {option.label}
//     //                     </label>
//     //                   </div>
//     //                 </div>
//     //               )}
//     //             </Menu.Item>
//     //           ))}
//     //         </div>
//     //       </Menu.Items>
//     //     </Transition>
//     // </Menu>
//   )
// }

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
    <div className="max-w-md mx-auto">
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

function TransactionButton({ isActive, onClick }) {
  return (
    <button
      className={`p-2 text-black ${isActive ? 'border-b-2 border-primary' : ''} hover:bg-gray-200`}
      onClick={onClick}
    >
      Transaction
    </button>
  );
}

function WatchlistButton({ isActive, onClick }) {
  return (
    <button
      className={`p-2 text-black ${isActive ? 'border-b-2 border-primary' : ''} hover:bg-gray-200`}
      onClick={onClick}
    >
      Watchlist
    </button>
  );
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
    <div className='max-w-screen-xl flex flex-wrap p-4 justify-between items-center'>
      <button onClick={toggleModal} className="flex p-2 bg-primary text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
        <p className="hidden md:inline mr-2">Add Transaction</p>
        <img src={Plus} alt="Add Transaction" className="w-5 h-5" />
      </button>

      {modal && (
        <div className="z-[50] fixed inset-0 flex items-center justify-center h-screen">
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
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500 sm:max-w-md">
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
                  Type
                </label>
                <div className="mt-2">
                  <select
                    id="transaction"
                    name="transaction"
                    autoComplete="transaction-type"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>Sell</option>
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
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500 sm:max-w-md">
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
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500 sm:max-w-md">
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
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset     focus-within:ring-blue-500 sm:max-w-md">
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
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500 sm:max-w-md">
                      <input
                        type="number"
                        name="transactionfee"
                        id="transactionfee"
                        autoComplete="transactionfee"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
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
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                    defaultValue={''}
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">Elaborate how you make your decision.</p>
              </div>

              <div className="my-6 mr-10 flex items-center justify-end gap-x-6">
                <button type="button" className="rounded-md text-sm px-3 py-2 font-semibold leading-6 text-gray-900 hover:bg-gray-300 hover:border hover:border-black"
                onClick={toggleModal}>
                  Cancel
                </button>
                <button
                  className="rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
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

function TransactionTable() {
  return (
    <div class="overflow-x-auto flex flex-1 mx-3 shadow-md sm:rounded-lg">
      <table class="table-auto w-full text-sm text-right rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="px-1 py-3">Type</th>
            <th className="px-1 py-3">Ticker</th>
            <th className="px-1 py-3">Date</th>
            <th className="px-1 py-3">Quantity</th>
            <th className="px-1 py-3">Price / Share</th>
            <th className="px-1 py-3">Fees</th>
            <th className="px-1 py-3">Notes</th>
            <th className="px-1 py-3 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2">Sell</td>
            <td className="py-2">AAPL</td>
            <td className="py-2">10/03/2024</td>
            <td className="py-2">2000</td>
            <td className="py-2">XXXX.XX</td>
            <td className="py-2">XX.XX</td>
            <td className="py-2">
              <div className="overflow-hidden">XXXXXXXXXXXX</div>
            </td>
            <td className="px-1 flex py-2 justify-center space-x-3">
              <button onClick={() => console.log('Edit')} className="p-2 text-primary hover:text-blue-600 focus:ring-blue-500">
                <FaEdit className="text-2xl" />
              </button>
              <button onClick={() => console.log('Delete')} className="p-2 text-red-600 hover:text-red-500">
                  <FaTrash className="text-2xl" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

// Ticker Price Change % Holdings Realized P/L Unrealized P/L
function WatchlistTable() {
  return (
    <div class="overflow-x-auto flex flex-1 mx-3 shadow-md sm:rounded-lg">
      <table class="table-auto w-full text-sm text-right rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="px-1 py-3">Ticker</th>
            <th className="px-1 py-3">Price</th>
            <th className="px-1 py-3">Holdings</th>
            <th className="px-1 py-3">Realized P/L</th>
            <th className="px-1 py-3">Unrealized P/L</th>
            <th className="px-1 py-3 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2">AAPL</td>
            <td className="py-2">XXXX.XX</td>
            <td className="py-2">
              <div className="whitespace-nowrap">XXXX.XX</div>
              <div className="text-xs">100 Shares</div>
            </td>
            <td className="py-2">10000.00 (10.00%)</td>
            <td className="py-2">20000.00 (20.00%)</td>
            <td className="px-1 flex py-2 justify-center space-x-3">
              <button onClick={() => console.log('Add Transaction')} className="p-2 text-primary hover:text-blue-600 focus:ring-blue-500">
                <FaPlus className="text-2xl" />
              </button>
              <button onClick={() => console.log('Delete')} className="p-2 text-red-600 hover:text-red-500">
                  <FaTrash className="text-2xl" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const Portfolio = () => {

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

  const [transactionActive, setTransactionActive] = useState(null);
  const [watchlistActive, setWatchlistActive] = useState(null);

  // default to transaction
  if (transactionActive === null && watchlistActive === null) {
    setWatchlistActive(true);
  }

  return (
    <div className="container mx-auto md:px-6 mb-[5%]">
      <div className="mx-[5%] md:mx-0">
        <p className="text-2xl font-semibold text-left mt-5 mb-10 text-black">
        Portfolio
        </p>

        <div className="flex flex-col md:flex-row text-gray-900">
          <div className="p-5 m-2 text-center w-auto h-auto bg-white rounded-lg shadow-md">
            <h2 className="text-sm font-semibold whitespace-nowrap">Total Market Value</h2>
            <p className="text-lg whitespace-nowrap">MYR {portfolioValue.toFixed(2) || '0.00'}</p>
          </div>
          <div className="p-5 m-2 text-center w-auto h-auto bg-white rounded-lg shadow-md">
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
          <div className="p-5 m-2 text-center w-auto h-auto bg-white rounded-lg shadow-md">
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

        <div className="flex items-center md:justify-between md:mx-5">
          <div class="hidden md:block"/>
          <div className="flex items-center space-x-5 py-4 md:p-4">
            <DateSelector variation="from"/>
            <span className="mx-2"> - </span>
            <DateSelector variation="to" />
          </div>
        </div>

        <div className="ml-5 mb-3 flex items-center">
          <span className="mr-3">Applied Filters:</span>
          <AppliedFilter />
          <AppliedFilter text="AAPL"/>
          <AppliedFilter text="TSLA"/>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between mx-5">
          <div className="flex items-center space-x-5">
            <WatchlistButton
              isActive={watchlistActive}
              onClick={() => {
                setWatchlistActive(true);
                setTransactionActive(false);
              }}
            />
            <TransactionButton
              isActive={transactionActive}
              onClick={() => {
                setTransactionActive(true);
                setWatchlistActive(false);
              }}
            />
          </div>
          <div className="flex flex-row items-center">
            {/* Search button */}
            <div
              class="relative flex"
              data-twe-input-wrapper-init
              data-twe-input-group-ref>
              <input
                type="search"
                class="peer block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0 border-gray-300"
                placeholder="Search"
                aria-label="Search"
                id="exampleFormControlInput"
                aria-describedby="basic-addon1" />
              <label for="exampleFormControlInput" class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.5rem] peer-focus:-translate-x-[0.8rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary">
                Search
              </label>
              <button
                class="relative z-[2] -ms-0.5 flex items-center rounded-e bg-primary px-5  text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                type="button"
                id="button-addon1"
                data-twe-ripple-init
                data-twe-ripple-color="light">
                <span class="[&>svg]:h-5 [&>svg]:w-5">
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
                </span>
              </button>
            </div>
          <AddTransactionButton />
        </div>

        </div>

        {transactionActive && <TransactionTable />}
        {watchlistActive && <WatchlistTable />}
      </div>
    </div>
  )
}

export default Portfolio