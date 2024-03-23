import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const TreeMapChart = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    {
      name: 'Technology',
      data: [
        { x: 'INTC', y: 1.2 },
        { x: 'GS', y: 0.4 },
        { x: 'CSCO', y: -2.3 },
        { x: 'MSFT', y: 3.7 },
        { x: 'AAPL', y: -1.5 },
        { x: 'AMZN', y: 2.1 },
        { x: 'FB', y: -0.8 },
        { x: 'NFLX', y: 1.6 },
        { x: 'GOOGL', y: 0.3 },
        { x: 'TSLA', y: -1.2 },
      ],
    },
    {
      name: 'Finance',
      data: [
        { x: 'JPM', y: 1.2 },
        { x: 'BAC', y: 0.8 },
        { x: 'WFC', y: -1.3 },
        { x: 'C', y: 0.6 },
        { x: 'MS', y: -2.1 },
        { x: 'GS', y: 0.4 },
        { x: 'WMT', y: -0.7 },
        { x: 'V', y: 1.3 },
        { x: 'MA', y: -1.5 },
        { x: 'AXP', y: 2.9 },
      ],
    },
    {
      name: 'Healthcare',
      data: [
        { x: 'PFE', y: 0.7 },
        { x: 'MRK', y: -1.5 },
        { x: 'JNJ', y: 0.9 },
        { x: 'AMGN', y: -0.3 },
        { x: 'GILD', y: 1.1 },
        { x: 'ABBV', y: -0.9 },
        { x: 'BMY', y: 0.6 },
        { x: 'UNH', y: -1.2 },
        { x: 'MDT', y: 0.8 },
        { x: 'LLY', y: 1.5 },
      ],
    },
  ];

  const filteredData = selectedCategory === 'All' ? categories : categories.filter(cat => cat.name === selectedCategory);
  const series = filteredData.map(category => ({
    data: category.data.map(item => ({ x: item.x, y: item.y })),
  }));

  const options = {
    legend: { show: false },
    chart: { height: 350, type: 'treemap', toolbar: { show: false } },
    dataLabels: {
      enabled: true,
      style: { fontSize: '12px' },
      formatter: function (text, { value }) {
        return [text, value.toFixed(2)];
      },
      offsetY: -4,
    },
    plotOptions: {
      treemap: {
        enableShades: true,
        shadeIntensity: 0.2,
        reverseNegativeShade: true,
        colorScale: {
          ranges: [
            { from: -6, to: 0, color: '#CD363A' , opacity:2},
            { from: 0.001, to: 6, color: '#52B12C' , opacity:2},
          ],
        },
      },
    },
  };

  const handleCategoryChange = e => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div>
      <div className="flex items-center mb-4">
        <label htmlFor="categorySelect" className="mr-2">Category:</label>
        <select
          id="categorySelect"
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="border border-gray-300 rounded py-1 px-2 w-40"
        >
          <option value="All">All</option>
          <option value="Technology">Technology</option>
          <option value="Finance">Finance</option>
          <option value="Healthcare">Healthcare</option>
        </select>
      </div>
      <div id="chart">
        <ReactApexChart options={options} series={series} type="treemap" height={350} />
      </div>
    </div>
  );
};

export default TreeMapChart;
