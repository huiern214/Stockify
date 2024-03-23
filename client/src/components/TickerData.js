import { useState, useEffect } from 'react';

const useStockData = (symbol, previousPrice) => {
  const [currentPrice, setCurrentPrice] = useState(0);
  const [change, setChange] = useState(0);
  const [changePercent, setChangePercent] = useState(0);

  useEffect(() => {
    const connectWebSocket = () => {
      const socket = new WebSocket('wss://ws.finnhub.io?token=cns6hthr01qmmmfks3vgcns6hthr01qmmmfks400');

      socket.onopen = function () {
        console.log('WebSocket connection established.');
        socket.send(JSON.stringify({ 'type': 'subscribe', 'symbol': symbol }));
      };

      socket.onerror = function (error) {
        console.error('WebSocket error:', error);
        setTimeout(connectWebSocket, 500); // Retry after 1 second
      };

      socket.onclose = function (event) {
        console.log('WebSocket connection closed:', event);
        setTimeout(connectWebSocket, 500); // Retry after 1 second
      };

      socket.onmessage = function (event) {
        const message = JSON.parse(event.data);
        if (message.type === 'trade') {
          handleTradeMessage(message);
        }
      };

      function handleTradeMessage(message) {
        console.log('Received trade data:', message);
        const latestTrade = message.data[0];
        setCurrentPrice(latestTrade.p);
        const changeValue = latestTrade.p - previousPrice;
        const changePercentValue = (changeValue / previousPrice) * 100;
        setChange(changeValue);
        setChangePercent(changePercentValue);
      }

      return () => {
        socket.send(JSON.stringify({ 'type': 'unsubscribe', 'symbol': symbol }));
        socket.close();
      };
    };

    connectWebSocket();

    return () => {
      // Clean up WebSocket connection if needed
    };
  }, [symbol, previousPrice]);

  return { currentPrice, change, changePercent };
};

export default useStockData;
