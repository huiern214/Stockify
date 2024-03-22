import React, { Fragment, useEffect } from "react";
import { useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import Filter from "../assets/Filter.png";
import Close from "../assets/Close.png";
import Plus from "../assets/Plus.png";
import {
  FaEdit,
  FaPlus,
  FaTrash,
  FaArrowUp,
  FaArrowDown,
} from "react-icons/fa";

const filterOptions = [
  { id: "AAPL", ticker: "AAPL", checked: false },
  { id: "MSFT", ticker: "MSFT", checked: false },
  { id: "TSLA", ticker: "TSLA", checked: false },
  { id: "GOOG", ticker: "GOOG", checked: false },
  { id: "AMZN", ticker: "AMZN", checked: false },
  { id: "NVDA", ticker: "NVDA", checked: false },
];

const oriWatchlistItems = [
  {
    Ticker: "AAPL",
    Price: 165.25,
    Holdings: 20000.0,
    Shares: "120 Shares",
    RealizedPL: { amount: 2500.0, percentage: 10.0 },
    UnrealizedPL: { amount: 3500.0, percentage: 20.0 },
  },
  {
    Ticker: "GOOGL",
    Price: 2495.5,
    Holdings: 30000.0,
    Shares: "15 Shares",
    RealizedPL: { amount: 1800.0, percentage: 8.0 },
    UnrealizedPL: { amount: 5000.0, percentage: 25.0 },
  },
  {
    Ticker: "TSLA",
    Price: 700.8,
    Holdings: 50000.0,
    Shares: "75 Shares",
    RealizedPL: { amount: 10000.0, percentage: 15.0 },
    UnrealizedPL: { amount: 8000.0, percentage: 10.0 },
  },
  {
    Ticker: "AMZN",
    Price: 3125.75,
    Holdings: 40000.0,
    Shares: "10 Shares",
    RealizedPL: { amount: 3500.0, percentage: 12.5 },
    UnrealizedPL: { amount: 6000.0, percentage: 15.0 },
  },
  {
    Ticker: "MSFT",
    Price: 250.0,
    Holdings: 15000.0,
    Shares: "60 Shares",
    RealizedPL: { amount: 2000.0, percentage: 13.33 },
    UnrealizedPL: { amount: 4000.0, percentage: 20.0 },
  },
];

const oriTransactionItems = [
  {
    Type: "Sell",
    Ticker: "TSLA",
    Date: "9/03/2024",
    Quantity: 1000,
    PricePerShare: 800.75,
    Fees: 30.0,
    Notes: "Sold 1000 shares of TSLA due to recent price volatility.",
  },
  {
    Type: "Sell",
    Ticker: "MSFT",
    Date: "10/03/2024",
    Quantity: 3000,
    PricePerShare: 250.5,
    Fees: 40.0,
    Notes: "Sold 3000 shares of MSFT to take profits.",
  },
  {
    Type: "Sell",
    Ticker: "AAPL",
    Date: "10/03/2024",
    Quantity: 2000,
    PricePerShare: 150.25,
    Fees: 25.0,
  },
  {
    Type: "Buy",
    Ticker: "AAPL",
    Date: "11/03/2024",
    Quantity: 1500,
    PricePerShare: 155.5,
    Fees: 20.0,
  },
  {
    Type: "Buy",
    Ticker: "NVDA",
    Date: "11/03/2024",
    Quantity: 500,
    PricePerShare: 350.8,
    Fees: 15.0,
    Notes: "Bought 500 shares of NVDA for long-term investment.",
  },
];

function FilterButton({ optionsState, handleCheckboxChange }) {
  return (
    <Popover className="relative">
      <Popover.Button className="inline-flex items-center p-2 rounded-2xl hover:bg-gray-50 border border-gray-200/50 text-gray-700">
        <img src={Filter} alt="Filter" className="w-5 h-5 mr-2 " />
        Filter
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
        <Popover.Panel className="mt-1 absolute z-10 flex w-auto max-w-max">
          <div className="w-auto flex-auto overflow-hidden rounded-2xl bg-white text-sm leading-loose shadow-lg ring-1 ring-gray-200/50">
            <div className="p-4">
              {optionsState.map((option) => (
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id={option.id}
                    className="rounded text-blue-500"
                    defaultChecked={option.checked}
                    onChange={() => handleCheckboxChange(option.id)}
                  />
                  <label className="ml-2">{option.ticker}</label>
                </div>
              ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

function DateSelector({ variation, handleDateChange }) {
  const getDefaultDate = () => {
    if (variation === "to") {
      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, "0");
      const day = String(today.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    } else {
      return "2000-01-01";
    }
  };

  const handleChange = (event) => {
    const { value } = event.target;
    handleDateChange(value, variation);
  };

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
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

function AppliedFilter({ ticker = "None", handleDeleteFilter }) {
  return (
    <button
      className="flex items-center mx-1 p-2 rounded-full bg-deep_blue text-white hover:bg-blue-900"
      onClick={ticker !== "None" ? handleDeleteFilter : null}
    >
      <b>{ticker}</b>
      {ticker !== "None" && (
        <div>
          <img src={Close} alt="Close" className="ml-2 w-5 h-5" />
        </div>
      )}
    </button>
  );
}

function TransactionButton({ isActive, onClick }) {
  return (
    <button
      className={`p-2 text-black ${
        isActive ? "border-b-2 border-primary" : ""
      } hover:bg-gray-200`}
      onClick={onClick}
    >
      Transaction
    </button>
  );
}

function WatchlistButton({ isActive, onClick }) {
  return (
    <button
      className={`p-2 text-black ${
        isActive ? "border-b-2 border-primary" : ""
      } hover:bg-gray-200`}
      onClick={onClick}
    >
      Watchlist
    </button>
  );
}

function AddStockButton({ handleAddStock }) {
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);

  return (
    <div className="max-w-screen-xl flex flex-wrap p-4 justify-between items-center">
      <button
        onClick={toggleModal}
        className="flex p-2 bg-primary text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <p className="hidden md:inline mr-2">Add Stock</p>
        <img src={Plus} alt="Add Stock" className="w-5 h-5" />
      </button>

      {modal && (
        <div className="z-[50] fixed inset-0 flex items-center justify-center h-screen">
          <div className="absolute inset-0 bg-black/80"></div>
          <div className="modal-content absolute h-auto w-auto bg-[#FFFFFF] overflow-y-auto rounded-lg">
            <div>
              <h2 className="mt-10 ml-10 text-base font-semibold leading-7 text-gray-900">
                Add Stock
              </h2>

              <div className="mt-5 ml-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="ticker"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
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
                        placeholder="STKF"
                        maxLength="5"
                        onInput={(e) =>
                          (e.target.value = e.target.value.toUpperCase())
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="my-6 mr-10 flex items-center justify-end gap-x-6">
                <button
                  type="button"
                  className="rounded-md text-sm px-3 py-2 font-semibold leading-6 text-gray-900 hover:bg-gray-300 hover:border hover:border-black"
                  onClick={toggleModal}
                >
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
  );
}

function AddTransactionButton({ handleAddTransaction }) {
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);

  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const handleSave = (event) => {
    event.preventDefault();

    const newTransaction = {
      Type: document.getElementById("type").value,
      Ticker: document.getElementById("ticker").value,
      Date: document.getElementById("date").value,
      Quantity: parseInt(document.getElementById("quantity").value),
      PricePerShare: parseFloat(document.getElementById("pricepershare").value),
      Fees: parseFloat(document.getElementById("fees").value),
      Notes: document.getElementById("notes").value,
    };
    handleAddTransaction(newTransaction);

    toggleModal();
  };

  return (
    <div className="max-w-screen-xl flex flex-wrap p-4 justify-between items-center">
      <button
        onClick={toggleModal}
        className="flex p-2 bg-primary text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <p className="hidden md:inline mr-2">Add Transaction</p>
        <img src={Plus} alt="Add Transaction" className="w-5 h-5" />
      </button>

      {modal && (
        <div className="z-[50] fixed inset-0 flex items-center justify-center h-screen">
          <div className="absolute inset-0 bg-black/80"></div>
          <div className="modal-content absolute h-5/6 w-1/3 bg-[#FFFFFF] overflow-y-auto rounded-lg">
            <form onSubmit={handleSave}>
              <h2 className="mt-10 ml-10 text-base font-semibold leading-7 text-gray-900">
                Add Transaction
              </h2>
              <p className="mt-1 ml-10 text-sm leading-6 text-gray-600">
                This information will only be visible by you.
              </p>

              <div className="mt-5 ml-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="ticker"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Ticker
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500 sm:max-w-md">
                      <input
                        type="text"
                        name="ticker"
                        id="ticker"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0  sm:text-sm   sm:leading-6"
                        placeholder="STKF"
                        maxLength="5"
                        onInput={(e) =>
                          (e.target.value = e.target.value.toUpperCase())
                        }
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 ml-10 sm:col-span-3">
                <label
                  htmlFor="type"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Type
                </label>
                <div className="mt-2">
                  <select
                    id="type"
                    name="type"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:max-w-xs sm:text-sm sm:leading-6"
                    required
                  >
                    <option value="">Select transaction type</option>
                    <option value="Sell">Sell</option>
                    <option value="Buy">Buy</option>
                  </select>
                </div>
              </div>

              <div className="mt-5 ml-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="date"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Date
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500 sm:max-w-md">
                      <input
                        type="date"
                        name="date"
                        id="date"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0  sm:text-sm   sm:leading-6"
                        placeholder="dd/mm/yyyy"
                        defaultValue={getTodayDate()}
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 ml-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="quantity"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Quantity
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500 sm:max-w-md">
                      <input
                        type="number"
                        name="quantity"
                        id="quantity"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0  sm:text-sm   sm:leading-6"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 ml-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="pricepershare"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Price / Share
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset     focus-within:ring-blue-500 sm:max-w-md">
                      <input
                        type="number"
                        name="pricepershare"
                        id="pricepershare"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0  sm:text-sm   sm:leading-6"
                        step="0.01"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 ml-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="fees"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Transaction Fees
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500 sm:max-w-md">
                      <input
                        type="number"
                        name="fees"
                        id="fees"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        step="0.01"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mx-10 mt-5 mcol-span-full">
                <label
                  htmlFor="notes"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Notes
                </label>
                <div className="mt-2">
                  <textarea
                    id="notes"
                    name="notes"
                    rows={3}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Elaborate how you make your decision.
                </p>
              </div>

              <div className="my-6 mr-10 flex items-center justify-end gap-x-6">
                <button
                  type="button"
                  className="rounded-md text-sm px-3 py-2 font-semibold leading-6 text-gray-900 hover:bg-gray-300 hover:border hover:border-black"
                  onClick={toggleModal}
                >
                  Cancel
                </button>
                <button className="rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

function TransactionTable({
  transactionItems,
  appliedFilters,
  fromDate,
  toDate,
  searchQuery,
}) {
  const [sortedItems, setSortedItems] = useState(transactionItems);
  const [sortConfig, setSortConfig] = useState({
    Date: "ascending",
    Type: null,
    Ticker: null,
    Quantity: null,
    PricePerShare: null,
    Fees: null,
  });

  // Function to update a property in the dictionary
  const updateDictionary = (key, value) => {
    const updatedDictionary = { ...sortConfig };
    updatedDictionary[key] = value;
    setSortConfig(updatedDictionary);
  };

  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig[key] === "ascending") {
      direction = "descending";
    }
    const sorted = [...sortedItems].sort((a, b) => {
      let comparison = 0;
      if (key === "Date") {
        comparison = new Date(a[key]) - new Date(b[key]);
      } else {
        comparison = a[key] < b[key] ? -1 : a[key] > b[key] ? 1 : 0;
      }
      return direction === "descending" ? comparison * -1 : comparison;
    });
    setSortedItems(sorted);
    // setSortConfig({ key, direction });
    setSortConfig({
      Date: null,
      Type: null,
      Ticker: null,
      Quantity: null,
      PricePerShare: null,
      Fees: null,
    });
    updateDictionary(key, direction);
  };

  useEffect(() => {
    requestSort("Date");
  }, []);

  useEffect(() => {
    const filteredItems = transactionItems.filter((item) =>
      item.Ticker.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSortedItems(filteredItems);
  }, [searchQuery, transactionItems]);

  return (
    <div className="overflow-x-auto flex flex-1 mx-3 shadow-md sm:rounded-lg">
      <table className="table-auto w-full text-sm text-right rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {/* <th className="px-1 py-3 hover:text-white cursor-pointer" onClick={() => requestSort('Type')}>Type</th>
            <th className="px-1 py-3 hover:text-white cursor-pointer" onClick={() => requestSort('Ticker')}>Ticker</th>
            <th className="px-1 py-3 hover:text-white cursor-pointer" onClick={() => requestSort('Date')}>Date</th>
            <th className="px-1 py-3 hover:text-white cursor-pointer" onClick={() => requestSort('Quantity')}>Quantity</th>
            <th className="px-1 py-3 hover:text-white cursor-pointer" onClick={() => requestSort('PricePerShare')}>Price / Share</th>
            <th className="px-1 py-3 hover:text-white cursor-pointer" onClick={() => requestSort('Fees')}>Fees</th> */}
            <th
              className="px-1 py-3 hover:text-black cursor-pointer"
              onClick={() => requestSort("Date")}
            >
              Date{" "}
              {sortConfig["Date"] === null ? (
                ""
              ) : sortConfig["Date"] === "ascending" ? (
                <FaArrowUp className="w-4 h-4 inline-block mx-1 mb-1" />
              ) : (
                <FaArrowDown className="w-4 h-4 inline-block mx-1 mb-1" />
              )}
            </th>
            <th
              className="px-1 py-3 hover:text-black cursor-pointer text-center"
              onClick={() => requestSort("Type")}
            >
              Type{" "}
              {sortConfig["Type"] === null ? (
                ""
              ) : sortConfig["Type"] === "ascending" ? (
                <FaArrowUp className="w-4 h-4 inline-block mx-1 mb-1" />
              ) : (
                <FaArrowDown className="w-4 h-4 inline-block mx-1 mb-1" />
              )}
            </th>
            <th
              className="px-1 py-3 hover:text-black cursor-pointer"
              onClick={() => requestSort("Ticker")}
            >
              Ticker{" "}
              {sortConfig["Ticker"] === null ? (
                ""
              ) : sortConfig["Ticker"] === "ascending" ? (
                <FaArrowUp className="w-4 h-4 inline-block mx-1 mb-1" />
              ) : (
                <FaArrowDown className="w-4 h-4 inline-block mx-1 mb-1" />
              )}
            </th>
            <th
              className="px-1 py-3 hover:text-black cursor-pointer"
              onClick={() => requestSort("Quantity")}
            >
              Quantity{" "}
              {sortConfig["Quantity"] === null ? (
                ""
              ) : sortConfig["Quantity"] === "ascending" ? (
                <FaArrowUp className="w-4 h-4 inline-block mx-1 mb-1" />
              ) : (
                <FaArrowDown className="w-4 h-4 inline-block mx-1 mb-1" />
              )}
            </th>
            <th
              className="px-1 py-3 hover:text-black cursor-pointer"
              onClick={() => requestSort("PricePerShare")}
            >
              Price / Share{" "}
              {sortConfig["PricePerShare"] === null ? (
                ""
              ) : sortConfig["PricePerShare"] === "ascending" ? (
                <FaArrowUp className="w-4 h-4 inline-block mx-1 mb-1" />
              ) : (
                <FaArrowDown className="w-4 h-4 inline-block mx-1 mb-1" />
              )}
            </th>
            <th
              className="px-1 py-3 hover:text-black cursor-pointer"
              onClick={() => requestSort("Fees")}
            >
              Fees{" "}
              {sortConfig["Fees"] === null ? (
                ""
              ) : sortConfig["Fees"] === "ascending" ? (
                <FaArrowUp className="w-4 h-4 inline-block mx-1 mb-1" />
              ) : (
                <FaArrowDown className="w-4 h-4 inline-block mx-1 mb-1" />
              )}
            </th>
            <th className="px-1 py-3">Notes</th>
            <th className="px-1 py-3 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {sortedItems.map((item, index) => (
            <tr>
              <td className="py-2">{item.Date}</td>
              <td className="py-2">{item.Type}</td>
              <td className="py-2">{item.Ticker}</td>
              <td className="py-2">{item.Quantity}</td>
              <td className="py-2">{item.PricePerShare}</td>
              <td className="py-2">{item.Fees}</td>
              <td className="py-2">
                <div className="overflow-hidden">{item.Notes}</div>
              </td>
              <td className="px-1 flex py-2 justify-center space-x-3">
                <button
                  onClick={() => console.log("Edit")}
                  className="p-2 text-primary hover:text-blue-600 focus:ring-blue-500"
                >
                  <FaEdit className="text-2xl" />
                </button>
                <button
                  onClick={() => console.log("Delete")}
                  className="p-2 text-red-600 hover:text-red-500"
                >
                  <FaTrash className="text-2xl" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Ticker Price Change % Holdings Realized P/L Unrealized P/L
function WatchlistTable({
  watchlistItems,
  appliedFilters,
  fromDate,
  toDate,
  searchQuery,
}) {
  const [sortedItems, setSortedItems] = useState(watchlistItems);
  const [sortConfig, setSortConfig] = useState({
    Ticker: null,
    Price: null,
    Holdings: null,
    RealizedPL: null,
    UnrealizedPL: null,
  });

  // Function to update a property in the dictionary
  const updateDictionary = (key, value) => {
    const updatedDictionary = { ...sortConfig };
    updatedDictionary[key] = value;
    setSortConfig(updatedDictionary);
  };

  const requestSort = (key) => {
    let direction = "ascending";
    // if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
    if (sortConfig[key] === "ascending") {
      direction = "descending";
    }
    const sorted = [...sortedItems].sort((a, b) => {
      let comparison = 0;
      if (key === "Ticker") {
        comparison = a[key].localeCompare(b[key]);
      } else if (key === "RealizedPL" || key === "UnrealizedPL") {
        comparison = a[key].amount - b[key].amount;
      } else {
        comparison = a[key] - b[key];
      }
      return direction === "descending" ? comparison * -1 : comparison;
    });
    setSortedItems(sorted);
    setSortConfig({
      Ticker: null,
      Price: null,
      Holdings: null,
      RealizedPL: null,
      UnrealizedPL: null,
    });
    updateDictionary(key, direction);
  };

  useEffect(() => {
    requestSort("Ticker");
  }, []);

  useEffect(() => {
    const filteredItems = watchlistItems.filter((item) =>
      item.Ticker.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSortedItems(filteredItems);
  }, [searchQuery, watchlistItems]);

  return (
    <div className="overflow-x-auto flex flex-1 mx-3 shadow-md sm:rounded-lg">
      <table className="table-auto w-full text-sm text-right rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          {/* <tr>
            <th className="px-1 py-3 hover:text-white cursor-pointer" onClick={() => requestSort('Ticker')}>Ticker</th>
            <th className="px-1 py-3 hover:text-white cursor-pointer" onClick={() => requestSort('Price')}>Price</th>
            <th className="px-1 py-3 hover:text-white cursor-pointer" onClick={() => requestSort('Holdings')}>Holdings</th>
            <th className="px-1 py-3 hover:text-white cursor-pointer" onClick={() => requestSort('RealizedPL')}>Realized P/L</th>
            <th className="px-1 py-3 hover:text-white cursor-pointer" onClick={() => requestSort('UnrealizedPL')}>Unrealized P/L</th>
            <th className="px-1 py-3 text-center">Action</th>
          </tr> */}
          <tr>
            <th
              className="px-1 py-3 hover:text-black cursor-pointer text-center"
              onClick={() => requestSort("Ticker")}
            >
              Ticker{" "}
              {sortConfig["Ticker"] === null ? (
                ""
              ) : sortConfig["Ticker"] === "ascending" ? (
                <FaArrowUp className="w-4 h-4 inline-block mx-1 mb-1" />
              ) : (
                <FaArrowDown className="w-4 h-4 inline-block mx-1 mb-1" />
              )}
            </th>
            <th
              className="px-1 py-3 hover:text-black cursor-pointer"
              onClick={() => requestSort("Price")}
            >
              Price{" "}
              {sortConfig["Price"] === null ? (
                ""
              ) : sortConfig["Price"] === "ascending" ? (
                <FaArrowUp className="w-4 h-4 inline-block mx-1 mb-1" />
              ) : (
                <FaArrowDown className="w-4 h-4 inline-block mx-1 mb-1" />
              )}
            </th>
            <th
              className="px-1 py-3 hover:text-black cursor-pointer"
              onClick={() => requestSort("Holdings")}
            >
              Holdings{" "}
              {sortConfig["Holdings"] === null ? (
                ""
              ) : sortConfig["Holdings"] === "ascending" ? (
                <FaArrowUp className="w-4 h-4 inline-block mx-1 mb-1" />
              ) : (
                <FaArrowDown className="w-4 h-4 inline-block mx-1 mb-1" />
              )}
            </th>
            <th
              className="px-1 py-3 hover:text-black cursor-pointer"
              onClick={() => requestSort("RealizedPL")}
            >
              Realized P/L{" "}
              {sortConfig["RealizedPL"] === null ? (
                ""
              ) : sortConfig["RealizedPL"] === "ascending" ? (
                <FaArrowUp className="w-4 h-4 inline-block mx-1 mb-1" />
              ) : (
                <FaArrowDown className="w-4 h-4 inline-block mx-1 mb-1" />
              )}
            </th>
            <th
              className="px-1 py-3 hover:text-black cursor-pointer"
              onClick={() => requestSort("UnrealizedPL")}
            >
              Unrealized P/L{" "}
              {sortConfig["UnrealizedPL"] === null ? (
                ""
              ) : sortConfig["UnrealizedPL"] === "ascending" ? (
                <FaArrowUp className="w-4 h-4 inline-block mx-1 mb-1" />
              ) : (
                <FaArrowDown className="w-4 h-4 inline-block mx-1 mb-1" />
              )}
            </th>
            <th className="px-1 py-3 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {sortedItems.map((item, index) => (
            <tr>
              <td className="py-2 text-center">{item.Ticker}</td>
              <td className="py-2">{item.Price}</td>
              <td className="py-2">
                <div className="whitespace-nowrap">{item.Holdings}</div>
                <div className="text-xs">{item.Shares}</div>
              </td>
              <td className="py-2">{`${item.RealizedPL.amount} (${item.RealizedPL.percentage}%)`}</td>
              <td className="py-2">{`${item.UnrealizedPL.amount} (${item.UnrealizedPL.percentage}%)`}</td>
              <td className="px-1 flex py-2 justify-center space-x-3">
                <button
                  onClick={() => console.log("Add Transaction")}
                  className="p-2 text-primary hover:text-blue-600 focus:ring-blue-500"
                >
                  <FaPlus className="text-2xl" />
                </button>
                <button
                  onClick={() => console.log("Delete")}
                  className="p-2 text-red-600 hover:text-red-500"
                >
                  <FaTrash className="text-2xl" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const Portfolio = () => {
  const dashboardData = {
    totalPnL: 10000,
    totalPnLPercentage: 10,
    unrealisedPnL: 20000,
    unrealisedPnLPercentage: 20,
  };

  const portfolioValue = 100000;

  const getPnLColor = (value) => {
    if (value > 0) return "text-green-500";
    if (value < 0) return "text-red-500";
    return "text-black";
  };

  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  // useStates
  const [watchlistItems, setWatchlistItems] = useState(oriWatchlistItems);
  const addWatchlist = (newItem) => {
    setWatchlistItems((prevItems) => [...prevItems, newItem]);
  };
  const editWatchlist = (index, updatedItem) => {
    setWatchlistItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems[index] = updatedItem;
      return updatedItems;
    });
  };
  const removeWatchlist = (index) => {
    setWatchlistItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems.splice(index, 1);
      return updatedItems;
    });
  };

  const [transactionItems, setTransactionItems] = useState(oriTransactionItems);
  const addTransaction = (newItem) => {
    setTransactionItems((prevItems) => [...prevItems, newItem]);
    console.log(transactionItems);
  };
  const editTransaction = (index, updatedItem) => {
    setTransactionItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems[index] = updatedItem;
      return updatedItems;
    });
  };
  const removeTransaction = (index) => {
    setWatchlistItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems.splice(index, 1);
      return updatedItems;
    });
  };

  // watchlist type of filters: apply filter or search
  const [filteredWatchlist, setFilteredWatchlist] = useState([]);

  // transaction type of filters: apply filter, date range or search
  const [filteredTransaction, setFilteredTransaction] = useState([]);

  // From To Date Range
  const [fromDate, setFromDate] = useState("2000-01-01");
  const [toDate, setToDate] = useState(getTodayDate());

  useEffect(() => {
    filterByDateRange();
  }, [fromDate, toDate]);

  const handleDateChange = (date, variation) => {
    if (variation === "from") {
      setFromDate(date);
    } else {
      setToDate(date);
    }
    filterByDateRange();
  };
  const filterByDateRange = () => {
    console.log("fromDate: ", fromDate);
    console.log("toDate: ", toDate);
    const transactionInRange = transactionItems.filter((item) => {
      const [day, month, year] = item.Date.split("/");
      const itemDate = new Date(`${year}-${month}-${day}`);
      const yyyy = itemDate.getFullYear();
      const mm = String(itemDate.getMonth() + 1).padStart(2, "0");
      const dd = String(itemDate.getDate()).padStart(2, "0");
      const formattedDate = `${yyyy}-${mm}-${dd}`;
      console.log("Item Date:", formattedDate);
      return formattedDate >= fromDate && formattedDate <= toDate;
    });
    console.log("Transaction in Range:", transactionInRange);
    setFilteredTransaction(transactionInRange);
  };

  // Search Bar
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const [optionsState, setOptionsState] = useState(filterOptions);
  const handleCheckboxChange = (id) => {
    setOptionsState((prevOptions) =>
      prevOptions.map((option) =>
        option.id === id ? { ...option, checked: !option.checked } : option
      )
    );
  };
  const handleDeleteFilter = (id) => {
    setOptionsState((prevOptions) =>
      prevOptions.map((option) =>
        option.id === id ? { ...option, checked: false } : option
      )
    );
  };

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
            <h2 className="text-sm font-semibold whitespace-nowrap">
              Total Market Value
            </h2>
            <p className="text-lg whitespace-nowrap">
              MYR {portfolioValue.toFixed(2) || "0.00"}
            </p>
          </div>
          <div className="p-5 m-2 text-center w-auto h-auto bg-white rounded-lg shadow-md">
            <h2 className="text-sm font-semibold whitespace-nowrap">
              Total Realized P/L
            </h2>
            <p
              className={`text-lg whitespace-nowrap ${getPnLColor(
                dashboardData.totalPnL || 0
              )}`}
            >
              MYR{" "}
              {dashboardData.totalPnL
                ? dashboardData.totalPnL.toFixed(2)
                : "0.00"}
            </p>
            {!isNaN(dashboardData.totalPnLPercentage) && (
              <span className="text-xs text-gray-600">
                ({dashboardData.totalPnLPercentage.toFixed(2)}%)
              </span>
            )}
          </div>
          <div className="p-5 m-2 text-center w-auto h-auto bg-white rounded-lg shadow-md">
            <h2 className="text-sm font-semibold whitespace-nowrap">
              Total Unrealized P/L
            </h2>
            <p
              className={`text-lg whitespace-nowrap ${getPnLColor(
                dashboardData.unrealisedPnL || 0
              )}`}
            >
              MYR{" "}
              {dashboardData.unrealisedPnL
                ? dashboardData.unrealisedPnL.toFixed(2)
                : "0.00"}
            </p>
            <span className="text-xs text-gray-600">
              (
              {typeof dashboardData.unrealisedPnLPercentage === "number"
                ? dashboardData.unrealisedPnLPercentage.toFixed(2)
                : "0.00"}
              %)
            </span>
          </div>
        </div>

        <div className="flex items-center md:justify-between md:mx-5 py-4 md:p-4">
          <FilterButton
            optionsState={optionsState}
            handleCheckboxChange={handleCheckboxChange}
          />
          <div className="hidden md:block" />
          {transactionActive && (
            <div className="flex items-center space-x-5">
              <DateSelector
                variation="from"
                handleDateChange={handleDateChange}
              />
              <span className="mx-2"> - </span>
              <DateSelector
                variation="to"
                handleDateChange={handleDateChange}
              />
            </div>
          )}
        </div>

        <div className="ml-5 mb-3 flex items-center">
          <span className="mr-3">Applied Filters:</span>
          {optionsState.filter((option) => option.checked).length > 0 ? (
            optionsState
              .filter((option) => option.checked)
              .map((option) => (
                <AppliedFilter
                  key={option.id}
                  ticker={option.ticker}
                  handleDeleteFilter={() => handleDeleteFilter(option.id)}
                />
              ))
          ) : (
            <AppliedFilter />
          )}
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
              className="relative flex"
              data-twe-input-wrapper-init
              data-twe-input-group-ref
            >
              <input
                type="search"
                className="peer block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary border-gray-300"
                placeholder="Search"
                aria-label="Search"
                id="exampleFormControlInput"
                value={inputValue}
                onChange={handleInputChange}
                aria-describedby="basic-addon1"
              />
              <button
                className="relative z-[2] -ms-0.5 flex items-center rounded-e bg-primary px-5  text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                type="button"
                id="button-addon1"
                data-twe-ripple-init
                data-twe-ripple-color="light"
              >
                <span className="[&>svg]:h-5 [&>svg]:w-5">
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                </span>
              </button>
            </div>
            {watchlistActive && (
              <AddStockButton handleAddStock={addWatchlist} />
            )}
            {transactionActive && (
              <AddTransactionButton handleAddTransaction={addTransaction} />
            )}
          </div>
        </div>

        {watchlistActive && (
          <WatchlistTable
            watchlistItems={filteredWatchlist}
            searchQuery={inputValue}
          />
        )}
        {transactionActive && (
          <TransactionTable
            transactionItems={filteredTransaction}
            searchQuery={inputValue}
          />
        )}
      </div>
    </div>
  );
};

export default Portfolio;
