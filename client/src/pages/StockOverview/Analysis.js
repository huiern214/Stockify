import {DisplayAnalysisChart} from './ChartGenerator';
import {useState,useEffect} from 'react'
import { Checkbox } from 'antd';
import {ReactComponent as CancelIcon} from '../../assets/circle-xmark.svg'
import {ReactComponent as PlusIcon} from '../../assets/plusIcon.svg'

function Analysis(){
    const labels = [
    "01/01", "02/01", "03/01", "04/01", "05/01","06/01","07/01","08/01","09/01","10/01",
    "11/01", "12/01", "13/01", "14/01", "15/01", "16/01","17/01","18/01","19/01","20/01",
    "21/01", "22/01", "23/01", "24/01", "25/01", "26/01","27/01","28/01","29/01","30/01",
    "01/01", "02/01", "03/01", "04/01", "05/01","06/01","07/01","08/01","09/01","10/01",
    "11/01", "12/01", "13/01", "14/01", "15/01", "16/01","17/01","18/01","19/01","20/01",
    "21/01", "22/01", "23/01", "24/01", "25/01", "26/01","27/01","28/01","29/01","30/01",
    "01/01", "02/01", "03/01", "04/01", "05/01","06/01","07/01","08/01","09/01","10/01",
    "11/01", "12/01", "13/01", "14/01", "15/01", "16/01","17/01","18/01","19/01","20/01",
    "21/01", "22/01", "23/01", "24/01", "25/01", "26/01","27/01","28/01","29/01","30/01",
  ]
    const data = {
    labels: labels,
    datasets: [
      {
        label: "TSLA", // Setting up the label for the dataset
        backgroundColor: "rgb(128,0,128)", // Setting up the background color for the dataset
        borderColor: 	"rgb(128,0,128)", // Setting up the border color for the dataset
        data: [
          10, 10, 5, 2, 2, 3, 5,4,7,8,
          10, 10, 5, 2, 0, 3, 5,4,6,9,
          10, 10, 5, 2, 0, 3, 5,4,7,8,
          10, 10, 5, 2, 0, 3, 5,4,7,9,
          10, 10, 5, 2, 2, 3, 5,4,7,9,
          10, 10, 5, 2, 2, 3, 5,4,7,9,
          10, 10, 5, 2, 0, 3, 5,4,7,8,
          10, 10, 5, 2, 0, 3, 5,4,7,8,
          10, 10, 5, 2, 0, 3, 5,4,7,8,
          ], // Setting up the data for the dataset
        pointStyle: 'none',
        pointRadius: 0,
      },
      // {
      //   label: "AAPL", // Setting up the label for the dataset
      //   backgroundColor: "rgb(0, 0, 255)", // Setting up the background color for the dataset
      //   borderColor: "rgb(0, 0, 255)", // Setting up the border color for the dataset
      //   data: [
      //     23, 4, 5, 23, 43,15, 34, 12,22,26,
      //     23, 4, 5, 23, 43,15, 34, 12,22,26,
      //     23, 4, 5, 23, 43,15, 34, 12,22,26,
      //     23, 4, 5, 23, 43,15, 34, 12,22,26,
      //     23, 4, 5, 23, 43,15, 34, 12,22,26,
      //     23, 4, 5, 23, 43,15, 34, 12,22,26,
      //     23, 4, 5, 23, 43,15, 34, 12,22,26,
      //     23, 4, 5, 23, 43,15, 34, 12,22,26,
      //     23, 4, 5, 23, 43,15, 34, 12,22,26,
      //   ], 
      //   pointStyle: 'none',
      //   pointRadius: 0
      // },
      // {
      //   label: "AMZN", // Setting up the label for the dataset
      //   backgroundColor: "rgb(255, 165, 0)", // Setting up the background color for the dataset
      //   borderColor: "rgb(255, 165, 0)", // Setting up the border color for the dataset
      //   data: [
      //     12, 32, 34, 43, 23,12, 18, 22,34,10,
      //     12, 32, 34, 43, 23,12, 18, 22,34,10,
      //     12, 32, 34, 43, 23,12, 18, 22,34,10,
      //     12, 32, 34, 43, 23,12, 18, 22,34,10,
      //     12, 32, 34, 43, 23,12, 18, 22,34,10,
      //     12, 32, 34, 43, 23,12, 18, 22,34,10,
      //     12, 32, 34, 43, 23,12, 18, 22,34,10,
      //     12, 32, 34, 43, 23,12, 18, 22,34,10,
      //     12, 32, 34, 43, 23,12, 18, 22,34,10,
      //   ], // Setting up the data for the dataset
      //   pointStyle: 'none',
      //   pointRadius: 0
      // },
    ],
  };
  const options = {
    maintainAspectRatio: false,
    scales:{
      x:{
        grid:{
          display:true
        }
      },
      y:{
        grid:{
         display:true
        }
      },
    },
    plugins: {
      title: {
        display: false // Hides the title
      },
      legend:{
        display:false,
      }
    }
  };

  const [buyChecked,setBuyChecked]=useState(false);
  const [sellChecked,setSellChecked]=useState(false);
  const [chartData,setChartData]=useState(data);

  const handleBuyChange=(event)=>{
    setBuyChecked(event.target.checked);
  }

  const handleSellChange=(event)=>{
    setSellChecked(event.target.checked);
  }

  const updateChartData=()=>{
    let newData={...chartData};
    for(let i=0;i<newData.datasets.length;i++){
      if (!newData.datasets[i].pointBackgroundColor){
        newData.datasets[i].pointBackgroundColor=Array(newData.datasets[i].data.length).fill("rgb(128,0,128)");
      }
      if (!newData.datasets[i].pointRadius){
        newData.datasets[i].pointRadius=Array(newData.datasets[i].data.length).fill(0);
      }
  
      if(buyChecked){
        newData.datasets[i].data.forEach((value, index) => {
          // If the data point is lower than 30, update its color and value
          if (value < 3) {
            newData.datasets[i].pointBackgroundColor[index]= 'rgb(0,255,0)';
            newData.datasets[i].pointRadius[index]= 3;
          }
        });
      }
      else{
        newData.datasets[i].data.forEach((value, index) => {
          // If the data point is lower than 30, update its color and value
          if (value < 3) {
            newData.datasets[i].pointBackgroundColor[index]= 'rgb(0,255,0)';
            newData.datasets[i].pointRadius[index]= 0;
          }
        });
      }
      if(sellChecked){
        newData.datasets[i].data.forEach((value, index) => {
          // If the data point is lower than 30, update its color and value
          if (value > 6) {
            newData.datasets[i].pointBackgroundColor[index]= 'rgb(255,0,0)';
            newData.datasets[i].pointRadius[index]= 3;
          }
        });
      }
      else{
        newData.datasets[i].data.forEach((value, index) => {
          // If the data point is lower than 30, update its color and value
          if (value > 6) {
            newData.datasets[i].pointBackgroundColor[index]= 'rgb(255,0,0)';
            newData.datasets[i].pointRadius[index]= 0;
          }
        });
      }
    }

    setChartData(newData);
  }

  useEffect(()=>{
    updateChartData();
  },[buyChecked,sellChecked]);

  return(
        <div className='mb-10'>
            <h2 className='text-2xl font-bold text-left mt-2 mb-2 text-black'>Analysis</h2>
            <div className='flex flex-col md:flex-row w-full md:h-96 mt-2'>  
                <div id="options" className='flex m-3 md:ml-0 md:w-1/3 h-full border rounded-lg'>
                  <div className="flex flex-col w-full h-full">
                      <div className="flex flex-col w-full h-1/2 pt-5 pl-5">
                        <h2 className="mb-1 text-xl font-bold text-gray-700">Compare with</h2>
                        <div>
                          <CompareStock chartData={chartData} setChartData={setChartData}/>
                        </div>
                      </div>
                      <div className="flex flex-col w-full h-1/2 pt-5 pl-5">
                        <h2 className="mb-1 text-xl font-bold text-gray-700">Trading signal</h2>
                          <Checkbox className="my-1 pl-4" checked={buyChecked} onChange={handleBuyChange}>Buy</Checkbox>
                          <Checkbox className="my-1 pl-4"checked={sellChecked} onChange={handleSellChange}>Sell</Checkbox>
                      </div>
                    
                  </div>
                </div>
                <div id="graph" className='flex m-3 md:ml-0 justify-end md:w-2/3 h-full border rounded-lg'>
                    <DisplayAnalysisChart data={chartData} options={options} chartID='chart1'/>
                </div>
              
            </div>   
        </div>
    );
}


