import React, { useState, useEffect } from 'react';
import api from '../../../api/axiosConfig';
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
        <div className="mx-3 md:mx-0 border rounded-lg mt-6">
            <p className="pl-5 mb-1 text-xl font-bold text-gray-700 mt-5">
            Stock Prediction
            </p>
            <ForecastPlot actualData={actualData} forecastData={forecastData} nYears={1} /> {/* Change nYears as needed */}
        </div>
    );
};

export default Prediction;
