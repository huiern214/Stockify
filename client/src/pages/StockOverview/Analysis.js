import {DisplayAnalysisChart} from './ChartGenerator';
import {useState,useEffect} from 'react'
import { Checkbox } from 'antd';
import {ReactComponent as CancelIcon} from '../../assets/circle-xmark.svg'
import {ReactComponent as PlusIcon} from '../../assets/plusIcon.svg'
import axios from 'axios';

function Analysis(){
  const [dataFetched,setDataFetched]=useState(null);
  const options = {
    animation:{
        duration:1000,
        delay:0,

    },
    maintainAspectRatio: false,
    scales:{
        x:{
            display:false,
            grid:{
                 display:true
            }
        },
        y:{
            display:true,
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

  const handleBuyChange=(event)=>{
    setBuyChecked(event.target.checked);
  }

  const handleSellChange=(event)=>{
    setSellChecked(event.target.checked);
  }
  const [interval,setInterval]=useState('1hour');
  const [period,setPeriod]=useState(30);
  const [stockSymbol,setStockSymbol]=useState('TSLA');

  const fetchStockData=async()=>{
      let toDate=new Date();
      let fromDate=new Date(toDate);
      fromDate.setDate(fromDate.getDate()-period)

      let fromDateStr = fromDate.toISOString().slice(0, 10);
      let toDateStr = toDate.toISOString().slice(0, 10);
      try{
          console.log("fromDateStr",fromDateStr)
          console.log("toDateStr",toDateStr)
          const response=await axios.get('https://financialmodelingprep.com/api/v3/historical-chart/'+interval+'/'+stockSymbol+'?from='+fromDateStr+'&to='+toDateStr+'&apikey=2KvOgizGltQa3cyNGbcRHVAiLf0ePkSv');
          const symbol="TSLA";
          const data=response.data.reverse();
          const dates = data.map(entry => entry.date);
          const prices = data.map(entry => entry.close);
          return({ labels: dates, datasets: [{ label:symbol,backgroundColor: "rgb(255, 99, 132)", // Setting up the background color for the dataset
          borderColor: "rgb(255, 99, 132)", data: prices,pointStyle: 'none',pointRadius: 0}] })
    
      }catch(error){
        console.error('Error fetching stock data:',error);
        return null;
      }
    };

    useEffect(() => {
      const fetchData = async () => {
          const hold = await fetchStockData();
          setDataFetched(hold);
      };
      fetchData();
      return () => {
        setDataFetched(null); // Clear chart data
      };
    }, []);

    const updateChartDataProperty=()=>{
      let newData={...dataFetched};
      if(newData!==null&& newData.datasets){
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
              if (value < 170) {
                newData.datasets[i].pointBackgroundColor[index]= 'rgb(0,255,0)';
                newData.datasets[i].pointRadius[index]= 3;
              }
            });
          }
          else{
            newData.datasets[i].data.forEach((value, index) => {
              // If the data point is lower than 30, update its color and value
              if (value < 170) {
                newData.datasets[i].pointBackgroundColor[index]= 'rgb(0,255,0)';
                newData.datasets[i].pointRadius[index]= 0;
              }
            });
          }
          if(sellChecked){
            newData.datasets[i].data.forEach((value, index) => {
              // If the data point is lower than 30, update its color and value
              if (value > 200) {
                newData.datasets[i].pointBackgroundColor[index]= 'rgb(255,0,0)';
                newData.datasets[i].pointRadius[index]= 3;
              }
            });
          }
          else{
            newData.datasets[i].data.forEach((value, index) => {
              // If the data point is lower than 30, update its color and value
              if (value > 200) {
                newData.datasets[i].pointBackgroundColor[index]= 'rgb(255,0,0)';
                newData.datasets[i].pointRadius[index]= 0;
              }
            });
          }
        }
      }
      setDataFetched(newData);//update the data with latest property in the line chart
    }

    useEffect(()=>{
      updateChartDataProperty();
    },[buyChecked,sellChecked]);


  return(
        <div className='mb-10'>
            <h2 className='text-2xl font-bold text-left mt-2 mb-2 text-black'>Analysis</h2>
            <div className='flex flex-col md:flex-row w-full md:h-96 mt-2'>  
                <div id="options" className='flex m-3 md:ml-0 md:w-1/3 h-full border rounded-lg'>
                  <div className="flex flex-col w-full h-full">
                      <div className="flex flex-col w-full h-1/2 pt-3 pl-5">
                        <h2 className="mb-1 text-xl font-bold text-gray-700">Compare with</h2>
                        <div>
                          <CompareStock dataFetched={dataFetched} setDataFetched={setDataFetched} buyChecked={buyChecked} sellChecked={sellChecked} period={period} interval={interval}/>
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
                    {dataFetched&&<DisplayAnalysisChart data={dataFetched} options={options} chartID='chart1' period={period} setPeriod={setPeriod}/>}
                </div>
              
            </div>   
        </div>
    );
}


