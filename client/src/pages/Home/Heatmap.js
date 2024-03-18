import React from 'react';

const Heatmap = ({ data }) => {
  // Calculate total number of stocks
  const totalStocks = data.reduce((acc, category) => acc + category.stocks.length, 0);

  // Calculate number of rows and columns for the grid
  const numRows = Math.ceil(Math.sqrt(totalStocks)); // Number of rows
  const numCols = Math.ceil(totalStocks / numRows); // Number of columns

  // Define grid layout using CSS Grid
  const gridStyle = {
    display: 'grid',
    gridTemplateRows: `repeat(${numRows}, auto)`, // Rows adjust based on content
    gridTemplateColumns: `repeat(${numCols}, auto)`, // Columns adjust based on content
    gap: '2px', // Gap between grid items
  };

  // Render Heatmap
  return (
    <div className="flex flex-col border rounded-lg p-5 my-5 md:my-0">
      <h2 className="font-bold text-lg mr-auto mb-3">Heatmap Analysis</h2>
      <div className="heatmap" style={gridStyle}>
        {data.map((category, index) => (
          category.stocks.map((stock, stockIndex) => {
            // Calculate size based on change value
            const size = `${Math.abs(stock.change) * 20}px`; // Adjust multiplier as needed

            return (
              <div
                key={`${index}-${stockIndex}`}
                className="stock"
                style={{
                  backgroundColor: stock.change > 0 ? '#4CAF50' : stock.change < 0 ? '#F44336' : '#607D8B', // Dark background colors
                  textAlign: 'center',
                  lineHeight: '1.5', // Adjust height as needed
                  fontSize: '12px', // Adjust font size as needed
                  color: 'white', // Text color
                  width: size,
                  height: size,
                }}
                title={`${stock.name}: ${stock.change}%`}
              >
                <div>{stock.name}</div>
                <div>{stock.change}%</div>
              </div>
            );
          })
        ))}
      </div>
      
    </div>
  );
};

export default Heatmap;

