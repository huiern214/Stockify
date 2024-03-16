import React, { Component } from 'react';
import axios from 'axios';
import rocket from '../assets/rocket.png';
import greenUpward from '../assets/green_upward.png';
import redDownward from '../assets/red_downward.png';

class TopGainerStocks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topGainers: [],
            expanded: false, // Track whether the list is expanded
        };
    }

    componentDidMount() {
        // Make an API request to fetch all top gainer stock data
        axios
            .get('https://financialmodelingprep.com/api/v3/stock_market/gainers?apikey=zzIsIQczVCtNjvqK3QSNXkzW0T4fg3XB')
            .then(response => {
                const topGainersData = response.data;
                const sortedTopGainers = topGainersData.sort((a, b) => b.changesPercentage - a.changesPercentage);
                const topFiveGainers = sortedTopGainers.slice(0, 5); // Slice to get only the top five items
                this.setState({ topGainers: topFiveGainers });
            })
            .catch(error => {
                console.error('Error fetching top gainer stock data:', error);
            });
    }

    handleViewMore = () => {
        // Update state to expand the list
        this.setState({ expanded: true });
    };

    render() {
        const { topGainers, expanded } = this.state;

        return (
            <div className="rounded-lg border border-gray-300 p-5 ml-4">
                <div className="flex items-center justify-between mb-3">
                    <img src={rocket} alt="Rocket Logo" className="w-6 h-auto mr-2" />
                    <h2 className="font-bold text-lg mr-auto">Top Gainer</h2>
                    <div className="flex items-center">
                        {!expanded && (
                            <a href="#" className="text-sm text-black opacity-35 hover:opacity-60" onClick={this.handleViewMore}>
                                View more &gt;
                            </a>
                        )}
                    </div>
                </div>

                <ul>
                    {topGainers.map((gainer, index) => (
                        <li key={index} className="flex items-center justify-between mb-2">
                            <div>
                                <span className="font-bold">{gainer.symbol}</span>
                                <span className="block text-sm text-gray-500">{gainer.name}</span>
                            </div>
                            <div className="flex items-center">
                                {gainer.change >= 0 ? (
                                    <img src={greenUpward} alt="Up" className="w-3 h-3 mr-1" />
                                ) : (
                                    <img src={redDownward} alt="Down" className="w-3 h-3 mr-1" />
                                )}
                                <span className={gainer.change >= 0 ? 'text-green-600' : 'text-red-600'}>{`${gainer.changesPercentage}%`}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default TopGainerStocks;
