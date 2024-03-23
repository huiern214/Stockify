import React, { Component } from 'react';
import axios from 'axios';
import fire from '../../assets/fire.png'; // Assuming you have a fire icon
import greenUpward from '../../assets/green_upward.png';
import redDownward from '../../assets/red_downward.png';
import API_KEY from '../../api/apiConfig';

class TrendingStocks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trendingStocks: [],
            expanded: false, // Flag to track whether to show all stocks or not
        };
    }

    componentDidMount() {
        // Make an API request to fetch trending stock data
        axios.get(`https://financialmodelingprep.com/api/v3/stock_market/actives?apikey=${API_KEY}`)
            .then(response => {
                const trendingStocksData = response.data;
                this.setState({
                    trendingStocks: trendingStocksData
                }); // Store only the first five items initially
            })
            .catch(error => {
                console.error('Error fetching trending stock data:', error);
            });
    }

    handleViewMore = () => {
        this.setState({ expanded: !this.state.expanded }); 
    };

    render() {
        const { trendingStocks, expanded } = this.state;

        return (
            <div className="rounded-lg border p-5 h-full">
                <div className="flex items-center justify-between mb-3">
                    <img src={fire} alt="Trending Logo" className="w-6 h-auto mr-2" />
                    <h2 className="font-bold text-lg mr-auto">Trending</h2>
                    <div className="flex items-center">
                        <button className="text-sm text-black opacity-35 hover:opacity-60" onClick={this.handleViewMore}>
                            View {expanded ? 'Less' : 'More'} &gt;
                        </button>
                    </div>
                </div>

                <ul className='flex flex-col h-full md:pb-5'>
                    {trendingStocks.slice(0, expanded ? trendingStocks.length : 5).map((stock, index) => (
                        <li key={index} className="flex flex-grow items-center justify-between mb-2">
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
