import React, { useState, useEffect } from 'react';
import api from '../../api/axiosConfig';
import ForecastPlot from './ForecastPlot'; // Assuming you have the ForecastPlot component in a separate file

const Prediction = () => {
    const [forecastData, setForecastData] = useState([]);
    const [actualData, setActualData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchForecastData = async () => {
            try {
                const response = await api.get('/stockify/stock-prediction');
                setForecastData(response.data);
                console.log(response.data);
                setIsLoading(false);
            } catch (error) {
                setError(error.message);
                setIsLoading(false);
            }
        };

        const fetchActualData = async () => {
            try {
                const response = await api.get('/stockify/stock-data');
                setActualData(response.data);
                console.log(response.data);
                setIsLoading(false);
            } catch (error) {
                setError(error.message);
                setIsLoading(false);
            }
        }

        fetchForecastData();
        fetchActualData();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="container mx-auto md:px-6">
        <div className="mx-[5%] md:mx-0">
            <p className="text-2xl font-semibold text-left mt-5 mb-10 text-black">
            Stock Prediction
            </p>
            <ForecastPlot actualData={actualData} forecastData={forecastData} nYears={1} /> {/* Change nYears as needed */}
            </div>
        </div>
    );
};

export default Prediction;
