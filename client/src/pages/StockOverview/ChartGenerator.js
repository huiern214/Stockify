import {useState,useEffect} from "react";
import Chart from "chart.js/auto";

function DisplayChart({data,options,chartID}){
  const [chartInstance,setChartInstance]=useState(null);

  useEffect(()=>{
    return()=>{
      destroyChart();
      renderChart();
    }
  },[data]);

  const destroyChart =()=>{
    if(chartInstance){
      chartInstance.destroy();
    }
  };

  let newChartInstance
  const renderChart=()=>{
    destroyChart();
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

  return (
    <div className="z-[10] flex w-full h-full flex-col ">
      <h2 className="mb-1 mt-5 text-xl pl-5 font-bold text-gray-700">Performance</h2>
      <div className="relative w-full pl-5">
        <div className="flex w-full absolute top-2 right-2 z-10">
          <ul className="flex justify-between mx-auto w-3/4">
            <button className="mr-4">1D</button>
            <button className="mr-4">1W</button>
            <button className="mr-4">1M</button>
            <button className="mr-4">6M</button>
            <button className="mr-4">1Y</button>
            <button className="mr-4">3Y</button>
            <button className="mr-4">MAX</button>
          </ul>
        </div>
      </div>
      <div className="flex flex-grow pl-5 ml-2 mr-5 my-5">
        <canvas id={chartID} />
      </div>
    </div>
  );

}

export function DisplayAnalysisChart({data,options,chartID}){
  const [chartInstance,setChartInstance]=useState(null);

  useEffect(()=>{  
    renderChart();
    return()=>{
      destroyChart();
    }
  },[data,options]);


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

  return (
    <div className="z-[10] flex w-full h-full flex-col">
      <h2 className="mb-1 mt-5 text-xl pl-5 font-bold text-gray-700">Performance</h2>
      <div className="relative w-full pl-5">
        <div className="flex w-full absolute top-2 right-2 z-10">
          <ul className="flex justify-between mx-auto w-3/4">
            <button className="mr-4">1D</button>
            <button className="mr-4">1W</button>
            <button className="mr-4">1M</button>
            <button className="mr-4">6M</button>
            <button className="mr-4">1Y</button>
            <button className="mr-4">3Y</button>
            <button className="mr-4">MAX</button>
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

