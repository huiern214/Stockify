import React, { Component } from 'react';
import axios from 'axios';
import fire from '../assets/fire.png'; // Assuming you have a fire icon
import greenUpward from '../assets/green_upward.png';
import redDownward from '../assets/red_downward.png';

class TrendingStocks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trendingStocks: [],
            showAll: false, // Flag to track whether to show all stocks or not
        };
    }

    componentDidMount() {
        // Make an API request to fetch trending stock data
        axios.get('https://financialmodelingprep.com/api/v3/stock_market/actives?apikey=zzIsIQczVCtNjvqK3QSNXkzW0T4fg3XB')
            .then(response => {
                const trendingStocksData = response.data;
                this.setState({ trendingStocks: trendingStocksData.slice(0, 5) }); // Store only the first five items initially
            })
            .catch(error => {
                console.error('Error fetching trending stock data:', error);
            });
    }

    handleViewMoreClick = () => {
        this.setState({ showAll: true }); // Set the flag to show all stocks
    };

    render() {
        const { trendingStocks, showAll } = this.state;

        return (
            <div className="rounded-lg border border-gray-300 p-5 ml-4">
                <div className="flex items-center justify-between mb-3">
                    <img src={fire} alt="Trending Logo" className="w-6 h-auto mr-2" />
                    <h2 className="font-bold text-lg mr-auto">Trending</h2>
                    <div className="flex items-center">
                        {!showAll && (
                            <a href="#" className="text-sm text-black opacity-35 hover:opacity-60" onClick={this.handleViewMoreClick}>
                                View more &gt;
                            </a>
                        )}
                    </div>
                </div>

                <ul>
                    {trendingStocks.map((stock, index) => (
                        <li key={index} className="flex items-center justify-between mb-2">
                            <div>
                                <span className="font-bold">{stock.symbol}</span>
                                <span className="block text-sm text-gray-500">{stock.name}</span>
                            </div>
                            <div className="flex items-center">
                                {stock.change >= 0 ? (
                                    <img src={greenUpward} alt="Up" className="w-3 h-3 mr-1" />
                                ) : (
                                    <img src={redDownward} alt="Down" className="w-3 h-3 mr-1" />
                                )}
                                <span className={stock.change >= 0 ? 'text-green-600' : 'text-red-600'}>{`${stock.changesPercentage}%`}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default TrendingStocks;