function CompareStock({chartData,setChartData}){
  const stockDataAtCapitalMarket=[//will fetch api here
          {
        label: "AAPL", // Setting up the label for the dataset
        backgroundColor: "rgb(0, 0, 255)", // Setting up the background color for the dataset
        borderColor: "rgb(0, 0, 255)", // Setting up the border color for the dataset
        data: [
          23, 4, 5, 23, 43,15, 34, 12,22,26,
          23, 4, 5, 23, 43,15, 34, 12,22,26,
          23, 4, 5, 23, 43,15, 34, 12,22,26,
          23, 4, 5, 23, 43,15, 34, 12,22,26,
          23, 4, 5, 23, 43,15, 34, 12,22,26,
          23, 4, 5, 23, 43,15, 34, 12,22,26,
          23, 4, 5, 23, 43,15, 34, 12,22,26,
          23, 4, 5, 23, 43,15, 34, 12,22,26,
          23, 4, 5, 23, 43,15, 34, 12,22,26,
        ], 
        pointStyle: 'none',
        pointRadius: 0
      },
      {
        label: "AMZN", // Setting up the label for the dataset
        backgroundColor: "rgb(255, 165, 0)", // Setting up the background color for the dataset
        borderColor: "rgb(255, 165, 0)", // Setting up the border color for the dataset
        data: [
          12, 32, 34, 43, 23,12, 18, 22,34,10,
          12, 32, 34, 43, 23,12, 18, 22,34,10,
          12, 32, 34, 43, 23,12, 18, 22,34,10,
          12, 32, 34, 43, 23,12, 18, 22,34,10,
          12, 32, 34, 43, 23,12, 18, 22,34,10,
          12, 32, 34, 43, 23,12, 18, 22,34,10,
          12, 32, 34, 43, 23,12, 18, 22,34,10,
          12, 32, 34, 43, 23,12, 18, 22,34,10,
          12, 32, 34, 43, 23,12, 18, 22,34,10,
        ], // Setting up the data for the dataset
        pointStyle: 'none',
        pointRadius: 0
      },
  ]
  const [showInput,setShowInput]=useState(false);
  const [stockName,setStockName]=useState('');
  const [stocks,setStocks]=useState([]);
  const colors=['#0000FF', '#FFA500']

  const AddStockListener=()=>{
    setShowInput(true);  
  }

  const SubmitStockName=()=>{
    setShowInput(false);
    const newStock={
      "name":stockName
    }
    setStocks([...stocks,newStock])
    let stockToCompared=newStock.name
    for(let i=0;i<stockDataAtCapitalMarket.length;i++){
      if(stockToCompared===stockDataAtCapitalMarket[i].label){
        let newChartData={
          ...chartData,datasets:[...chartData.datasets,stockDataAtCapitalMarket[i]]
        }
        setChartData(newChartData);
      }
    }
  }

  const HandleStockNameChange=(e)=>{
    setStockName(e.target.value);
  }

  const removeStock = (stockToRemove) => {
    const stockNameToBeRemoved=stockToRemove.name;
    const updatedStocks = stocks.filter(stock => stock !== stockToRemove);
    setStocks(updatedStocks);

    const updatedDatasets=chartData.datasets.filter(dataset=>dataset.label!==stockNameToBeRemoved)
    const newChartData={
      ...chartData,datasets:updatedDatasets
    };
    setChartData(newChartData)
  }


  return(
    <div className="flex flex-col w-full h-full">
    {stocks.map((stock, index) => (
        <SingleStockToBeCompared stock={stock} color={colors[index]}  removeStock={() => removeStock(stock)}/>
      ))}
      {stocks.length<=1 && (
        <div className="flex w-full h-full ml-4 my-1" >
          {showInput?(
            <div className="flex w-full h-full">
              <PlusIcon className="w-3 h-6 mr-2" style={{fill:'#9E9E9E'}} onClick={SubmitStockName}/>
              <input className="w-content text-gray-500"type='text' placeholder="Enter stock's name" onChange={HandleStockNameChange}></input>
            </div>
  
          ):(
            <button className="flex w-full h-full" onClick={AddStockListener}>
              <PlusIcon className="w-3 h-6 mr-2" style={{fill:'#9E9E9E'}}/>
              <div className="text-gray-500">Add stock</div>
            </button>

          )}
        </div>
      )}
    </div>
  )
};

const SingleStockToBeCompared=({stock,color,removeStock})=>{
  return(
    <div className="flex items-center h-6 w-full pl-4 my-1">
      <div className="flex h-full items-center w-3 bullet-point text-4xl mb-1 mr-2" style={{color:color}}>&#8226;</div>
      <div className="flex h-full w-fit text-gray-500 mr-4">{stock.name }</div>
      <button className="flex h-full w-full" onClick={removeStock}>
        <CancelIcon className="flex h-4/6 w-fit items-center mt-1"/>
      </button>

    </div>
  )
}



export default Analysis