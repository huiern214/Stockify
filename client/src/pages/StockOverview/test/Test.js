import { Line } from "react-chartjs-2"; // Importing the Line component from the react-chartjs-2 library

const labels = ["January", "February", "March", "April", "May", "June","July","August","September","October"];
const data = {
    labels: labels,
    datasets: [
      {
        label: "TSLA", // Setting up the label for the dataset
        backgroundColor: "rgb(255, 99, 132)", // Setting up the background color for the dataset
        borderColor: "rgb(255, 99, 132)", // Setting up the border color for the dataset
        data: [0, 10, 5, 2, 20, 30, 45,34,67,89,10], // Setting up the data for the dataset
        pointStyle: 'none',
        pointRadius: 0
      },
    ],
  };
  
  const LineChart = () => {
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
    return (
      <div className="flex w-full h-full flex-col relative">
        <span className="flex w-full h-fit pl-5 pt-2 mb-2">Performance</span>
        <div className="relative w-full ">
          <div className="flex  w-full absolute top-2 right-2 z-10">
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
        <div className="flex flex-grow pb-6 pl-8">
          <Line data={data} options={options}/> 
        </div>
      </div>
    );
  
  };

  export default LineChart;


