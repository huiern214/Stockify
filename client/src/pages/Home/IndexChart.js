import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import Papa from 'papaparse';
import { Chart } from 'chart.js';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

class IndexChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataPoints: [],
            change: 0,
            percentChange: 0,
        };
    }

    componentDidMount() {
        const { csvFilePath } = this.props;
        if (csvFilePath) {
            this.loadDataFromCSV(csvFilePath);
        }
    }

    loadDataFromCSV = (filePath) => {
        Papa.parse(filePath, {
            download: true,
            header: true,
            complete: (result) => {
                const parsedData = result.data;

                // Extract 'Date', 'Open', 'High', 'Low', and 'Close' values from CSV data
                const dataPoints = parsedData.map((row) => {
                    const date = new Date(row.Date);
                    const open = parseFloat(row.Open);
                    const high = parseFloat(row.High);
                    const low = parseFloat(row.Low);
                    const close = parseFloat(row.Close);
                    return { x: date, y: [open, high, low, close] };
                });

                // Calculate change and percentage change
                const latestDataPoint = dataPoints[0];
                const previousDataPoint = dataPoints[1];
                const change = latestDataPoint.y[3] - previousDataPoint.y[3];
                const percentChange = ((change / previousDataPoint.y[3]) * 100).toFixed(2);

                this.setState({
                    dataPoints,
                    change,
                    percentChange,
                });
            },
            error: (error) => {
                console.error('Error parsing CSV file:', error);
            },
        });
    };

    render() {
        const { title } = this.props;
        const { dataPoints, change, percentChange } = this.state;

        // Calculate moving average values (simple moving average)
        const period = 1; // Adjust period as needed
        const movingAverageData = [];
        for (let i = period - 1; i < dataPoints.length; i++) {
            let sum = 0;
            for (let j = 0; j < period; j++) {
                sum += dataPoints[i - j].y[3]; // Adjust index if close price is stored at a different index
            }
            const average = sum / period;
            movingAverageData.push({ x: dataPoints[i].x, y: average });
        }

        const options = {
            theme: 'light2',
            animationEnabled: true,
            exportEnabled: false,
            width: 300,
            height: 200,
            axisX: {
                valueFormatString: 'MMM DD',
            },
            axisY: {
                includeZero: false,
            },
            data: [
                {
                    type: 'candlestick',
                    xValueFormatString: 'MMM DD',
                    yValueFormatString: '$###0.00',
                    dataPoints,
                },
                {
                    type: "line",
                    name: "Moving Average",
                    showInLegend: true,
                    markerType: "none",
                    dataPoints: movingAverageData
                }
            ],
        };

        // Determine color based on change
        let textColor = 'black';
        if (change > 0) {
            textColor = 'green';
        } else if (change < 0) {
            textColor = 'red';
        }

        return (
            <div>
                <div className="flex justify-between items-center">
                    <h2 className='font-bold'>{title}</h2>
                    <div style={{ color: textColor }}>
                        {change.toFixed(2)} ({percentChange}%)
                    </div>
                </div>
                <CanvasJSChart options={options} />
            </div>
        );
    }
}

export default IndexChart;
