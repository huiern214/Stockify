import React, { Component } from 'react';
import axios from 'axios';
import rocket from '../../assets/rocket.png';
import greenUpward from '../../assets/green_upward.png';
import redDownward from '../../assets/red_downward.png';
import API_KEY from '../../api/apiConfig';

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
            .get(`https://financialmodelingprep.com/api/v3/stock_market/gainers?apikey=${API_KEY}`)
            .then(response => {
                const topGainersData = response.data;
                const sortedTopGainers = topGainersData.sort((a, b) => b.changesPercentage - a.changesPercentage);
                // const topFiveGainers = sortedTopGainers.slice(0, 5); // Slice to get only the top five items
                this.setState({
                    // topGainers: topFiveGainers
                    topGainers: sortedTopGainers,
                });
            })
            .catch(error => {
                console.error('Error fetching top gainer stock data:', error);
            });
    }

    handleViewMore = () => {
        // Update state to expand the list
        this.setState({ expanded: !this.state.expanded });
    };

    render() {
        const { topGainers, expanded } = this.state;

        return (
            <div className="rounded-lg border p-5 h-full">
                <div className="flex items-center justify-between mb-3">
                    <img src={rocket} alt="Rocket Logo" className="w-6 h-auto mr-2" />
                    <h2 className="font-bold text-lg mr-auto">Top Gainer</h2>
                    <div className="flex items-center">
                        <button className="text-sm text-black opacity-35 hover:opacity-60" onClick={this.handleViewMore}>
                            View {expanded ? 'Less' : 'More'} &gt;
                        </button>
                    </div>
                </div>

                <ul className='flex flex-col h-full md:pb-5'>
                    {topGainers.slice(0, expanded ? topGainers.length : 5).map((gainer, index) => (
                        <li key={index} className="flex items-center justify-between mb-2 flex-grow">
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
