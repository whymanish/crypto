// src/components/CryptoCards.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CryptoCards = () => {
  const [cryptoData, setCryptoData] = useState(null);

  useEffect(() => {
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => {
        setCryptoData(response.data.bpi);
      })
      .catch(error => {
        console.error('Error fetching crypto data:', error);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {cryptoData &&
        Object.keys(cryptoData).map(key => (
          <div key={key} className="bg-white rounded-lg p-4 shadow-md">
            <h2 className="text-lg font-semibold">{cryptoData[key].description}</h2>
            <p className="text-gray-600">${cryptoData[key].rate_float}</p>
          </div>
        ))}
    </div>
  );
};

export default CryptoCards;
