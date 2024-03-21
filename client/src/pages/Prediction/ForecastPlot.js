// React component for plotting the forecast data using Plotly

// import React from 'react';
// import Plot from 'react-plotly.js';

// const ForecastPlot = ({ actualData, forecastData, nYears }) => {
//     // Extract dates, predicted values, and confidence intervals from the forecastData
//     const dates = forecastData.map(item => item.ds);
//     const predictedValues = forecastData.map(item => item.yhat);
//     const actualValues = actualData.map(item => item.Close);
//     const lowerBound = forecastData.map(item => item.yhat_lower);
//     const upperBound = forecastData.map(item => item.yhat_upper);

//     return (
//         <div>
//             <h2>Forecast Plot for {nYears} years</h2>
//             <Plot
//                 data={[
//                     {
//                         x: dates,
//                         y: predictedValues,
//                         type: 'scatter',
//                         mode: 'lines',
//                         name: 'Predicted Value',
//                         line: { color: 'blue' },
//                     },
//                     {
//                         x: [...dates, ...dates.slice().reverse()],
//                         y: [...upperBound, ...lowerBound.slice().reverse()],
//                         fill: 'toself',
//                         fillcolor: 'rgba(0,100,80,0.2)',
//                         line: { color: 'rgba(255,255,255,0)' },
//                         name: 'Confidence Interval',
//                         showlegend: false,
//                     },
//                     {
//                         x: dates,
//                         y: actualValues,
//                         type: 'scatter',
//                         mode: 'lines',
//                         name: 'Actual Value',
//                         line: { color: 'red' },
//                     }

//                 ]}
//                 layout={{ width: 800, height: 400, title: 'Forecast Plot' }}
//             />
//         </div>
//     );
// };

// export default ForecastPlot;

import React, { useEffect, useRef } from 'react';
import Plotly from 'plotly.js-dist';

const ForecastPlot = ({ actualData, forecastData }) => {
  const plotRef = useRef(null);

//   prediction_color = '#0072B2'
// error_color = 'rgba(0, 114, 178, 0.2)'  # '#0072B2' with 0.2 opacity
// actual_color = 'black'
// cap_color = 'black'
// trend_color = '#B23B00'
// line_width = 2
// marker_size = 4

  useEffect(() => {
    const plotData = [
    {
        name: 'Actual',
        x: actualData.map((item) => item.Date),
        y: actualData.map((item) => item.Close),
        mode: 'markers',
        marker: {
          color: 'black',
          size: 4,
        },
      },
      {
        name: 'Predicted',
        x: forecastData.map((item) => item.ds),
        y: forecastData.map((item) => item.yhat),
        mode: 'lines',
        line: {
          color: '#0072B2',
          width: 2,
        },
        fillcolor: 'rgba(0, 114, 178, 0.2)',
        fill: 'tonexty',
      },
      {
        name: 'Lower Bound',
        x: forecastData.map((item) => item.ds),
        y: forecastData.map((item) => item.yhat_lower),
        mode: 'lines',
        line: {
          color: '#81BAE6',
          width: 0,
        },
        hoverinfo: 'skip',
      },
      {
        name: 'Upper Bound',
        x: forecastData.map((item) => item.ds),
        y: forecastData.map((item) => item.yhat_upper),
        mode: 'lines',
        line: {
          color: '#81BAE6',
          width: 0,
        },
        fill: 'tonexty',
        hoverinfo: 'skip',
      },
      {
        name: 'Cap',
        x: forecastData.map((item) => item.ds),
        y: forecastData.map((item) => item.cap),
        mode: 'lines',
        line: {
          color: 'black',
          dash: 'dash',
          width: 2,
        },
      },
      {
        name: 'Floor',
        x: forecastData.map((item) => item.ds),
        y: forecastData.map((item) => item.floor),
        mode: 'lines',
        line: {
          color: 'black',
          dash: 'dash',
          width: 2,
        },
      },
      
    ];

    const layout = {
      showlegend: false,
      // width: "100%",
      // height: "100%",
      yaxis: {
        title: 'Stock Price',
      },
      xaxis: {
        title: 'Date',
        type: 'date',
        rangeselector: {
          buttons: [
            {
              count: 7,
              label: '1w',
              step: 'day',
              stepmode: 'backward',
            },
            {
              count: 1,
              label: '1m',
              step: 'month',
              stepmode: 'backward',
            },
            {
              count: 6,
              label: '6m',
              step: 'month',
              stepmode: 'backward',
            },
            {
              count: 1,
              label: '1y',
              step: 'year',
              stepmode: 'backward',
            },
            {
              step: 'all',
            },
          ],
        },
        rangeslider: {
          visible: true,
        },
      },
    };

    Plotly.newPlot(plotRef.current, plotData, layout);
  }, [forecastData, actualData]);

  return <div ref={plotRef} className="w-full h-[600px]" />;
};

export default ForecastPlot;