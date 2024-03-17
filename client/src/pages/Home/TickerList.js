import React, { useEffect, useRef, useState }  from 'react'
import Chart from 'chart.js/auto'
import star from '../../assets/star.svg';

const TickerList = () => {

  const chartRef = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);
  const [viewMore, setViewMore] = useState(false);

  const toggleViewMore = () => {
    setViewMore(!viewMore);
  };
  
    useEffect(() => {
      const ctx = chartRef.current.getContext('2d');
  
      // Example data for the chart (replace this with your actual data)
      const data = {
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7', 'Day 8', 'Day 9', 'Day 10', 'Day 11', 'Day 12', 'Day 13', 'Day 14', 'Day 15', 'Day 16', 'Day 17', 'Day 18', 'Day 19', 'Day 20', 'Day 21', 'Day 22', 'Day 23', 'Day 24', 'Day 25', 'Day 26', 'Day 27', 'Day 28', 'Day 29', 'Day 30'],
        datasets: [{
          label: 'Price Change',
          data: [150, 152, 155, 153, 156, 160, 158, 157, 159, 162, 165, 168, 170, 172, 175, 173, 171, 170, 172, 174, 176, 178, 180, 182, 184, 186, 185, 183, 181, 179], // Example data, replace with your actual data
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
          pointRadius: 5, // Remove data points
          pointHoverRadius: 0 // Remove hover points
        }]
      };
  
      const minValue = Math.min.apply(null, data);
      const maxValue = Math.max.apply(null, data);

      // Destroy previous chart instance if exists
      if (chartInstance) {
        chartInstance.destroy();
      }
  
      // Create new chart instance
      const newChartInstance = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            aspectRatio: 2, // Aspect ratio to maintain the rectangle shape
            maintainAspectRatio: true, // Enable maintaining aspect ratio
            responsive: false, // Disable automatic resizing
          plugins: {
            legend: {
              display: false // Hide legend
            },
            tooltip: {
              enabled: false // Disable tooltip
            }
          },
          layout: {
            padding: 0 // Remove padding
        },
          scales: {
            x: {
              display: false // Hide x-axis
            },
            y: {
              display: false, // Hide y-axis
              suggestedMin: minValue - 5, // Set a lower bound for the y-axis
              suggestedMax: maxValue + 5 // Set an upper bound for the y-axis
            }
          },
          elements: {
            line: {
              tension: 0.2 // Adjust line tension to control curvature
            }
          }
        }
      });
  
      setChartInstance(newChartInstance);
  
      // Cleanup function to destroy the chart when component unmounts
      return () => {
        if (newChartInstance) {
          newChartInstance.destroy();
        }
      };
    }, [chartInstance]); // Re-run effect when chartInstance changes

  return (
    <div className="mt-4">
      <div className="flex justify-between items-center mt-5 mb-4">
        <h2 class="px-4 text-2xl font-bold text-gray-700">Market Analysis</h2>
        <button onClick={ toggleViewMore } class="mt-1 text-primary dark:text-primary-400 text-sm underline"><strong>View {viewMore ? 'Less' : 'More'}</strong></button>
      </div>
      <div className="mt-4 overflow-x-auto">
        <table className="table-auto w-full mt-2">
          <thead>
            <tr>
              <th className="px-4 py-2 border-t border-b">Ticker</th>
              <th className="px-4 py-2 border-t border-b">Current Price</th>
              <th className="px-4 py-2 border-t border-b">Change</th>
              <th className="px-4 py-2 border-t border-b">Market Cap</th>
              <th className="px-4 py-2 border-t border-b">Volume</th>
              <th className="px-4 py-2 border-t border-b">Last 30 days</th>
            </tr>
            
          </thead>
          <tbody>
            {/* Render your ticker data dynamically here */}
            {/* Example row */}
            <tr className='text-center'>
              <td className="px-4 py-2 flex justify-center">
                  <button aria-label="Add to wishlist"> 
                      <img src={star} alt='Add to wishlist' className='w-6 h-6 mr-2 text-yellow-500 transition-opacity duration-300 hover:opacity-80 fill-current'/>
                  </button>
                  <div className="flex flex-col">
                      <span className="font-bold">AAPL</span>
                      <span className="block text-gray-500">Apple</span>
                  </div>
              </td>
              <td className="px-4 py-2">$150.65</td>
              <td className="px-4 py-2">
              <div className="flex flex-col">
                  <span>55.7</span>
                  <span>+23.5%</span>
              </div>
              </td>
              <td className="px-4 py-2">$2.5T</td>
              <td className="px-4 py-2">10M</td>
              <td className="px-4 py-2">
                  <canvas ref={chartRef} style={{ width: '200px', height: 'auto' }}></canvas>
              </td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TickerList;
