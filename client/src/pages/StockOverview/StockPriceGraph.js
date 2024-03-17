import { useState,useEffect } from "react";
import Chart from "chart.js/auto"; 

const LineChart = () => {
  const [chartInstance, setChartInstance] = useState(null);

  const labels = ["January", "February", "March", "April", "May", "June","July","August","September","October"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "TSLA",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [0, 10, 5, 2, 20, 30, 45, 34, 67, 89, 10],
        pointStyle: 'none',
        pointRadius: 0
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: true
        }
      },
      y: {
        grid: {
          display: true
        }
      },
    },
    plugins: {
      title: {
        display: false
      },
      legend: {
        display: false,
      }
    }
  };

  useEffect(() => {
 // Render the chart when component mounts
    return () => {
      if (chartInstance) {
        chartInstance.destroy(); // Destroy the chart when component unmounts
      }
      renderChart();
    };
  }, []);

  const destroyChart = () => {
    if (chartInstance) {
      chartInstance.destroy();
    }
  };

  const renderChart = () => {
    destroyChart(); // Destroy the previous chart instance
    const newChartInstance = new Chart(document.getElementById('lineChart'), {
      type: 'line',
      data: data,
      options: options,
    });
    setChartInstance(newChartInstance);
  };

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
        <canvas id="lineChart" />
      </div>
    </div>
  );
};

export default LineChart;