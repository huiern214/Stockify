import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';

function DisplayChart({ past30DaysData, chartID }) {
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    const chartOptions = {
      responsive: false,
      maintainAspectRatio: false,
      borderColor: 'rgba(135, 206, 250, 1)',
      scales: {
        x: { display: false },
        y: { display: false },
      },
      plugins: {
        legend: { display: false },
        title: { display: false},
        tooltip: { enabled: false },
      },
    };

    if (chartInstance) {
      chartInstance.destroy();
    }

    const formattedData = {
      labels: past30DaysData.map(item => item.date),
      datasets: [{
        data: past30DaysData.map(item => item.close),
        borderColor: 'rgba(0, 128, 255, 1)', // Darker shade of blue (same as chartOptions)
        backgroundColor: 'rgba(135, 206, 250, 0.2)',
        borderWidth: 1,
        fill: false,
        pointRadius: 0,
      }],
    };

    const newChartInstance = new Chart(document.getElementById(chartID), {
      type: 'line',
      data: formattedData,
      options: chartOptions,
    });

    // Update the state only if the chartInstance changes
    if (chartInstance !== newChartInstance) {
      setChartInstance(newChartInstance);
    }

    // Cleanup function
    return () => {
      if (newChartInstance) {
        newChartInstance.destroy();
      }
    };
  }, [past30DaysData, chartID]);

  return <canvas id={chartID} width={120} height={70} />;
}

export default DisplayChart;
