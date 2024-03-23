import {useState,useEffect} from "react";
import Chart from "chart.js/auto";

function DisplayChart({data,options,chartID,period,setPeriod}){
  const [chartInstance,setChartInstance]=useState(null);

  useEffect(()=>{  
    renderChart();
    return()=>{
      destroyChart();
    }
  },[data,options,period]);


  const destroyChart =()=>{
    if(chartInstance){
      chartInstance.destroy();
    }
  };

  let newChartInstance
  const renderChart=()=>{
    destroyChart()
    if (newChartInstance) {
      newChartInstance.destroy();
    }
    newChartInstance=new Chart(document.getElementById(chartID),{
      type:'line',
      data:data,
      options:options,
    });
    setChartInstance(newChartInstance);
  }

  const On1DayClicked=()=>{
    setPeriod(1)
    console.log("period",period)
  }

  const On1WeekClicked=()=>{
    setPeriod(6)
    console.log("period",period)
  }

  const On1MonthClicked=()=>{
    setPeriod(30)
    console.log("period",period)
  }

  const On6MonthClicked=()=>{
    setPeriod(180)
    console.log("period",period)
  }

  const On1YearClicked=()=>{
    setPeriod(364)
    console.log("period",period)
  }

  const On3YearClicked=()=>{
    setPeriod(1092)
    console.log("period",period)
  }

  const OnMaxClicked=()=>{
    setPeriod(5460)
    console.log("period",period)
  }

  return (
    <div className="z-[10] flex w-full h-full flex-col">
      <h2 className="mb-1 mt-3 text-xl pl-5 font-bold text-gray-700">Performance</h2>
      <div className="relative w-full pl-5">
        <div className="flex w-full absolute top-2 right-2 z-10 ">
          <ul className="flex justify-between mx-auto w-3/4">
            <button className="mr-4" onClick={On1DayClicked}>1D</button>
            <button className="mr-4" onClick={On1WeekClicked}>1W</button>
            <button className="mr-4" onClick={On1MonthClicked}>1M</button>
            <button className="mr-4" onClick={On6MonthClicked}>6M</button>
            <button className="mr-4" onClick={On1YearClicked}>1Y</button>
            <button className="mr-4" onClick={On3YearClicked}>3Y</button>
            <button className="mr-4" onClick={OnMaxClicked} >MAX</button>
          </ul>
        </div>
      </div>
      <div className="flex flex-grow pl-5 ml-2 mr-5 my-5">
        <canvas id={chartID}></canvas>
      </div>
    </div>
  );

}

export function DisplayAnalysisChart({data,options,chartID,period,setPeriod}){
  const [chartInstance,setChartInstance]=useState(null);

  useEffect(()=>{  
    renderChart();
    return()=>{
      destroyChart();
    }
  },[data,options,period]);


  const destroyChart =()=>{
    if(chartInstance){
      chartInstance.destroy();
    }
  };

  let newChartInstance
  const renderChart=()=>{
    destroyChart()
    if (newChartInstance) {
      newChartInstance.destroy();
    }
    newChartInstance=new Chart(document.getElementById(chartID),{
      type:'line',
      data:data,
      options:options,
    });
    setChartInstance(newChartInstance);
  }

  const On1DayClicked=()=>{
    setPeriod(1)
    console.log("period",period)
  }

  const On1WeekClicked=()=>{
    setPeriod(6)
    console.log("period",period)
  }

  const On1MonthClicked=()=>{
    setPeriod(30)
    console.log("period",period)
  }

  const On6MonthClicked=()=>{
    setPeriod(180)
    console.log("period",period)
  }

  const On1YearClicked=()=>{
    setPeriod(364)
    console.log("period",period)
  }

  const On3YearClicked=()=>{
    setPeriod(1092)
    console.log("period",period)
  }

  const OnMaxClicked=()=>{
    setPeriod(5460)
    console.log("period",period)
  }

  return (
    <div className="z-[10] flex w-full h-full flex-col">
      <h2 className="mb-1 mt-3 text-xl pl-5 font-bold text-gray-700">Performance</h2>
      <div className="relative w-full pl-5">
        <div className="flex w-full absolute top-2 right-2 z-10 ">
          <ul className="flex justify-between mx-auto w-3/4">
            <button className="mr-4" onClick={On1DayClicked}>1D</button>
            <button className="mr-4" onClick={On1WeekClicked}>1W</button>
            <button className="mr-4" onClick={On1MonthClicked}>1M</button>
            <button className="mr-4" onClick={On6MonthClicked}>6M</button>
            <button className="mr-4" onClick={On1YearClicked}>1Y</button>
            <button className="mr-4" onClick={On3YearClicked}>3Y</button>
            <button className="mr-4" onClick={OnMaxClicked} >MAX</button>
          </ul>
        </div>
      </div>
      <div className="flex flex-grow pl-5 ml-2 mr-5 my-5">
        <canvas id={chartID}></canvas>
      </div>
    </div>
  );

}

export default DisplayChart;