function CompareStock({dataFetched,setDataFetched,buyChecked,sellChecked,period,interval}){

    const [showInput,setShowInput]=useState(false);
    const [stockName,setStockName]=useState(null);
    const [stocks,setStocks]=useState([]);
    const [isFetchDataset,setIsFetchDataset]=useState(false);
    const [currentColor,setCurrentColor]=useState('rgb(0,0,255)');
    const colors=['#0000FF', '#FFA500']

  const fetchStockData=async(stockSymbol)=>{
    let toDate=new Date();
    let fromDate=new Date(toDate);
    fromDate.setDate(fromDate.getDate()-period)

    let fromDateStr = fromDate.toISOString().slice(0, 10);
    let toDateStr = toDate.toISOString().slice(0, 10);
    try{
        console.log("fromDateStr",fromDateStr)
        console.log("toDateStr",toDateStr)
        const response=await axios.get('https://financialmodelingprep.com/api/v3/historical-chart/'+interval+'/'+stockSymbol+'?from='+fromDateStr+'&to='+toDateStr+'&apikey=2KvOgizGltQa3cyNGbcRHVAiLf0ePkSv');
        const data=response.data.reverse();
        const dates = data.map(entry => entry.date);
        const prices = data.map(entry => entry.close);
        console.log("color code",currentColor)
        console.log("stock length",stocks.length)
        return({ label:stockSymbol,backgroundColor: currentColor,// Setting up the background color for the dataset
        borderColor: currentColor, data: prices,pointStyle: 'none',pointRadius: 0})
  
    }catch(error){
      console.error('Error fetching stock data:',error);
      return null;
    }
  };

  const AddStockListener=()=>{
    setShowInput(true);  
  }

  const CancelInputStockName=()=>{
    setShowInput(false);
  }

  const HandleKeyDown=(event)=>{
    if(event.key==='Enter'){
      setShowInput(false);
      setIsFetchDataset(true);
      if(stockName!==null){
        const newStock={
          "name":stockName
        }
      setStocks([...stocks,newStock])
      }
    }
  }
  

  const SubmitStockName=()=>{
    setShowInput(false);
    setIsFetchDataset(true);
    if(stockName!==null){
      const newStock={
        "name":stockName
      }
    setStocks([...stocks,newStock])
    }
  }


  const HandleStockNameChange=(e)=>{
    setStockName(e.target.value);
  }

  const removeStock = (stockToRemove) => {
    const stockNameToBeRemoved=stockToRemove.name;
    const updatedStocks = stocks.filter(stock => stock !== stockToRemove);
    setStocks(updatedStocks);

    const updatedDatasets=dataFetched.datasets.filter(dataset=>dataset.label!==stockNameToBeRemoved)
    const newChartData={
      ...dataFetched,datasets:updatedDatasets
    };
    setDataFetched(newChartData)
    if(stocks.length===0){
      setCurrentColor('rgb(0, 0, 255)')
    }
    else if(stocks.length===1){
      setCurrentColor('rgb(255, 165, 0)')
    }

  }

  useEffect(() => {
    const fetchData = async () => {
        const hold = await fetchStockData(stockName);
        // Wait for dataset to be updated
        const updatedDataset = hold;
        let newDataset={...updatedDataset};
        // if (newDataset.pointBackgroundColor===null){
        newDataset.pointBackgroundColor=Array(newDataset.data.length).fill("rgb(128,0,128)");
        // }

        // if (newDataset.pointRadius===null){
        newDataset.pointRadius=Array(newDataset.data.length).fill(0);
        // }
        
        if(buyChecked){
          console.log("here true")
          newDataset.data.forEach((value, index) => {
            // If the data point is lower than 30, update its color and value
            if (value < 170) {
              newDataset.pointBackgroundColor[index]= 'rgb(0,255,0)';
              newDataset.pointRadius[index]= 3;
            }
          });
        }
        else{
          newDataset.data.forEach((value, index) => {
            // If the data point is lower than 30, update its color and value
            if (value < 170) {
              newDataset.pointBackgroundColor[index]= 'rgb(0,255,0)';
              newDataset.pointRadius[index]= 0;
            }
          });
        }
        if(sellChecked){
          newDataset.data.forEach((value, index) => {
          // If the data point is lower than 30, update its color and value
            if (value > 200) {
              newDataset.pointBackgroundColor[index]= 'rgb(255,0,0)';
              newDataset.pointRadius[index]= 3;
            }
          });
        }
        else{
          newDataset.data.forEach((value, index) => {
            // If the data point is lower than 30, update its color and value
            if (value > 200) {
              newDataset.pointBackgroundColor[index]= 'rgb(255,0,0)';
              newDataset.pointRadius[index]= 0;
            }
          });
        }
     
      let newChartData={
        ...dataFetched,datasets:[...dataFetched.datasets,newDataset]
      }
      setDataFetched(newChartData);
      setIsFetchDataset(false);
      setStockName(null);
      if(stocks.length===0){
        setCurrentColor('rgb(0, 0, 255)')
      }
      else if(stocks.length===1){
        setCurrentColor('rgb(255, 165, 0)')
      }
    };
    if(isFetchDataset){
      fetchData();
    }

    return () => {
      // setDataset(null); // Clear chart data
    };
  }, [isFetchDataset]);


  return(
    <div className="flex flex-col w-full h-full">
    {stocks.map((stock, index) => (
        <SingleStockToBeCompared stock={stock} color={colors[index]}  removeStock={() => removeStock(stock)}/>
      ))}
      {stocks.length<=1 && (
        <div className="flex w-full h-full ml-4 my-1" >
          {showInput?(
            <div className="flex w-full h-full ">
              <PlusIcon className="w-3 h-6 mr-2" style={{fill:'#9E9E9E'}} onClick={SubmitStockName}/>
              <input className="w-content text-gray-500"type='text' placeholder="Enter stock's name" onKeyDown={HandleKeyDown} onChange={HandleStockNameChange}></input>
              <button className='text-gray-500 text-sm ml-5' onClick={CancelInputStockName}>cancel</button>
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